import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';

import PsbLayout from '@/psb/layouts/psb-layout';
import type { Wave } from '@/psb/types';

import StepIndicator from '@/psb/components/registration/StepIndicator';
import Step1Santri from '@/psb/components/registration/Step1Santri';
import Step2Parents from '@/psb/components/registration/Step2Parents';
import Step3School from '@/psb/components/registration/Step3School';
import Step4Documents from '@/psb/components/registration/Step4Documents';
import Step5Review from '@/psb/components/registration/Step5Review';
import Success from '@/psb/components/registration/Success';

interface RegistrationProps {
    wave: Wave;
}

export default function Registration({ wave }: RegistrationProps) {
    const { flash } = usePage<{
        flash?: { success?: string; error?: string };
    }>().props;
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [data, setData] = useState<any>({
        // Santri — match StoreCandidateRequest
        name: '',
        nik: '',
        nisn: '',
        pob: '',
        dob: '',
        gender: '',
        address: '',
        // Parents
        father_name: '',
        father_life_status: 'alive',
        father_education: '',
        father_job: '',
        father_phone: '',
        father_income: '',
        mother_name: '',
        mother_life_status: 'alive',
        mother_education: '',
        mother_job: '',
        mother_phone: '',
        mother_income: '',
        wali_type: 'father',
        guardian_name: '',
        guardian_job: '',
        guardian_phone: '',
        guardian_education: '',
        guardian_income: '',
        // School
        previous_school: '',
        // Documents — keys match backend validation (documents.kk, documents.akta_lahir, etc.)
        kk: null as File | null,
        akta_lahir: null as File | null,
        ktp_ortu: null as File | null,
        ijazah: null as File | null,
        foto: null as File | null,
        skl: null as File | null,
        kip: null as File | null,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const updateData = (field: string, value: any) => {
        setData((prev: any) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[field];
                return next;
            });
        }
    };

    const nextStep = () => {
        const newErrors: Record<string, string> = {};

        if (currentStep === 1) {
            if (!data.name) newErrors.name = 'Nama wajib diisi';
            if (!data.nik || data.nik.length !== 16)
                newErrors.nik = 'NIK harus 16 digit';
            if (!data.pob) newErrors.pob = 'Tempat lahir wajib diisi';
            if (!data.dob) newErrors.dob = 'Tanggal lahir wajib diisi';
            if (!data.gender) newErrors.gender = 'Jenis kelamin wajib dipilih';
            if (!data.address) newErrors.address = 'Alamat wajib diisi';
        } else if (currentStep === 2) {
            if (!data.father_name)
                newErrors.father_name = 'Nama ayah wajib diisi';
            if (!data.mother_name)
                newErrors.mother_name = 'Nama ibu wajib diisi';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        setCurrentStep((prev) => Math.min(prev + 1, 5));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const submitForm = () => {
        setIsSubmitting(true);

        // Build FormData matching StoreCandidateRequest exactly
        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('nik', data.nik);
        if (data.nisn) formData.append('nisn', data.nisn);
        formData.append('gender', data.gender);
        formData.append('pob', data.pob);
        formData.append('dob', data.dob);
        formData.append('address', data.address);
        if (data.previous_school)
            formData.append('previous_school', data.previous_school);

        // Parents array — match 'parents.*.type/name/phone/last_education/job/income/is_alive/is_guardian'
        const parents: Record<string, any>[] = [];

        if (data.father_name) {
            parents.push({
                type: 'ayah',
                name: data.father_name,
                phone: data.father_phone || null,
                last_education: data.father_education || null,
                job: data.father_job || null,
                income: data.father_income || null,
                is_alive: data.father_life_status === 'alive' ? '1' : '0',
                is_guardian: data.wali_type === 'father' ? '1' : '0',
            });
        }

        if (data.mother_name) {
            parents.push({
                type: 'ibu',
                name: data.mother_name,
                phone: data.mother_phone || null,
                last_education: data.mother_education || null,
                job: data.mother_job || null,
                income: data.mother_income || null,
                is_alive: data.mother_life_status === 'alive' ? '1' : '0',
                is_guardian: data.wali_type === 'mother' ? '1' : '0',
            });
        }

        if (data.wali_type === 'other' && data.guardian_name) {
            parents.push({
                type: 'wali',
                name: data.guardian_name,
                phone: data.guardian_phone || null,
                last_education: data.guardian_education || null,
                job: data.guardian_job || null,
                income: data.guardian_income || null,
                is_alive: '1',
                is_guardian: '1',
            });
        }

        parents.forEach((parent, idx) => {
            Object.entries(parent).forEach(([key, val]) => {
                if (val !== null && val !== undefined) {
                    formData.append(`parents[${idx}][${key}]`, String(val));
                }
            });
        });

        // Documents — keys match backend: documents.kk, documents.akta_lahir, etc.
        const docKeys = [
            'kk',
            'akta_lahir',
            'ktp_ortu',
            'ijazah',
            'foto',
            'skl',
            'kip',
        ] as const;
        docKeys.forEach((key) => {
            if (data[key]) {
                formData.append(`documents[${key}]`, data[key]);
            }
        });

        router.post(`/daftar/${wave.id}`, formData, {
            forceFormData: true,
            onSuccess: () => {
                setIsSuccess(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            onError: (errs) => {
                setErrors(errs as Record<string, string>);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            onFinish: () => setIsSubmitting(false),
        });
    };

    return (
        <PsbLayout title="Pendaftaran Santri Baru — Dar Al Tauhid">
            {/* Background Header */}
            <div className="pointer-events-none absolute top-0 left-0 -z-10 h-64 w-full bg-emerald-700 md:h-80" />

            <div className="mx-auto mt-16 max-w-4xl px-4 pt-8 pb-10 sm:px-6 md:mt-24 lg:px-8">
                {!isSuccess && (
                    <div className="relative z-10 mb-8 text-center">
                        <h1 className="mb-2 text-2xl font-extrabold text-white drop-shadow-md md:text-4xl">
                            Formulir Pendaftaran
                        </h1>
                        <p className="text-sm text-emerald-100 drop-shadow-sm md:text-base">
                            {wave.name} — {wave.institution.name}
                        </p>
                    </div>
                )}

                {/* Flash */}
                {flash?.success && (
                    <div className="relative z-10 mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                        <p className="text-sm font-medium">{flash.success}</p>
                    </div>
                )}

                {isSuccess ? (
                    <div className="animate-fade-in">
                        <Success data={data} />
                    </div>
                ) : (
                    <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                        <StepIndicator currentStep={currentStep} />

                        <div className="p-4 md:p-6">
                            {currentStep === 1 && (
                                <Step1Santri
                                    data={data}
                                    setData={updateData}
                                    errors={errors}
                                />
                            )}
                            {currentStep === 2 && (
                                <Step2Parents
                                    data={data}
                                    setData={updateData}
                                    errors={errors}
                                />
                            )}
                            {currentStep === 3 && (
                                <Step3School
                                    data={data}
                                    setData={updateData}
                                    errors={errors}
                                />
                            )}
                            {currentStep === 4 && (
                                <Step4Documents
                                    data={data}
                                    setData={updateData}
                                    errors={errors}
                                />
                            )}
                            {currentStep === 5 && <Step5Review data={data} />}

                            {/* Navigation Footer */}
                            <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-5">
                                {currentStep > 1 ? (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={isSubmitting}
                                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:scale-95 disabled:opacity-50"
                                    >
                                        <svg
                                            className="mr-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                        Kembali
                                    </button>
                                ) : (
                                    <div />
                                )}

                                {currentStep < 5 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        disabled={isSubmitting}
                                        className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 active:scale-95 disabled:opacity-50"
                                    >
                                        Selanjutnya
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={submitForm}
                                        disabled={isSubmitting}
                                        className="inline-flex items-center rounded-lg bg-emerald-600 px-8 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 active:scale-95 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="mr-2 h-5 w-5 animate-spin"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                    />
                                                </svg>
                                                Memproses...
                                            </>
                                        ) : (
                                            <>
                                                <svg
                                                    className="mr-2 h-5 w-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                    />
                                                </svg>
                                                Kirim Pendaftaran
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </PsbLayout>
    );
}
