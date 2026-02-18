import { useState } from 'react';
import { LayoutDashboard } from 'lucide-react';
import { Head, router, usePage } from '@inertiajs/react';
import type { Institution } from '@/app/types';
import AppLayout, { type NavGroup } from '@/app/layouts/app.layout';
import InstitutionCard from '@/app/components/institution-card';

interface InstitutionSwitchProps {
    institutions: Institution[];
    hasAdminAccess: boolean;
    adminDashboardUrl: string;
    currentInstitution: string;
}

const navGroups: NavGroup[] = [
    {
        title: 'Navigasi',
        items: [
            { icon: <LayoutDashboard size={20} />, label: 'Ganti Lembaga', active: true },
        ],
    },
];

export default function InstitutionSwitch({ institutions, hasAdminAccess, adminDashboardUrl, currentInstitution }: InstitutionSwitchProps) {
    const [isLoading, setIsLoading] = useState<string | null>(null);

    const handleSelect = (inst: Institution) => {
        setIsLoading(inst.code);
        router.visit(inst.url || `/${inst.code}/dashboard`);
    };

    const handleAdminDashboard = () => {
        setIsLoading('admin');
        router.visit(adminDashboardUrl);
    };

    return (
        <>
            <Head title="Ganti Lembaga" />
            <AppLayout
                navGroups={navGroups}
                sidebarVariant="dark"
                institutionCode={currentInstitution}
                roleLabel="Multi-Akses"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Ganti Lembaga</h2>
                        <p className="text-gray-500 mt-1">
                            Pilih lembaga untuk berpindah ke dashboard yang sesuai.
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
            </AppLayout>
        </>
    );
}
