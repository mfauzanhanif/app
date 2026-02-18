import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, CheckCircle, XCircle, Trophy, CalendarDays } from 'lucide-react';

interface Exam {
    id: number;
    type: string;
    score: number | null;
    result: string | null;
}

interface Candidate {
    id: number;
    registration_number: string;
    name: string;
    status: string;
    institution: { id: number; name: string; code: string };
    admission_wave: { id: number; name: string; announcement_date: string | null };
    exams: Exam[];
}

interface Props {
    candidates: Candidate[];
}

const EXAM_LABELS: Record<string, string> = {
    wawancara_santri: 'Wawancara Santri',
    wawancara_wali: 'Wawancara Wali',
    tes_tulis: 'Tes Tulis',
    tes_alquran: 'Tes Al-Quran',
};

export default function Announcement({ candidates }: Props) {
    return (
        <>
            <Head title="Pengumuman PSB" />

            <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white font-sans">
                <div className="bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 text-sm font-medium">
                            <ArrowLeft size={16} />
                            Beranda PSB
                        </Link>
                        <h1 className="font-bold text-emerald-800">Pengumuman Kelulusan</h1>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
                    {candidates.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                            <CalendarDays className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500 font-medium">Belum ada pengumuman kelulusan.</p>
                            <p className="text-gray-400 text-sm mt-1">Silakan tunggu hingga proses seleksi selesai.</p>
                        </div>
                    ) : (
                        candidates.map((c) => {
                            const passed = c.status === 'lulus' || c.status === 'diterima';

                            return (
                                <div key={c.id} className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${passed ? 'border-green-200' : 'border-red-200'}`}>
                                    {/* Status Banner */}
                                    <div className={`p-8 text-center ${passed ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-rose-600'}`}>
                                        {passed ? (
                                            <Trophy className="mx-auto text-white mb-3" size={48} />
                                        ) : (
                                            <XCircle className="mx-auto text-white mb-3" size={48} />
                                        )}
                                        <h2 className="text-2xl font-bold text-white">
                                            {passed ? 'Selamat! Anda Dinyatakan LULUS' : 'Mohon Maaf, Anda Belum Lulus'}
                                        </h2>
                                        <p className="text-white/80 mt-2">{c.institution.name} — {c.admission_wave.name}</p>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                                            <div>
                                                <span className="text-xs text-gray-400">No. Registrasi</span>
                                                <p className="font-mono font-bold text-gray-800">{c.registration_number}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs text-gray-400">Nama</span>
                                                <p className="font-bold text-gray-800">{c.name}</p>
                                            </div>
                                        </div>

                                        {/* Exam Results */}
                                        {c.exams.length > 0 && (
                                            <div>
                                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Hasil Tes</h3>
                                                <div className="space-y-2">
                                                    {c.exams.map((exam) => (
                                                        <div key={exam.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                            <span className="text-sm text-gray-700">{EXAM_LABELS[exam.type] || exam.type}</span>
                                                            <div className="flex items-center gap-3">
                                                                {exam.score !== null && (
                                                                    <span className="text-sm font-bold text-gray-800">{exam.score}</span>
                                                                )}
                                                                {exam.result && (
                                                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${exam.result === 'direkomendasikan' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                                                                        {exam.result === 'direkomendasikan' ? 'Rekomendasi' : 'Tidak Rekomendasi'}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {passed && (
                                            <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                                <p className="text-sm text-emerald-800 font-medium">
                                                    <CheckCircle size={14} className="inline mr-1" />
                                                    Silakan lakukan daftar ulang dan lunasi biaya daftar ulang melalui halaman <Link href="/status" className="underline font-bold">Status Pendaftaran</Link>.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}
