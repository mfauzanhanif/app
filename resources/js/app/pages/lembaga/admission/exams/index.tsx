import { Head, Link, useForm, router } from '@inertiajs/react';
import { ArrowLeft, Plus, ClipboardCheck, Loader2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import AppLayout from '@/app/layouts/app.layout';
import { getAdmissionNavGroups } from '../nav-config';

interface Exam {
    id: number;
    type: string;
    schedule: string | null;
    score: number | null;
    result: string | null;
    notes: string | null;
    candidate: {
        id: number;
        registration_number: string;
        name: string;
    };
}

interface Wave {
    id: number;
    name: string;
}

interface Props {
    exams: Exam[];
    waves: Wave[];
    filters: { wave_id?: string };
    institutionCode: string;
}

const EXAM_LABELS: Record<string, string> = {
    wawancara_santri: 'Wawancara Santri',
    wawancara_wali: 'Wawancara Wali',
    tes_tulis: 'Tes Tulis',
    tes_alquran: 'Tes Al-Quran',
};

export default function ExamsIndex({ exams, waves, filters, institutionCode }: Props) {
    const applyFilter = (key: string, value: string) => {
        router.get(`/${institutionCode}/candidate-exams`, {
            ...filters,
            [key]: value || undefined,
        }, { preserveState: true, replace: true });
    };

    return (
        <>
            <Head title="Tes Seleksi" />
            <AppLayout navGroups={getAdmissionNavGroups(institutionCode)} sidebarVariant="light" institutionCode={institutionCode}>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Tes Seleksi</h1>
                        <p className="text-sm text-gray-500 mt-1">Kelola nilai dan hasil tes seleksi calon santri</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                    <select value={filters.wave_id || ''} onChange={(e) => applyFilter('wave_id', e.target.value)} className="px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm">
                        <option value="">Semua Gelombang</option>
                        {waves.map((w) => <option key={w.id} value={w.id}>{w.name}</option>)}
                    </select>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Pendaftar</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Jenis Tes</th>
                                    <th className="text-center px-5 py-3 font-bold text-gray-500 text-xs uppercase">Nilai</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Hasil</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Catatan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {exams.length === 0 ? (
                                    <tr><td colSpan={5} className="px-5 py-12 text-center text-gray-400">
                                        <ClipboardCheck className="mx-auto text-gray-300 mb-3" size={40} />
                                        <p>Belum ada data tes.</p>
                                        <p className="text-xs mt-1">Input nilai tes melalui halaman detail pendaftar.</p>
                                    </td></tr>
                                ) : (
                                    exams.map((exam) => (
                                        <tr key={exam.id} className="hover:bg-gray-50">
                                            <td className="px-5 py-3">
                                                <Link href={`/${institutionCode}/candidates/${exam.candidate.id}`} className="font-bold text-gray-800 hover:text-emerald-600">{exam.candidate.name}</Link>
                                                <p className="text-xs text-gray-400">{exam.candidate.registration_number}</p>
                                            </td>
                                            <td className="px-5 py-3 text-gray-600">{EXAM_LABELS[exam.type] || exam.type}</td>
                                            <td className="px-5 py-3 text-center">
                                                {exam.score !== null ? (
                                                    <span className="font-bold text-gray-800 text-lg">{exam.score}</span>
                                                ) : (
                                                    <span className="text-gray-300">—</span>
                                                )}
                                            </td>
                                            <td className="px-5 py-3">
                                                {exam.result ? (
                                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${exam.result === 'direkomendasikan' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                                                        {exam.result === 'direkomendasikan' ? 'Rekomendasi' : 'Tidak'}
                                                    </span>
                                                ) : (
                                                    <span className="text-xs text-gray-300">—</span>
                                                )}
                                            </td>
                                            <td className="px-5 py-3 text-gray-500 text-xs max-w-[200px] truncate">{exam.notes || '—'}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
