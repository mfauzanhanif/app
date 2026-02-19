import { useForm } from '@inertiajs/react';
import PsbLayout from '../layouts/psb-layout';
import type { Candidate } from '../types';
import { STATUS_MAP, formatCurrency, formatDate } from '../types';

interface StatusProps {
    candidates: Candidate[];
}

export default function Status({ candidates }: StatusProps) {
    return (
        <PsbLayout title="Status Pendaftaran">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Status Pendaftaran</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Pantau status pendaftaran dan invoice Anda
                    </p>
                </div>

                {candidates.length === 0 ? (
                    <EmptyState />
                ) : (
                    <div className="space-y-6">
                        {candidates.map((candidate) => (
                            <CandidateCard key={candidate.id} candidate={candidate} />
                        ))}
                    </div>
                )}
            </div>
        </PsbLayout>
    );
}

function EmptyState() {
    return (
        <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Belum ada pendaftaran</h3>
            <p className="mt-2 text-sm text-gray-500">
                Anda belum mendaftar ke gelombang PSB manapun.
            </p>
            <a
                href="/"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            >
                Daftar Sekarang
            </a>
        </div>
    );
}

function CandidateCard({ candidate }: { candidate: Candidate }) {
    const status = STATUS_MAP[candidate.status] ?? { label: candidate.status, color: 'bg-gray-100 text-gray-600' };

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {/* Header */}
            <div className="flex flex-col gap-3 border-b border-gray-100 bg-gray-50/50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700 dark:bg-gray-800/50">
                <div>
                    <p className="text-xs font-medium text-gray-400">No. Pendaftaran</p>
                    <p className="text-lg font-bold tracking-wide text-gray-900 dark:text-white">{candidate.registration_number}</p>
                </div>
                <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold ${status.color}`}>
                    {status.label}
                </span>
            </div>

            <div className="p-6">
                {/* Info Grid */}
                <div className="grid gap-4 text-sm sm:grid-cols-3">
                    <InfoItem label="Nama Santri" value={candidate.name} />
                    <InfoItem label="Lembaga" value={candidate.institution.name} />
                    <InfoItem label="Gelombang" value={candidate.admission_wave.name} />
                </div>

                {/* Documents */}
                {candidate.documents.length > 0 && (
                    <div className="mt-6">
                        <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Berkas</h4>
                        <div className="flex flex-wrap gap-2">
                            {candidate.documents.map((doc) => (
                                <span
                                    key={doc.id}
                                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${doc.is_valid === true
                                            ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                            : doc.is_valid === false
                                                ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                                                : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                                        }`}
                                >
                                    {doc.is_valid === true ? '✓' : doc.is_valid === false ? '✗' : '⏳'}
                                    {doc.file_type.replace(/_/g, ' ')}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Invoices */}
                {candidate.invoices.length > 0 && (
                    <div className="mt-6 space-y-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Invoice</h4>
                        {candidate.invoices.map((invoice) => (
                            <InvoiceCard key={invoice.id} invoice={invoice} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function InfoItem({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
            <p className="font-medium text-gray-900 dark:text-white">{value}</p>
        </div>
    );
}

function InvoiceCard({ invoice }: { invoice: { id: number; code: string; amount: number; status: string; proof_path: string | null } }) {
    const isPaid = invoice.status === 'lunas';
    const hasProof = !!invoice.proof_path;

    const { data, setData, post, processing } = useForm({ proof: null as File | null });

    function handleUpload() {
        if (!data.proof) return;
        post(`/invoices/${invoice.id}/upload-proof`, { forceFormData: true });
    }

    return (
        <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 dark:border-gray-700 dark:bg-gray-900/30">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs text-gray-400">{invoice.code}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(invoice.amount)}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${isPaid
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : hasProof
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                            : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300'
                    }`}>
                    {isPaid ? 'Lunas' : hasProof ? 'Menunggu Verifikasi' : 'Belum Lunas'}
                </span>
            </div>

            {/* Upload Proof */}
            {!isPaid && !hasProof && (
                <div className="mt-4 flex items-center gap-3">
                    <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border-2 border-dashed border-gray-200 bg-white px-3 py-2.5 text-sm transition-colors hover:border-emerald-400 dark:border-gray-600 dark:bg-gray-800">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        <span className="truncate text-gray-500">{data.proof?.name || 'Upload bukti transfer...'}</span>
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            className="hidden"
                            onChange={(e) => setData('proof', e.target.files?.[0] ?? null)}
                        />
                    </label>
                    <button
                        type="button"
                        disabled={!data.proof || processing}
                        onClick={handleUpload}
                        className="shrink-0 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 disabled:opacity-40"
                    >
                        {processing ? 'Mengunggah...' : 'Upload'}
                    </button>
                </div>
            )}
        </div>
    );
}
