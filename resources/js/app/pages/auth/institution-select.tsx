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

export default function InstitutionSelect({
    institutions,
    hasAdminAccess,
    adminDashboardUrl,
}: InstitutionSelectProps) {
    const [isLoading, setIsLoading] = useState<string | null>(null);
    const { auth } = usePage<{
        auth: { user: { name: string; email: string } };
    }>().props;
    const getInitials = useInitials();

    const handleSelect = (inst: Institution) => {
        setIsLoading(inst.code);
        router.visit(inst.url || `/${inst.code}/dashboard`);
    };

    const handleLogout = () => {
        router.post(logoutRoute().url);
    };

    return (
        <>
            <Head title="Pilih Lembaga" />
            <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-4">
                {/* Background */}
                <div className="absolute top-0 left-0 z-0 h-64 w-full rounded-b-[3rem] bg-emerald-900 shadow-lg" />
                <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white opacity-5 blur-3xl" />

                <div className="relative z-10 w-full max-w-5xl">
                    {/* Header */}
                    <div className="mb-10 flex flex-col items-center justify-between px-4 text-white md:flex-row">
                        <div className="mb-4 flex items-center gap-4 md:mb-0">
                            <div className="rounded-lg border border-white/20 bg-white/10 p-2 backdrop-blur-md">
                                <img
                                    src="/assets/images/logo/logo-pondok.svg"
                                    alt="Logo"
                                    className="h-12 w-auto"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-medium tracking-wider text-emerald-200 uppercase">
                                    Super App
                                </p>
                                <h1 className="text-2xl font-bold">
                                    Dar Al Tauhid
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-full border border-emerald-700/50 bg-emerald-800/50 p-2 pr-4 backdrop-blur-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
                                {getInitials(auth.user.name)}
                            </div>
                            <div className="hidden text-right sm:block">
                                <p className="text-sm font-semibold text-white">
                                    {auth.user.name}
                                </p>
                                <p className="text-xs text-emerald-200">
                                    {auth.user.email}
                                </p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="rounded-full p-2 text-emerald-200 transition-colors hover:bg-red-500/20 hover:text-red-300"
                                title="Logout"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl md:p-10">
                        <div className="mb-10 text-center">
                            <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
                                Pilih Akses Lembaga
                            </h2>
                            <p className="mx-auto max-w-xl text-gray-500">
                                Anda terdeteksi memiliki akses ke beberapa
                                lembaga. Silakan pilih lembaga untuk melanjutkan
                                pekerjaan Anda hari ini.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                    <p className="mt-8 pb-4 text-center text-xs text-gray-400">
                        &copy; 2026 Yayasan Dar Al Tauhid Pusat. All rights
                        reserved. <br />
                        Dikembangkan oleh Divisi IT YDTP.
                    </p>
                </div>
            </div>
        </>
    );
}
