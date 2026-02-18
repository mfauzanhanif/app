import { router, usePage } from '@inertiajs/react';
import { Menu, Search, Bell, ArrowRightLeft } from 'lucide-react';
import { useIsMobile } from '@/app/hooks/use-mobile';
import { useInitials } from '@/app/hooks/use-initials';
import LogoutButton from '@/app/components/logout-button';

interface AppHeaderProps {
    institutionCode?: string;
    roleLabel?: string;
    onMenuToggle: () => void;
}

export default function AppHeader({ institutionCode, roleLabel = 'Operator', onMenuToggle }: AppHeaderProps) {
    const isMobile = useIsMobile();
    const getInitials = useInitials();
    const { auth } = usePage<{ auth: { user: { name: string; email: string } } }>().props;

    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
            <div className="flex items-center gap-4">
                <button onClick={onMenuToggle} className="lg:hidden text-gray-500 hover:text-emerald-600">
                    <Menu size={24} />
                </button>

                {!isMobile && (
                    <div className="flex items-center relative">
                        <Search className="absolute left-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari data siswa, pegawai, atau transaksi..."
                            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
                {institutionCode && (
                    <button
                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-emerald-50 text-gray-600 hover:text-emerald-700 border border-gray-200 hover:border-emerald-200 rounded-lg transition-all text-sm font-medium group"
                        title="Ganti Lembaga"
                        onClick={() => router.visit(`/${institutionCode}/switch-institution`)}
                    >
                        <ArrowRightLeft size={18} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                        <span className="hidden sm:inline">Ganti Lembaga</span>
                    </button>
                )}

                <button className="relative p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-semibold text-gray-700">{auth.user.name}</p>
                        <p className="text-xs text-emerald-600 font-medium">{roleLabel}</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold border border-emerald-200 cursor-pointer hover:ring-2 hover:ring-emerald-400 transition-all">
                        {getInitials(auth.user.name)}
                    </div>
                    <LogoutButton variant="icon" />
                </div>
            </div>
        </header>
    );
}
