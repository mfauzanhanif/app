import type { ReactNode } from 'react';

interface SidebarNavItemProps {
    icon: ReactNode;
    label: string;
    href?: string;
    active?: boolean;
    badge?: string;
    variant?: 'dark' | 'light';
    onClick?: () => void;
}

export default function SidebarNavItem({
    icon,
    label,
    href = '#',
    active = false,
    badge,
    variant = 'dark',
    onClick,
}: SidebarNavItemProps) {
    const darkStyles = active
        ? 'bg-emerald-800 text-white shadow-sm'
        : 'text-emerald-100 hover:bg-emerald-800/50 hover:text-white';

    const lightStyles = active
        ? 'bg-emerald-50 text-emerald-700 font-medium'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';

    const darkIconStyles = active ? 'text-yellow-300' : 'text-emerald-300 group-hover:text-emerald-200';
    const lightIconStyles = active ? 'text-emerald-600' : 'text-gray-400';

    const styles = variant === 'dark' ? darkStyles : lightStyles;
    const iconStyles = variant === 'dark' ? darkIconStyles : lightIconStyles;

    return (
        <a
            href={href}
            onClick={onClick}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors group mb-1 ${styles}`}
        >
            <div className="flex items-center gap-3">
                <span className={iconStyles}>{icon}</span>
                <span className="text-sm font-medium">{label}</span>
            </div>
            {badge && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                    {badge}
                </span>
            )}
        </a>
    );
}
