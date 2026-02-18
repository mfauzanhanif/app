import type { NavGroup } from '@/app/layouts/app.layout';
import AppLogo from '@/app/components/app-logo';
import SidebarNavItem from '@/app/components/sidebar-nav-item';
import LogoutButton from '@/app/components/logout-button';

interface AppSidebarProps {
    variant?: 'dark' | 'light';
    navGroups: NavGroup[];
    isOpen: boolean;
    onClose: () => void;
}

export default function AppSidebar({ variant = 'dark', navGroups, isOpen, onClose }: AppSidebarProps) {
    const isDark = variant === 'dark';

    const sidebarBg = isDark ? 'bg-emerald-900 text-white' : 'bg-white text-gray-800 border-r border-gray-200';
    const logoBg = isDark ? 'border-b border-emerald-800 bg-emerald-950/50' : 'border-b border-gray-200 bg-white';
    const sectionTitleColor = isDark ? 'text-emerald-400' : 'text-gray-400';

    return (
        <>
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col ${sidebarBg} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Logo */}
                <div className={`flex items-center justify-center h-20 ${logoBg}`}>
                    <AppLogo />
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-1 overflow-y-auto flex-1">
                    {navGroups.map((group, gi) => (
                        <div key={gi}>
                            {gi > 0 && <div className="mt-6" />}
                            <div className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider ${sectionTitleColor}`}>
                                {group.title}
                            </div>
                            {group.items.map((item, ii) => (
                                <SidebarNavItem
                                    key={ii}
                                    icon={item.icon}
                                    label={item.label}
                                    href={item.href}
                                    active={item.active}
                                    badge={item.badge}
                                    variant={variant}
                                />
                            ))}
                        </div>
                    ))}
                </nav>

                {/* Logout */}
                <div className={`p-4 ${isDark ? 'border-t border-emerald-800' : 'border-t border-gray-200'}`}>
                    <LogoutButton variant="full" sidebarVariant={variant} />
                </div>
            </aside>

            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
        </>
    );
}
