import { type PropsWithChildren, type ReactNode, useState } from 'react';
import AppSidebar from '@/app/components/app-sidebar';
import AppHeader from '@/app/components/app-header';

export interface NavItem {
    icon: ReactNode;
    label: string;
    href?: string;
    active?: boolean;
    badge?: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

interface AppLayoutProps extends PropsWithChildren {
    sidebarVariant?: 'dark' | 'light';
    navGroups: NavGroup[];
    institutionCode?: string;
    roleLabel?: string;
}

export default function AppLayout({
    children,
    sidebarVariant = 'dark',
    navGroups,
    institutionCode,
    roleLabel = 'Operator',
}: AppLayoutProps) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
            <AppSidebar
                variant={sidebarVariant}
                navGroups={navGroups}
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <AppHeader
                    institutionCode={institutionCode}
                    roleLabel={roleLabel}
                    onMenuToggle={() => setSidebarOpen(!isSidebarOpen)}
                />

                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
