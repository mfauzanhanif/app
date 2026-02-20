import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import PsbLayout from '../layouts/psb-layout';
import { Card, Button, Spinner } from 'flowbite-react';

// Import subcomponents
import StepIndicator from '@/psb/components/registration/StepIndicator';
import Step1Santri from '@/psb/components/registration/Step1Santri';
import Step2Parents from '@/psb/components/registration/Step2Parents';
import Step3School from '@/psb/components/registration/Step3School';
import Step4Documents from '@/psb/components/registration/Step4Documents';
import Step5Review from '@/psb/components/registration/Step5Review';
import Success from '@/psb/components/registration/Success';

// Note: For a real app, combine the typings in a separate types file or within context
export default function Registration() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Initial state matching all merged fields
    const [data, setData] = useState<any>({
        // Santri
        full_name: '',
        nik: '',
        nisn: '',
        place_of_birth: '',
        date_of_birth: '',
        gender: '',
        child_number: '',
        total_siblings: '',
        province_id: '',
        regency_id: '',
        district_id: '',
        village_id: '',
        address_street: '',
        // Parents
        father_name: '',
        father_life_status: 'alive',
        father_education: '',
        father_has_pesantren: false,
        father_pesantren_name: '',
        father_job: '',
        father_job_other: '',
        father_phone: '',
        father_no_whatsapp: false,
        mother_name: '',
        mother_life_status: 'alive',
        mother_education: '',
        mother_has_pesantren: false,
        mother_pesantren_name: '',
        mother_job: '',
        mother_job_other: '',
        mother_phone: '',
        mother_no_whatsapp: false,
        wali_type: 'father',
        guardian_name: '',
        guardian_life_status: 'alive',
        guardian_education: '',
        guardian_has_pesantren: false,
        guardian_pesantren_name: '',
        guardian_job: '',
        guardian_job_other: '',
        guardian_phone: '',
        guardian_no_whatsapp: false,
        // School
        previous_school_level: '',
        previous_school_name: '',
        target_school: '',
        target_class: '',
        // Documents
        kartu_keluarga: null,
        akta_kelahiran: null,
        ktp_ortu: null,
        ijazah: null,
        kartu_nisn: null,
        kip_kis: null,
        pas_foto: null,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const updateData = (field: string, value: any) => {
        setData((prev: any) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const nextStep = () => {
        // Validate current step before proceeding
        const newErrors: Record<string, string> = {};

        // Simplified validation logic for demonstration
        if (currentStep === 1) {
            if (!data.full_name) newErrors.full_name = 'Nama wajib diisi';
            if (!data.nik) newErrors.nik = 'NIK wajib diisi';
            if (!data.place_of_birth)
                newErrors.place_of_birth = 'Tempat lahir wajib diisi';
        } else if (currentStep === 2) {
            if (!data.father_name)
                newErrors.father_name = 'Nama ayah wajib diisi';
            if (!data.mother_name)
                newErrors.mother_name = 'Nama ibu wajib diisi';
        } else if (currentStep === 3) {
            if (!data.previous_school_level)
                newErrors.previous_school_level = 'Wajib dipilih';
            if (!data.target_school) newErrors.target_school = 'Wajib dipilih';
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

    const submitForm = async () => {
        setIsSubmitting(true);
        // Simulate an API POST request delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);

        // Actual implementation would be:
        /*
        router.post('/psb/registration', data, {
            onSuccess: () => setIsSuccess(true),
            onError: (errs) => setErrors(errs as any),
            onFinish: () => setIsSubmitting(false)
        });
        */
    };

    return (
        <PsbLayout title="Pendaftaran Santri Baru - Dar Al Tauhid">
            {/* Background Header Decoration */}
            <div className='bg-dat-primary bg-[url(&apos;data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] absolute top-0 left-0 -z-10 h-64 w-full md:h-80'></div>

            <div className="mx-auto mt-16 max-w-4xl px-4 py-10 pt-8 sm:px-6 md:mt-24 lg:px-8">
                {!isSuccess && (
                    <div className="animate-fade-in relative z-10 mb-8 text-center">
                        <h2 className="mb-2 text-2xl font-extrabold text-white drop-shadow-md md:text-4xl">
                            Formulir Pendaftaran
                        </h2>
                        <p className="text-sm text-green-100 drop-shadow-sm md:text-base">
                            Lengkapi data pendaftaran dengan benar dan sesuai
                            dokumen asli
                        </p>
                    </div>
                )}

                {isSuccess ? (
                    <div className="animate-fade-in">
                        <Success data={data} />
                    </div>
                ) : (
                    <Card className="animate-fade-in-up relative z-10 overflow-hidden border-0 shadow-2xl">
                        <StepIndicator currentStep={currentStep} />

                        <div className="p-1">
                            {/* Render Steps Based on currentStep */}
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

                            {/* Standard Navigation Footer */}
                            <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-5">
                                {currentStep > 1 ? (
                                    <Button
                                        color="light"
                                        onClick={prevStep}
                                        disabled={isSubmitting}
                                        className="px-4 transition-transform active:scale-95"
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
                                                strokeWidth="2"
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                        Kembali
                                    </Button>
                                ) : (
                                    <div></div>
                                )}

                                {currentStep < 5 ? (
                                    <Button
                                        onClick={nextStep}
                                        className="bg-dat-primary hover:bg-dat-secondary px-6 text-white shadow-md transition-transform active:scale-95"
                                        disabled={isSubmitting}
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
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={submitForm}
                                        className="bg-green-600 px-8 text-white shadow-md transition-transform hover:bg-green-700 active:scale-95"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Spinner
                                                    size="sm"
                                                    light={true}
                                                    className="mr-2"
                                                />
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
                                                        strokeWidth="2"
                                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                    />
                                                </svg>
                                                Kirim Pendaftaran
                                            </>
                                        )}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </PsbLayout>
    );
}
