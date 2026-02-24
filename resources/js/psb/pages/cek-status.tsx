import { useForm, usePage } from '@inertiajs/react';

import PsbLayout from '@/psb/layouts/psb-layout';
import type { Candidate } from '@/psb/types';
import { STATUS_MAP, formatDate, formatCurrency } from '@/psb/types';

interface CekStatusProps {
    candidates: Candidate[];
    searched: boolean;
    filters?: {
        registration_number: string;
        nik: string;
    };
}

export default function CekStatus({
    candidates,
    searched,
    filters,
}: CekStatusProps) {
    const { flash } = usePage<{
        flash?: { success?: string; error?: string };
    }>().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        registration_number: filters?.registration_number ?? '',
        nik: filters?.nik ?? '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/status');
    };

    const handleReset = () => {
        reset();
        window.location.href = '/status';
    };

    return (
        <PsbLayout title="Cek Status — PSB Dar Al Tauhid">
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
                {/* Flash Success */}
                {flash?.success && (
                    <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                        <p className="text-sm font-medium">{flash.success}</p>
                    </div>
                )}

                {!searched || candidates.length === 0 ? (
                    /* ─── Search Form ─── */
                    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-center">
                            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-white md:text-2xl">
                                Cek Status Pendaftaran
                            </h2>
                            <p className="mt-2 text-sm text-emerald-100 md:text-base">
                                Masukkan nomor pendaftaran dan NIK untuk melihat
                                status.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="registration_number"
                                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                                    >
                                        Nomor Pendaftaran
                                    </label>
                                    <input
                                        id="registration_number"
                                        type="text"
                                        placeholder="contoh: PSB-2526-0001"
                                        value={data.registration_number}
                                        onChange={(e) =>
                                            setData(
                                                'registration_number',
                                                e.target.value,
                                            )
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                    {errors.registration_number && (
                                        <p className="mt-1 text-xs text-red-600">
                                            {errors.registration_number}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="nik"
                                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                                    >
                                        NIK (Nomor Induk Kependudukan)
                                    </label>
                                    <input
                                        id="nik"
                                        type="text"
                                        placeholder="16 digit NIK"
                                        maxLength={16}
                                        value={data.nik}
                                        onChange={(e) =>
                                            setData('nik', e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                    {errors.nik && (
                                        <p className="mt-1 text-xs text-red-600">
                                            {errors.nik}
                                        </p>
                                    )}
                                </div>

                                {/* Not found message */}
                                {searched && candidates.length === 0 && (
                                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                        Data pendaftaran tidak ditemukan.
                                        Pastikan nomor pendaftaran dan NIK
                                        benar.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50"
                                >
                                    {processing ? (
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
                                            Memeriksa...
                                        </>
                                    ) : (
                                        'Cek Status'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    /* ─── Results ─── */
                    <div className="space-y-6">
                        {candidates.map((candidate) => {
                            const statusInfo = STATUS_MAP[candidate.status] ?? {
                                label: candidate.status,
                                color: 'bg-gray-100 text-gray-600',
                            };

                            return (
                                <div
                                    key={candidate.id}
                                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
                                >
                                    {/* Candidate Header */}
                                    <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center md:p-6">
                                        <div className="flex items-center">
                                            <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                                                <svg
                                                    className="h-6 w-6 text-emerald-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    {candidate.name}
                                                </h3>
                                                <p className="text-xs text-gray-500">
                                                    {
                                                        candidate.registration_number
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusInfo.color}`}
                                            >
                                                {statusInfo.label}
                                            </span>
                                            <button
                                                onClick={handleReset}
                                                className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-red-500"
                                                title="Cari ulang"
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-5 md:p-6">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <InfoItem
                                                label="Lembaga"
                                                value={
                                                    candidate.institution.name
                                                }
                                            />
                                            <InfoItem
                                                label="Gelombang"
                                                value={
                                                    candidate.admission_wave
                                                        .name
                                                }
                                            />
                                            <InfoItem
                                                label="Tanggal Daftar"
                                                value={formatDate(
                                                    candidate.created_at,
                                                )}
                                            />
                                        </div>

                                        {/* Invoices */}
                                        {candidate.invoices.length > 0 && (
                                            <div className="mt-6">
                                                <h4 className="mb-3 text-sm font-semibold text-gray-700">
                                                    Tagihan Pembayaran
                                                </h4>
                                                <div className="space-y-2">
                                                    {candidate.invoices.map(
                                                        (inv) => (
                                                            <div
                                                                key={inv.id}
                                                                className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 p-3"
                                                            >
                                                                <div>
                                                                    <span className="text-sm font-medium text-gray-800">
                                                                        {
                                                                            inv.code
                                                                        }
                                                                    </span>
                                                                    <span className="ml-2 text-xs text-gray-500">
                                                                        (
                                                                        {
                                                                            inv.type
                                                                        }
                                                                        )
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-sm font-bold text-gray-900">
                                                                        {formatCurrency(
                                                                            inv.amount,
                                                                        )}
                                                                    </span>
                                                                    <span
                                                                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${inv.status === 'lunas' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}
                                                                    >
                                                                        {inv.status ===
                                                                        'lunas'
                                                                            ? 'Lunas'
                                                                            : 'Belum Lunas'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Documents */}
                                        {candidate.documents.length > 0 && (
                                            <div className="mt-6">
                                                <h4 className="mb-3 text-sm font-semibold text-gray-700">
                                                    Dokumen
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {candidate.documents.map(
                                                        (doc) => (
                                                            <span
                                                                key={doc.id}
                                                                className={`rounded-full px-3 py-1 text-xs font-medium ${doc.is_valid === true ? 'bg-emerald-100 text-emerald-700' : doc.is_valid === false ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}
                                                            >
                                                                {doc.file_type.replace(
                                                                    /_/g,
                                                                    ' ',
                                                                )}
                                                                {doc.is_valid ===
                                                                    true &&
                                                                    ' ✓'}
                                                                {doc.is_valid ===
                                                                    false &&
                                                                    ' ✗'}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </PsbLayout>
    );
}

function InfoItem({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <dt className="text-xs font-medium text-gray-500">{label}</dt>
            <dd className="mt-0.5 text-sm font-semibold text-gray-900">
                {value}
            </dd>
        </div>
    );
}
