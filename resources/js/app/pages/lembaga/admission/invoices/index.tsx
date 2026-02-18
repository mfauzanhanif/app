import { Head, Link, router } from '@inertiajs/react';
import { Wallet, CheckCircle, XCircle, Clock, Search, Eye } from 'lucide-react';
import { useState } from 'react';
import AppLayout from '@/app/layouts/app.layout';
import { getAdmissionNavGroups } from '../nav-config';

interface Invoice {
    id: number;
    code: string;
    amount: number;
    type: string;
    status: string;
    proof_path: string | null;
    verified_at: string | null;
    candidate: {
        id: number;
        registration_number: string;
        name: string;
    };
}

interface Props {
    invoices: {
        data: Invoice[];
        links: any[];
        current_page: number;
        last_page: number;
        total: number;
    };
    filters: { status?: string; search?: string };
    institutionCode: string;
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

export default function InvoicesIndex({ invoices, filters, institutionCode }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const applyFilter = (key: string, value: string) => {
        router.get(`/${institutionCode}/admission-invoices`, {
            ...filters,
            [key]: value || undefined,
        }, { preserveState: true, replace: true });
    };

    const verifyPayment = (invoiceId: number) => {
        if (!confirm('Verifikasi pembayaran ini?')) return;
        router.put(`/${institutionCode}/admission-invoices/${invoiceId}/verify`, {}, { preserveScroll: true });
    };

    return (
        <>
            <Head title="Tagihan PSB" />
            <AppLayout navGroups={getAdmissionNavGroups(institutionCode)} sidebarVariant="light" institutionCode={institutionCode}>
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Tagihan PSB</h1>
                    <p className="text-sm text-gray-500 mt-1">Total: {invoices.total} tagihan</p>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                    <div className="relative flex-1 min-w-[250px]">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && applyFilter('search', search)} placeholder="Cari kode/nama..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm" />
                    </div>
                    <select value={filters.status || ''} onChange={(e) => applyFilter('status', e.target.value)} className="px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm">
                        <option value="">Semua Status</option>
                        <option value="belum_lunas">Belum Lunas</option>
                        <option value="lunas">Lunas</option>
                        <option value="dibatalkan">Dibatalkan</option>
                    </select>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Kode</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Pendaftar</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Tipe</th>
                                    <th className="text-right px-5 py-3 font-bold text-gray-500 text-xs uppercase">Jumlah</th>
                                    <th className="text-left px-5 py-3 font-bold text-gray-500 text-xs uppercase">Status</th>
                                    <th className="text-center px-5 py-3 font-bold text-gray-500 text-xs uppercase">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {invoices.data.length === 0 ? (
                                    <tr><td colSpan={6} className="px-5 py-12 text-center text-gray-400">Tidak ada tagihan</td></tr>
                                ) : (
                                    invoices.data.map((inv) => (
                                        <tr key={inv.id} className="hover:bg-gray-50">
                                            <td className="px-5 py-3 font-mono text-xs text-gray-500">{inv.code}</td>
                                            <td className="px-5 py-3">
                                                <p className="font-bold text-gray-800">{inv.candidate.name}</p>
                                                <p className="text-xs text-gray-400">{inv.candidate.registration_number}</p>
                                            </td>
                                            <td className="px-5 py-3 text-gray-600">{inv.type === 'biaya_formulir' ? 'Formulir' : 'Daftar Ulang'}</td>
                                            <td className="px-5 py-3 text-right font-bold text-emerald-700">{formatCurrency(inv.amount)}</td>
                                            <td className="px-5 py-3">
                                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${inv.status === 'lunas' ? 'bg-green-100 text-green-700' : inv.status === 'dibatalkan' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-700'}`}>
                                                    {inv.status === 'lunas' ? 'Lunas' : inv.status === 'dibatalkan' ? 'Dibatalkan' : 'Belum Lunas'}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3 text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    {inv.proof_path && inv.status === 'belum_lunas' && (
                                                        <button onClick={() => verifyPayment(inv.id)} className="text-xs font-medium bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-100">
                                                            <CheckCircle size={12} className="inline mr-1" />Verifikasi
                                                        </button>
                                                    )}
                                                    <Link href={`/${institutionCode}/candidates/${inv.candidate.id}`} className="text-xs font-medium bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-100">
                                                        <Eye size={12} className="inline mr-1" />Detail
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {invoices.last_page > 1 && (
                        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50">
                            <span className="text-xs text-gray-500">Halaman {invoices.current_page} dari {invoices.last_page}</span>
                            <div className="flex gap-1">
                                {invoices.links.map((link: any, i: number) => (
                                    link.url ? <Link key={i} href={link.url} className={`px-3 py-1 rounded text-xs font-medium ${link.active ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`} preserveState dangerouslySetInnerHTML={{ __html: link.label }} /> : null
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </AppLayout>
        </>
    );
}
