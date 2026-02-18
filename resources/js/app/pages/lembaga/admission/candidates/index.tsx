import { Head, Link, router } from '@inertiajs/react';
import { Search, Filter, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import AppLayout from '@/app/layouts/app.layout';
import { getAdmissionNavGroups } from '../nav-config';

interface Candidate {
    id: number;
    registration_number: string;
    name: string;
    nik: string;
    gender: string;
    status: string;
    created_at: string;
    admission_wave: { id: number; name: string };
    invoices: { status: string }[];
}

interface Wave {
    id: number;
    name: string;
}

interface Status {
    value: string;
    label: string;
}

interface Props {
    candidates: {
        data: Candidate[];
        links: any[];
        current_page: number;
        last_page: number;
        total: number;
    };
    waves: Wave[];
    filters: { status?: string; wave_id?: string; search?: string };
    statuses: Status[];
    institutionCode: string;
}

const STATUS_COLORS: Record<string, string> = {
    draft: 'bg-gray-100 text-gray-600',
    diajukan: 'bg-blue-100 text-blue-700',
    diverifikasi: 'bg-indigo-100 text-indigo-700',
    jadwal_tes_ada: 'bg-yellow-100 text-yellow-700',
    lulus: 'bg-green-100 text-green-700',
    tidak_lulus: 'bg-red-100 text-red-600',
    diterima: 'bg-emerald-100 text-emerald-700',
};

export default function CandidatesIndex({ candidates, waves, filters, statuses, institutionCode }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const applyFilter = (key: string, value: string) => {
        router.get(`/${institutionCode}/candidates`, {
            ...filters,
            [key]: value || undefined,
        }, { preserveState: true, replace: true });
    };

    const handleSearch = () => applyFilter('search', search);

    return (
        <>
            <Head title="Daftar Pendaftar" />
            <AppLayout navGroups={getAdmissionNavGroups(institutionCode)} sidebarVariant="light" institutionCode={institutionCode}>
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Daftar Pendaftar</h1>
                    <p className="text-sm text-gray-500 mt-1">Total: {candidates.total} pendaftar</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 flex-1 min-w-[250px]">
                        <div className="relative flex-1">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder="Cari nama/NIK/no. reg..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm" />
                        </div>
                    </div>
                    <select value={filters.wave_id || ''} onChange={(e) => applyFilter('wave_id', e.target.value)} className="px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm">
                        <option value="">Semua Gelombang</option>
                        {waves.map((w) => <option key={w.id} value={w.id}>{w.name}</option>)}
                    </select>
                    <select value={filters.status || ''} onChange={(e) => applyFilter('status', e.target.value)} className="px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm">
                        <option value="">Semua Status</option>
                        {statuses.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">No. Reg</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Nama</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Gelombang</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Status</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Bayar</th>
                                    <th className="text-center px-5 py-3 font-bold text-gray-500 text-xs uppercase">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {candidates.data.length === 0 ? (
                                    <tr><td colSpan={6} className="px-5 py-12 text-center text-gray-400">Tidak ada data</td></tr>
                                ) : (
                                    candidates.data.map((c) => {
                                        const paidAll = c.invoices.every((i) => i.status === 'lunas');
                                        const hasUnpaid = c.invoices.some((i) => i.status === 'belum_lunas');

                                        return (
                                            <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-5 py-3 font-mono text-xs text-gray-500">{c.registration_number}</td>
                                                <td className="px-5 py-3">
                                                    <p className="font-bold text-gray-800">{c.name}</p>
                                                    <p className="text-xs text-gray-400">{c.gender === 'l' ? 'Laki-laki' : 'Perempuan'}</p>
                                                </td>
                                                <td className="px-5 py-3 text-gray-600">{c.admission_wave?.name}</td>
                                                <td className="px-5 py-3">
                                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${STATUS_COLORS[c.status] || 'bg-gray-100 text-gray-600'}`}>
                                                        {c.status.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3">
                                                    {c.invoices.length === 0 ? (
                                                        <span className="text-xs text-gray-300">—</span>
                                                    ) : paidAll ? (
                                                        <span className="text-xs font-bold text-green-600">✓ Lunas</span>
                                                    ) : hasUnpaid ? (
                                                        <span className="text-xs font-bold text-yellow-600">Belum Lunas</span>
                                                    ) : (
                                                        <span className="text-xs text-gray-400">—</span>
                                                    )}
                                                </td>
                                                <td className="px-5 py-3 text-center">
                                                    <Link href={`/${institutionCode}/candidates/${c.id}`} className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-xs font-medium bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors">
                                                        <Eye size={14} /> Detail
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {candidates.last_page > 1 && (
                        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50">
                            <span className="text-xs text-gray-500">Halaman {candidates.current_page} dari {candidates.last_page}</span>
                            <div className="flex gap-1">
                                {candidates.links.map((link: any, i: number) => (
                                    link.url ? (
                                        <Link key={i} href={link.url} className={`px-3 py-1 rounded text-xs font-medium ${link.active ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`} preserveState dangerouslySetInnerHTML={{ __html: link.label }} />
                                    ) : null
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </AppLayout>
        </>
    );
}
