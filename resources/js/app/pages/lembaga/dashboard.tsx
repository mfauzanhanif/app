import {
    LayoutDashboard,
    Users,
    BookOpen,
    Calendar,
    FileText,
    Settings,
    Clock,
    CheckCircle,
    AlertCircle,
    Wallet,
    GraduationCap,
    Megaphone,
    UserCheck,
} from 'lucide-react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
} from 'recharts';
import { Head } from '@inertiajs/react';
import type { Institution } from '@/app/types';
import AppLayout, { type NavGroup } from '@/app/layouts/app.layout';
import StatCard from '@/app/components/stat-card';
import ActionButton from '@/app/components/action-button';

// --- MOCK DATA ---

const attendanceData = [
    { day: 'Sen', hadir: 98, izin: 1, sakit: 1, alpha: 0 },
    { day: 'Sel', hadir: 96, izin: 2, sakit: 1, alpha: 1 },
    { day: 'Rab', hadir: 97, izin: 1, sakit: 2, alpha: 0 },
    { day: 'Kam', hadir: 95, izin: 3, sakit: 1, alpha: 1 },
    { day: 'Jum', hadir: 99, izin: 1, sakit: 0, alpha: 0 },
    { day: 'Sab', hadir: 92, izin: 5, sakit: 2, alpha: 1 },
];

const paymentData = [
    { name: 'Lunas', value: 320, color: '#10b981' },
    { name: 'Belum Lunas', value: 130, color: '#ef4444' },
    { name: 'Cicilan', value: 45, color: '#f59e0b' },
];

const todaySchedule = [
    { id: 1, time: '07:00 - 08:30', subject: 'Tahfidz Al-Quran', class: 'Kelas 7A', teacher: 'Ustadz Abdullah', status: 'completed' },
    { id: 2, time: '08:30 - 10:00', subject: 'Matematika', class: 'Kelas 8B', teacher: 'Ibu Siti Aminah', status: 'ongoing' },
    { id: 3, time: '10:15 - 11:45', subject: 'Bahasa Arab', class: 'Kelas 9A', teacher: 'Ustadz Fauzan', status: 'upcoming' },
    { id: 4, time: '13:00 - 14:30', subject: 'Fiqih Ibadah', class: 'Kelas 7B', teacher: 'Kyai Hasan', status: 'upcoming' },
];

// --- NAV CONFIG ---

interface DashboardLembagaProps {
    institution: Institution | null;
}

function getNavGroups(institutionType: string): NavGroup[] {
    return [
        {
            title: 'Akademik',
            items: [
                { icon: <LayoutDashboard size={18} />, label: 'Dashboard', active: true },
                { icon: <Calendar size={18} />, label: 'Jadwal & KBM' },
                { icon: <BookOpen size={18} />, label: 'E-Learning' },
                { icon: <FileText size={18} />, label: 'Rapor Digital' },
            ],
        },
        {
            title: 'Kesiswaan',
            items: [
                { icon: <Users size={18} />, label: 'Data Siswa' },
                { icon: <UserCheck size={18} />, label: 'Presensi Siswa' },
                { icon: <AlertCircle size={18} />, label: 'Konseling & BK' },
            ],
        },
        {
            title: 'Administrasi',
            items: [
                { icon: <Wallet size={18} />, label: 'Keuangan Unit' },
                { icon: <Users size={18} />, label: 'Data Guru & Staff' },
                { icon: <Settings size={18} />, label: 'Pengaturan Unit' },
            ],
        },
    ];
}

