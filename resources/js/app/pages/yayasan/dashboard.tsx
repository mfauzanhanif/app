import { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    Wallet,
    Building2,
    FileText,
    Settings,
    ArrowUpRight,
    Eye,
    EyeOff,
    CheckCircle,
    X,
} from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';
import { Head } from '@inertiajs/react';
import type { Institution } from '@/app/types';
import AppLayout, { type NavGroup } from '@/app/layouts/app.layout';
import StatCard from '@/app/components/stat-card';
import UnitShortcut from '@/app/components/unit-shortcut';
import { usePage } from '@inertiajs/react';

// --- MOCK DATA ---

const studentData = [
    { name: 'MI', students: 450, color: '#10b981' },
    { name: 'SMP Plus', students: 320, color: '#3b82f6' },
    { name: 'MA Nusantara', students: 280, color: '#f59e0b' },
    { name: 'Pondok', students: 600, color: '#059669' },
];

const financeData = [
    { month: 'Jan', pemasukan: 150, pengeluaran: 120 },
    { month: 'Feb', pemasukan: 180, pengeluaran: 130 },
    { month: 'Mar', pemasukan: 160, pengeluaran: 145 },
    { month: 'Apr', pemasukan: 210, pengeluaran: 160 },
    { month: 'Mei', pemasukan: 190, pengeluaran: 150 },
    { month: 'Jun', pemasukan: 230, pengeluaran: 180 },
];

const pendingApprovals = [
    { id: 1, type: 'RAB', unit: 'MI Dar Al Tauhid', title: 'Pengadaan 20 Unit Meja Kelas', date: '2 Jam lalu', amount: 'Rp 15.000.000', status: 'pending' },
    { id: 2, type: 'Cuti', unit: 'SMP Plus', title: 'Cuti Melahirkan - Bu Siti', date: '5 Jam lalu', amount: '-', status: 'pending' },
    { id: 3, type: 'Aset', unit: 'Pondok', title: 'Penghapusan Aset (Lemari Rusak)', date: '1 Hari lalu', amount: '-', status: 'review' },
];

// --- NAV CONFIG ---

const navGroups: NavGroup[] = [
    {
        title: 'Utama',
        items: [
            { icon: <LayoutDashboard size={20} />, label: 'Dashboard Ikhtisar', active: true },
            { icon: <Building2 size={20} />, label: 'Data Lembaga' },
            { icon: <Users size={20} />, label: 'Manajemen SDM' },
        ],
    },
    {
        title: 'Keuangan & Aset',
        items: [
            { icon: <Wallet size={20} />, label: 'Keuangan Pusat' },
            { icon: <FileText size={20} />, label: 'Approval Anggaran', badge: '3' },
            { icon: <Building2 size={20} />, label: 'Aset & Inventaris' },
        ],
    },
    {
        title: 'Sistem',
        items: [
            { icon: <Settings size={20} />, label: 'Pengaturan Global' },
        ],
    },
];

// --- COMPONENT ---

interface DashboardYayasanProps {
    institution: Institution;
}

