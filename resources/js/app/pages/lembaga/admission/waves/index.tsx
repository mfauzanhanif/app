import { Head, Link, usePage } from '@inertiajs/react';
import { Plus, Calendar, Users, ToggleRight, ToggleLeft } from 'lucide-react';
import AppLayout, { type NavGroup } from '@/app/layouts/app.layout';
import { getAdmissionNavGroups } from './nav-config';

interface Wave {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    exam_date: string | null;
    announcement_date: string | null;
    registration_fee: number;
    is_active: boolean;
    candidates_count: number;
    academic_year: { id: number; name: string };
}

interface Props {
    waves: Wave[];
    institutionCode: string;
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

export default function WavesIndex({ waves, institutionCode }: Props) {
    return (
        <>
            <Head title="Gelombang PSB" />
            <AppLayout navGroups={getAdmissionNavGroups(institutionCode)} sidebarVariant="light" institutionCode={institutionCode}>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Gelombang Pendaftaran</h1>
                        <p className="text-sm text-gray-500 mt-1">Kelola gelombang penerimaan santri baru</p>
                    </div>
                    <Link href={`/${institutionCode}/admission-waves/create`} className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm hover:bg-emerald-700 transition-colors">
                        <Plus size={16} />
                        Tambah Gelombang
                    </Link>
                </div>

                <div className="grid gap-4">
                    {waves.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                            <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">Belum ada gelombang pendaftaran.</p>
                        </div>
                    ) : (
                        waves.map((wave) => (
                            <Link key={wave.id} href={`/${institutionCode}/admission-waves/${wave.id}`} className="block bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all hover:border-emerald-200">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-bold text-gray-800">{wave.name}</h3>
                                            {wave.is_active ? (
                                                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                                                    <ToggleRight size={12} /> Aktif
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                                                    <ToggleLeft size={12} /> Nonaktif
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-400 mb-3">TA {wave.academic_year.name}</p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-emerald-500" /> {formatDate(wave.start_date)} — {formatDate(wave.end_date)}</span>
                                            <span className="flex items-center gap-1.5"><Users size={14} className="text-blue-500" /> {wave.candidates_count} Pendaftar</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-400">Biaya</span>
                                        <p className="font-bold text-emerald-700">{formatCurrency(wave.registration_fee)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </AppLayout>
        </>
    );
}
