import { useState } from 'react';
import { LogOut } from 'lucide-react';
import { Head, router, usePage } from '@inertiajs/react';
import { logout as logoutRoute } from '@/routes';
import type { Institution } from '@/app/types';
import InstitutionCard from '@/app/components/institution-card';
import { useInitials } from '@/app/hooks/use-initials';

interface InstitutionSelectProps {
    institutions: Institution[];
    hasAdminAccess: boolean;
    adminDashboardUrl: string;
}

export default function InstitutionSelect({ institutions, hasAdminAccess, adminDashboardUrl }: InstitutionSelectProps) {
    const [isLoading, setIsLoading] = useState<string | null>(null);
    const { auth } = usePage<{ auth: { user: { name: string; email: string } } }>().props;
    const getInitials = useInitials();

    const handleSelect = (inst: Institution) => {
        setIsLoading(inst.code);
        router.visit(inst.url || `/${inst.code}/dashboard`);
    };

    const handleAdminDashboard = () => {
        setIsLoading('admin');
        router.visit(adminDashboardUrl);
    };

    const handleLogout = () => {
        router.post(logoutRoute().url);
    };

    return (
        <>
            <Head title="Pilih Lembaga" />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">

                {/* Background */}
                <div className="absolute top-0 left-0 w-full h-64 bg-emerald-900 rounded-b-[3rem] shadow-lg z-0" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 w-full max-w-5xl">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-10 text-white px-4">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/20">
                                <img src="/logo-pondok.png" alt="Logo" className="h-12 w-auto" />
                            </div>
                            <div>
                                <p className="text-emerald-200 text-sm font-medium uppercase tracking-wider">Super App</p>
                                <h1 className="text-2xl font-bold">Dar Al Tauhid</h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-emerald-800/50 p-2 pr-4 rounded-full backdrop-blur-sm border border-emerald-700/50">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                                {getInitials(auth.user.name)}
                            </div>
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-white">{auth.user.name}</p>
                                <p className="text-xs text-emerald-200">{auth.user.email}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 hover:bg-red-500/20 rounded-full text-emerald-200 hover:text-red-300 transition-colors"
                                title="Logout"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 md:p-10">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Pilih Akses Lembaga</h2>
                            <p className="text-gray-500 max-w-xl mx-auto">
                                Anda terdeteksi memiliki akses ke beberapa lembaga. Silakan pilih lembaga untuk melanjutkan pekerjaan Anda hari ini.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {hasAdminAccess && (
                                <InstitutionCard
                                    isAdmin
                                    isLoading={isLoading === 'admin'}
                                    onClick={handleAdminDashboard}
                                    disabled={isLoading !== null}
                                />
                            )}

                            {institutions.map((inst) => (
                                <InstitutionCard
                                    key={inst.id}
                                    institution={inst}
                                    isLoading={isLoading === inst.code}
                                    onClick={() => handleSelect(inst)}
                                    disabled={isLoading !== null}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-gray-400 text-xs mt-8 pb-4">
                        &copy; 2026 Yayasan Dar Al Tauhid Pusat. All rights reserved. <br />
                        Dikembangkan oleh Divisi IT YDTP.
                    </p>
                </div>
            </div>
        </>
    );
}