export default function DashboardYayasan({ institution }: DashboardYayasanProps) {
    const [showBalance, setShowBalance] = useState(true);
    const { auth } = usePage<{ auth: { user: { name: string; email: string } } }>().props;

    return (
        <>
            <Head title="Dashboard Yayasan" />
            <AppLayout
                navGroups={navGroups}
                sidebarVariant="dark"
                institutionCode={institution.code}
                roleLabel="Operator Yayasan"
            >
                {/* Welcome */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Ahlan wa Sahlan, {auth.user.name.split(' ')[0]} 👋</h2>
                        <p className="text-gray-500 mt-1">Berikut adalah ringkasan eksekutif perkembangan Yayasan hari ini.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition-colors">
                            Download Laporan
                        </button>
                        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 shadow-sm shadow-emerald-200 transition-colors">
                            + User Baru
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        icon={<Users size={22} />}
                        iconBg="bg-blue-50 text-blue-600"
                        title="Total Peserta Didik"
                        value="1,650"
                        subtitle="Gabungan 4 Unit Lembaga"
                        badge={
                            <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                <ArrowUpRight size={14} className="mr-1" /> +5%
                            </span>
                        }
                    />

                    <StatCard
                        icon={<Wallet size={22} />}
                        iconBg="bg-emerald-50 text-emerald-600"
                        title="Saldo Kas Tunai (Global)"
                        value={showBalance ? 'Rp 850.250.000' : 'Rp •••••••••'}
                        subtitle="Update: Hari ini, 08:00 WIB"
                        badge={
                            <button onClick={() => setShowBalance(!showBalance)} className="text-gray-400 hover:text-gray-600">
                                {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
                            </button>
                        }
                    >
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-50 rounded-full opacity-50 z-0" />
                    </StatCard>

                    <StatCard
                        icon={<FileText size={22} />}
                        iconBg="bg-amber-50 text-amber-600"
                        title="Menunggu Persetujuan"
                        value="7"
                        subtitle="3 RAB, 2 Cuti, 2 Aset"
                        badge={
                            <span className="flex items-center text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                                Butuh Aksi
                            </span>
                        }
                    />

                    <StatCard
                        icon={<Building2 size={22} />}
                        iconBg="bg-purple-50 text-purple-600"
                        title="Total SDM Aktif"
                        value="142"
                        subtitle="98 Guru, 44 Tendik"
                    />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="font-bold text-gray-800">Arus Kas Yayasan</h3>
                                <p className="text-xs text-gray-500">Pemasukan vs Pengeluaran (6 Bulan Terakhir)</p>
                            </div>
                            <select className="text-sm border-gray-200 rounded-lg bg-gray-50 p-2 focus:ring-emerald-500">
                                <option>Semester Ini</option>
                                <option>Tahun Ini</option>
                            </select>
                        </div>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={financeData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                    <Line type="monotone" dataKey="pemasukan" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Pemasukan (Juta)" />
                                    <Line type="monotone" dataKey="pengeluaran" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Pengeluaran (Juta)" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                        <div className="mb-4">
                            <h3 className="font-bold text-gray-800">Sebaran Siswa</h3>
                            <p className="text-xs text-gray-500">Proporsi santri per lembaga</p>
                        </div>
                        <div className="flex-1 min-h-[200px] relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={studentData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="students">
                                        {studentData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-2xl font-bold text-gray-800">1.6K</span>
                                <span className="text-xs text-gray-400">Total</span>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2">
                            {studentData.map((item) => (
                                <div key={item.name} className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-gray-600">{item.name}</span>
                                    </div>
                                    <span className="font-semibold text-gray-800">{item.students}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800">Menunggu Persetujuan Anda</h3>
                            <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">Lihat Semua</a>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {pendingApprovals.map((item) => (
                                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                                            ${item.unit.includes('MI') ? 'bg-emerald-100 text-emerald-600' : ''}
                                            ${item.unit.includes('SMP') ? 'bg-blue-100 text-blue-600' : ''}
                                            ${item.unit.includes('Pondok') ? 'bg-green-100 text-green-700' : ''}
                                        `}>
                                            {item.unit.substring(0, 2)}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
                                            <p className="text-xs text-gray-500">
                                                {item.unit} • <span className="text-gray-400">{item.date}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {item.amount !== '-' && (
                                            <span className="text-sm font-mono font-medium text-gray-700 hidden sm:block">
                                                {item.amount}
                                            </span>
                                        )}
                                        <div className="flex gap-2">
                                            <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors" title="Tolak">
                                                <X size={16} />
                                            </button>
                                            <button className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors" title="Setujui">
                                                <CheckCircle size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-emerald-900 to-green-800 rounded-2xl p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 rounded-full bg-white opacity-5" />
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 rounded-full bg-yellow-400 opacity-10" />

                        <h3 className="font-bold text-lg mb-4 relative z-10">Akses Cepat Lembaga</h3>
                        <p className="text-emerald-100 text-sm mb-6 relative z-10">
                            Pindah ke dashboard unit spesifik tanpa perlu logout.
                        </p>

                        <div className="space-y-3 relative z-10">
                            <UnitShortcut name="Pondok Pesantren" role="Kepala Lembaga" />
                            <UnitShortcut name="MI Dar Al Tauhid" role="Operator Sekolah" />
                            <UnitShortcut name="SMP Plus" role="Guru Mapel" />
                        </div>

                        <button className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
                            <Settings size={16} />
                            Konfigurasi Portal Yayasan
                        </button>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
