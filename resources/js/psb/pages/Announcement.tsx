import { useForm } from '@inertiajs/react';
import { type FormEvent } from 'react';
import PsbLayout from '../layouts/psb-layout';
import type { Candidate } from '../types';
import { STATUS_MAP, EXAM_LABELS, formatDate } from '../types';

interface AnnouncementProps {
    candidates: Candidate[];
    searched: boolean;
    filters?: { registration_number: string; nik: string };
}

export default function Announcement({ candidates, searched, filters }: AnnouncementProps) {
    return (
        <PsbLayout title="Pengumuman">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Pengumuman Hasil Seleksi</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Masukkan nomor pendaftaran dan NIK untuk melihat hasil seleksi
                    </p>
                </div>

                {/* Lookup Form */}
                <LookupForm action="/pengumuman" filters={filters} />

                {/* Results */}
                {searched && (
                    <div className="mt-8">
                        {candidates.length === 0 ? (
                            <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                                    <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                    Belum ada pengumuman
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    Hasil seleksi belum diumumkan atau data tidak ditemukan. Pastikan nomor pendaftaran dan NIK benar.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {candidates.map((candidate) => (
                                    <ResultCard key={candidate.id} candidate={candidate} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </PsbLayout>
    );
}

function LookupForm({ action, filters }: { action: string; filters?: { registration_number: string; nik: string } }) {
    const { data, setData, post, processing, errors } = useForm({
        registration_number: filters?.registration_number ?? '',
        nik: filters?.nik ?? '',
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post(action);
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="p-6 sm:p-8">
                    <div className="space-y-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Nomor Pendaftaran <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.registration_number}
                                onChange={(e) => setData('registration_number', e.target.value)}
                                placeholder="PSB/2026/MI/0001"
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                            {errors.registration_number && <p className="mt-1 text-xs text-red-500">{errors.registration_number}</p>}
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                NIK Calon Santri <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.nik}
                                onChange={(e) => setData('nik', e.target.value)}
                                placeholder="16 digit NIK"
                                maxLength={16}
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                            {errors.nik && <p className="mt-1 text-xs text-red-500">{errors.nik}</p>}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50 sm:px-8">
                    <button
                        type="submit"
                        disabled={processing || !data.registration_number || !data.nik}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200/40 transition-all hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl disabled:opacity-40 dark:shadow-emerald-900/20"
                    >
                        {processing ? (
                            <>
                                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Mencari...
                            </>
                        ) : (
                            <>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                Cek Pengumuman
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}

function ResultCard({ candidate }: { candidate: Candidate }) {
    const passed = candidate.status === 'lulus' || candidate.status === 'diterima';
    const status = STATUS_MAP[candidate.status] ?? { label: candidate.status, color: 'bg-gray-100 text-gray-600' };

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {/* Result Banner */}
            <div className={`px-6 py-8 text-center ${passed
                ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600'
                : 'bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800'
                }`}>
                <div className="mb-3">
                    {passed ? (
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                            <svg className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                    ) : (
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                            <svg className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                </div>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                    {passed ? 'SELAMAT, ANDA DINYATAKAN LULUS!' : 'MOHON MAAF, ANDA BELUM LULUS'}
                </h2>
                <p className="mt-2 text-sm text-white/80">{candidate.registration_number}</p>
            </div>

            <div className="p-6">
                {/* Candidate Info */}
                <div className="grid gap-4 text-sm sm:grid-cols-3">
                    <div>
                        <p className="text-xs text-gray-400">Nama Santri</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{candidate.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Lembaga</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{candidate.institution.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Gelombang</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{candidate.admission_wave.name}</p>
                    </div>
                </div>

                {/* Exam Results */}
                {candidate.exams.length > 0 && (
                    <div className="mt-6">
                        <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Hasil Tes</h4>
                        <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
                                        <th className="px-4 py-2.5 text-left font-medium text-gray-500 dark:text-gray-400">Jenis Tes</th>
                                        <th className="px-4 py-2.5 text-center font-medium text-gray-500 dark:text-gray-400">Nilai</th>
                                        <th className="px-4 py-2.5 text-center font-medium text-gray-500 dark:text-gray-400">Hasil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {candidate.exams.map((exam) => (
                                        <tr key={exam.id} className="border-b border-gray-50 last:border-0 dark:border-gray-800">
                                            <td className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                                                {EXAM_LABELS[exam.type] ?? exam.type}
                                            </td>
                                            <td className="px-4 py-3 text-center font-bold text-gray-900 dark:text-white">
                                                {exam.score ?? '-'}
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                {exam.result && (
                                                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold ${exam.result === 'lulus'
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                                        : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300'
                                                        }`}>
                                                        {exam.result === 'lulus' ? 'Lulus' : 'Tidak Lulus'}
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Download Certificate */}
                {passed && (
                    <div className="mt-6 flex justify-center">
                        <a
                            href={`/sertifikat/${candidate.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200/40 transition-all hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl dark:shadow-emerald-900/20"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download Surat Kelulusan
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