export default function DashboardLembaga({ institution }: DashboardLembagaProps) {
    const institutionName = institution?.name ?? 'Lembaga';
    const institutionType = institution?.type ?? '';
    const institutionCode = institution?.code ?? '';

    const sidebarBranding = (
        <div className="flex items-center gap-3">
            <img src="/logo-pondok.png" alt="Logo" className="h-8 w-auto" />
            <div className="flex flex-col">
                <span className="font-bold text-emerald-800 text-sm leading-tight">SIAKAD</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">{institutionType}</span>
            </div>
        </div>
    );

    return (
        <>
            <Head title={`Dashboard ${institutionName}`} />
            <AppLayout
                navGroups={getNavGroups(institutionType)}
                sidebarVariant="light"
                sidebarBranding={sidebarBranding}
                institutionCode={institutionCode}
                roleLabel="Operator"
            >
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        icon={<UserCheck size={20} />}
                        iconBg="bg-blue-50 text-blue-600"
                        title="Kehadiran Siswa"
                        value="96.5%"
                        subtitle="432/450 Hadir"
                        badge={
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                Hari Ini
                            </span>
                        }
                    >
                        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '96.5%' }} />
                        </div>
                    </StatCard>

                    <StatCard
                        icon={<Wallet size={20} />}
                        iconBg="bg-emerald-50 text-emerald-600"
                        title="Realisasi SPP"
                        value="72%"
                        badge={<span className="text-xs font-medium text-gray-500">Bulan Ini</span>}
                    >
                        <span className="text-xs text-emerald-600 block mt-1">On Target</span>
                        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
                            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '72%' }} />
                        </div>
                    </StatCard>

                    <StatCard
                        icon={<AlertCircle size={20} />}
                        iconBg="bg-red-50 text-red-600"
                        title="Kasus Kedisiplinan"
                        value="5"
                        subtitle="3 Terlambat, 2 Atribut"
                        badge={
                            <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                                Perlu Perhatian
                            </span>
                        }
                    />

                    <StatCard
                        icon={<GraduationCap size={20} />}
                        iconBg="bg-purple-50 text-purple-600"
                        title="Kehadiran Guru"
                        value="28/30"
                        subtitle="Semua kelas terisi (Guru Piket)"
                        badge={<span className="text-xs font-medium text-gray-500">Staff</span>}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Main: Charts & Schedule */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Attendance Chart */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-gray-800">Tren Kehadiran Siswa</h3>
                                <select className="text-xs border-gray-200 rounded-md bg-gray-50 p-1.5 focus:ring-emerald-500">
                                    <option>Minggu Ini</option>
                                    <option>Bulan Ini</option>
                                </select>
                            </div>
                            <div className="h-64 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={attendanceData}>
                                        <defs>
                                            <linearGradient id="colorHadir" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                                        <YAxis hide domain={[80, 100]} />
                                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                        <Area type="monotone" dataKey="hadir" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorHadir)" name="Hadir (%)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Schedule */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-5 border-b border-gray-50 flex justify-between items-center">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                    <Clock size={18} className="text-emerald-600" />
                                    Agenda KBM Hari Ini
                                </h3>
                                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full animate-pulse">
                                    Sedang Berlangsung
                                </span>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {todaySchedule.map((item) => (
                                    <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="text-center w-16">
                                                <span className="block text-xs font-bold text-gray-500">{item.time.split(' - ')[0]}</span>
                                                <span className="block text-[10px] text-gray-400">s/d {item.time.split(' - ')[1]}</span>
                                            </div>
                                            <div className={`w-1 h-10 rounded-full ${item.status === 'completed' ? 'bg-gray-300' : item.status === 'ongoing' ? 'bg-emerald-500' : 'bg-blue-400'}`} />
                                            <div>
                                                <h4 className={`text-sm font-bold ${item.status === 'completed' ? 'text-gray-500' : 'text-gray-800'}`}>
                                                    {item.subject}
                                                </h4>
                                                <p className="text-xs text-gray-500">
                                                    {item.class} • <span className="font-medium">{item.teacher}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            {item.status === 'ongoing' && (
                                                <button className="px-3 py-1 bg-emerald-600 text-white text-xs rounded-full shadow-sm hover:bg-emerald-700">
                                                    Monitoring
                                                </button>
                                            )}
                                            {item.status === 'upcoming' && (
                                                <span className="text-xs text-gray-400 italic">Segera</span>
                                            )}
                                            {item.status === 'completed' && (
                                                <CheckCircle size={16} className="text-gray-300" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
                                <a href="#" className="text-xs font-medium text-emerald-600 hover:text-emerald-700">Lihat Jadwal Lengkap</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        {/* SPP Status */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <h3 className="font-bold text-gray-800 mb-1 w-full text-left">Status SPP (Oktober)</h3>
                            <p className="text-xs text-gray-500 mb-4 w-full text-left">Progres pembayaran santri</p>
                            <div className="w-full h-48 relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={paymentData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                                            {paymentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                    <span className="text-xl font-bold text-gray-800">495</span>
                                    <span className="text-[10px] text-gray-400">Total Tagihan</span>
                                </div>
                            </div>
                            <div className="w-full mt-4 space-y-2">
                                <div className="flex justify-between text-xs">
                                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Lunas</span>
                                    <span className="font-bold">320 (65%)</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500" /> Cicilan</span>
                                    <span className="font-bold">45 (9%)</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500" /> Belum Bayar</span>
                                    <span className="font-bold">130 (26%)</span>
                                </div>
                            </div>
                            <button className="w-full mt-5 py-2 border border-emerald-200 text-emerald-700 rounded-lg text-xs font-medium hover:bg-emerald-50 transition-colors">
                                Kirim Pengingat WA
                            </button>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-800 mb-4">Aksi Cepat</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <ActionButton icon={<Megaphone size={18} />} label="Pengumuman" color="text-blue-600" bg="bg-blue-50" />
                                <ActionButton icon={<UserCheck size={18} />} label="Input Presensi" color="text-emerald-600" bg="bg-emerald-50" />
                                <ActionButton icon={<AlertCircle size={18} />} label="Catat Pelanggaran" color="text-red-600" bg="bg-red-50" />
                                <ActionButton icon={<FileText size={18} />} label="Input Nilai" color="text-purple-600" bg="bg-purple-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
