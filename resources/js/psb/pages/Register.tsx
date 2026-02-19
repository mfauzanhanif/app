import { useForm } from '@inertiajs/react';
import { type FormEvent, useState } from 'react';
import PsbLayout from '../layouts/psb-layout';
import type { Wave } from '../types';
import { formatCurrency } from '../types';

interface RegisterProps {
    wave: Wave;
}

const STEPS = ['Data Santri', 'Data Keluarga', 'Upload Berkas'];

export default function Register({ wave }: RegisterProps) {
    const [step, setStep] = useState(0);

    const { data, setData, post, processing, errors } = useForm({
        // Biodata
        nik: '',
        name: '',
        gender: 'L' as 'L' | 'P',
        pob: '',
        dob: '',
        previous_school: '',
        nisn: '',
        address: '',
        // Kontak Wali
        guardian_phone: '',
        guardian_email: '',
        // Keluarga
        families: [
            { type: 'ayah', nik: '', name: '', phone: '', job: '', income: '' },
            { type: 'ibu', nik: '', name: '', phone: '', job: '', income: '' },
        ],
        // Dokumen
        documents: {} as Record<string, File | null>,
    });

    function updateFamily(index: number, field: string, value: string) {
        const updated = [...data.families];
        (updated[index] as any)[field] = value;
        setData('families', updated);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post(`/daftar/${wave.id}`, { forceFormData: true });
    }

    function canGoNext() {
        if (step === 0) return data.nik && data.name && data.dob && data.guardian_phone;
        if (step === 1) return data.families[0].name && data.families[1].name;
        return true;
    }

    return (
        <PsbLayout title={`Pendaftaran — ${wave.name}`}>
            <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 text-center">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {wave.institution.name}
                    </span>
                    <h1 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">{wave.name}</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Biaya Formulir: <strong className="text-emerald-600">{formatCurrency(wave.registration_fee)}</strong>
                    </p>
                </div>

                {/* Step Indicator */}
                <div className="mb-10 flex items-center justify-center gap-2">
                    {STEPS.map((label, i) => (
                        <div key={label} className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => i < step && setStep(i)}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${i === step
                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200/50'
                                    : i < step
                                        ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300'
                                        : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500'
                                    }`}
                            >
                                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${i <= step ? 'bg-white/20' : ''
                                    }`}>
                                    {i < step ? '✓' : i + 1}
                                </span>
                                <span className="hidden sm:inline">{label}</span>
                            </button>
                            {i < STEPS.length - 1 && (
                                <div className={`hidden h-px w-8 sm:block ${i < step ? 'bg-emerald-300' : 'bg-gray-200 dark:bg-gray-700'}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="p-6 sm:p-8">
                            {/* Step 1: Biodata + Kontak Wali */}
                            {step === 0 && (
                                <div className="space-y-6">
                                    <SectionTitle>Data Calon Santri</SectionTitle>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <InputField label="NIK" value={data.nik} onChange={(v) => setData('nik', v)} error={errors.nik} required />
                                        <InputField label="Nama Lengkap" value={data.name} onChange={(v) => setData('name', v)} error={errors.name} required />
                                        <SelectField
                                            label="Jenis Kelamin"
                                            value={data.gender}
                                            onChange={(v) => setData('gender', v as 'L' | 'P')}
                                            options={[
                                                { value: 'L', label: 'Laki-laki' },
                                                { value: 'P', label: 'Perempuan' },
                                            ]}
                                        />
                                        <InputField label="Tempat Lahir" value={data.pob} onChange={(v) => setData('pob', v)} error={errors.pob} />
                                        <InputField label="Tanggal Lahir" type="date" value={data.dob} onChange={(v) => setData('dob', v)} error={errors.dob} required />
                                        <InputField label="NISN" value={data.nisn} onChange={(v) => setData('nisn', v)} error={errors.nisn} />
                                        <InputField label="Asal Sekolah" value={data.previous_school} onChange={(v) => setData('previous_school', v)} error={errors.previous_school} className="sm:col-span-2" />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Alamat Lengkap</label>
                                        <textarea
                                            rows={3}
                                            value={data.address}
                                            onChange={(e) => setData('address', e.target.value)}
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>

                                    {/* Kontak Wali */}
                                    <SectionTitle>Kontak Wali / Orang Tua</SectionTitle>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <InputField label="No. HP Wali" value={data.guardian_phone} onChange={(v) => setData('guardian_phone', v)} error={errors.guardian_phone} required placeholder="08xxxxxxxxxx" />
                                        <InputField label="Email Wali (opsional)" value={data.guardian_email} onChange={(v) => setData('guardian_email', v)} error={errors.guardian_email} type="email" placeholder="email@contoh.com" />
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Keluarga */}
                            {step === 1 && (
                                <div className="space-y-8">
                                    {data.families.map((fam, idx) => (
                                        <div key={fam.type}>
                                            <SectionTitle>{fam.type === 'ayah' ? 'Data Ayah' : 'Data Ibu'}</SectionTitle>
                                            <div className="mt-4 grid gap-5 sm:grid-cols-2">
                                                <InputField label="NIK" value={fam.nik} onChange={(v) => updateFamily(idx, 'nik', v)} />
                                                <InputField label="Nama Lengkap" value={fam.name} onChange={(v) => updateFamily(idx, 'name', v)} required />
                                                <InputField label="No. Telepon" value={fam.phone} onChange={(v) => updateFamily(idx, 'phone', v)} />
                                                <InputField label="Pekerjaan" value={fam.job} onChange={(v) => updateFamily(idx, 'job', v)} />
                                                <InputField label="Penghasilan /bulan" value={fam.income} onChange={(v) => updateFamily(idx, 'income', v)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Step 3: Dokumen */}
                            {step === 2 && (
                                <div className="space-y-6">
                                    <SectionTitle>Upload Berkas</SectionTitle>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Upload dokumen dalam format JPG, PNG, atau PDF (maks 5MB per file).
                                    </p>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        {[
                                            { key: 'akta_lahir', label: 'Akta Kelahiran' },
                                            { key: 'kk', label: 'Kartu Keluarga' },
                                            { key: 'foto', label: 'Pas Foto (3x4)' },
                                            { key: 'rapor', label: 'Rapor Terakhir' },
                                        ].map((doc) => (
                                            <FileUpload
                                                key={doc.key}
                                                label={doc.label}
                                                file={data.documents[doc.key] ?? null}
                                                onChange={(file) =>
                                                    setData('documents', { ...data.documents, [doc.key]: file })
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50 sm:px-8">
                            {step > 0 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                    Sebelumnya
                                </button>
                            ) : <div />}

                            {step < STEPS.length - 1 ? (
                                <button
                                    type="button"
                                    disabled={!canGoNext()}
                                    onClick={() => setStep(step + 1)}
                                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    Selanjutnya
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50"
                                >
                                    {processing ? (
                                        <>
                                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            Kirim Pendaftaran
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </PsbLayout>
    );
}

/* ---------- Form Components ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
            <div className="h-5 w-1 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500" />
            {children}
        </h3>
    );
}

function InputField({
    label, value, onChange, error, type = 'text', required, className = '', placeholder,
}: {
    label: string; value: string; onChange: (v: string) => void; error?: string; type?: string; required?: boolean; className?: string; placeholder?: string;
}) {
    return (
        <div className={className}>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}

function SelectField({
    label, value, onChange, options,
}: {
    label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[];
}) {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
}

function FileUpload({ label, file, onChange }: { label: string; file: File | null; onChange: (f: File | null) => void }) {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-4 transition-all hover:border-emerald-400 hover:bg-emerald-50/30 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-emerald-600">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {file ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    )}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-700 dark:text-gray-300">
                        {file ? file.name : 'Pilih file...'}
                    </p>
                    <p className="text-xs text-gray-400">{file ? `${(file.size / 1024).toFixed(0)} KB` : 'JPG, PNG, PDF (maks 5MB)'}</p>
                </div>
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="hidden"
                    onChange={(e) => onChange(e.target.files?.[0] ?? null)}
                />
            </label>
        </div>
    );
}
