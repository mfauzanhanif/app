import { LogOut } from 'lucide-react';
import { router } from '@inertiajs/react';
import { logout as logoutRoute } from '@/routes';

interface LogoutButtonProps {
    variant?: 'icon' | 'full';
    className?: string;
    sidebarVariant?: 'dark' | 'light';
}

export default function LogoutButton({ variant = 'icon', className, sidebarVariant = 'dark' }: LogoutButtonProps) {
    const handleLogout = () => {
        router.post(logoutRoute().url);
    };

    if (variant === 'full') {
        const isDark = sidebarVariant === 'dark';
        return (
            <button
                onClick={handleLogout}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isDark
                        ? 'text-emerald-200 hover:bg-red-500/20 hover:text-red-300'
                        : 'text-gray-500 hover:bg-red-50 hover:text-red-600'
                    } ${className ?? ''}`}
            >
                <LogOut size={18} />
                <span>Keluar</span>
            </button>
        );
    }

    return (
        <button
            onClick={handleLogout}
            className={`p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors ${className ?? ''}`}
            title="Keluar"
        >
            <LogOut size={18} />
        </button>
    );
}
