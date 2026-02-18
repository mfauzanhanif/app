import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Calendar, Users, Edit, ToggleRight, ToggleLeft } from 'lucide-react';
import AppLayout from '@/app/layouts/app.layout';
import { getAdmissionNavGroups } from '../nav-config';

interface Wave {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    exam_date: string | null;
    announcement_date: string | null;
    registration_fee: number;
    description: string | null;
    is_active: boolean;
    candidates_count: number;
    academic_year: { id: number; name: string };
}

interface Props {
    wave: Wave;
    institutionCode: string;
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

export default function WaveShow({ wave, institutionCode }: Props) {
    return (
        <>
            <Head title={wave.name} />
            <AppLayout navGroups={getAdmissionNavGroups(institutionCode)} sidebarVariant="light" institutionCode={institutionCode}>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Link href={`/${institutionCode}/admission-waves`} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"><ArrowLeft size={16} /></Link>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">{wave.name}</h1>
                            <p className="text-xs text-gray-400">TA {wave.academic_year.name}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {wave.is_active ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full"><ToggleRight size={14} /> Aktif</span>
                        ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full"><ToggleLeft size={14} /> Nonaktif</span>
                        )}
                        <Link href={`/${institutionCode}/admission-waves/${wave.id}/edit`} className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200"><Edit size={14} /> Edit</Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-white rounded-xl border border-gray-100 p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><span className="text-gray-400">Tanggal Buka</span><p className="font-bold text-gray-800">{formatDate(wave.start_date)}</p></div>
                            <div><span className="text-gray-400">Tanggal Tutup</span><p className="font-bold text-gray-800">{formatDate(wave.end_date)}</p></div>
                            <div><span className="text-gray-400">Tanggal Tes</span><p className="font-bold text-gray-800">{wave.exam_date ? formatDate(wave.exam_date) : '-'}</p></div>
                            <div><span className="text-gray-400">Tanggal Pengumuman</span><p className="font-bold text-gray-800">{wave.announcement_date ? formatDate(wave.announcement_date) : '-'}</p></div>
                            <div><span className="text-gray-400">Biaya Pendaftaran</span><p className="font-bold text-emerald-700 text-lg">{formatCurrency(wave.registration_fee)}</p></div>
                            <div><span className="text-gray-400">Jumlah Pendaftar</span><p className="font-bold text-gray-800 text-lg">{wave.candidates_count}</p></div>
                        </div>
                        {wave.description && (
                            <div className="pt-4 border-t border-gray-100">
                                <span className="text-gray-400 text-sm">Deskripsi</span>
                                <p className="text-sm text-gray-700 mt-1">{wave.description}</p>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <Link href={`/${institutionCode}/candidates?wave_id=${wave.id}`} className="block bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all text-center">
                            <Users className="mx-auto text-emerald-600 mb-2" size={32} />
                            <p className="font-bold text-gray-800 text-lg">{wave.candidates_count}</p>
                            <p className="text-sm text-gray-500">Pendaftar</p>
                            <span className="text-xs text-emerald-600 font-medium mt-2 inline-block">Lihat Semua →</span>
                        </Link>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
