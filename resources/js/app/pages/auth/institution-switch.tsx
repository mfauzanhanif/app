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
            {
                icon: <LayoutDashboard size={20} />,
                label: 'Ganti Lembaga',
                active: true,
            },
        ],
    },
];

export default function InstitutionSwitch({
    institutions,
    hasAdminAccess,
    adminDashboardUrl,
    currentInstitution,
}: InstitutionSwitchProps) {
    const [isLoading, setIsLoading] = useState<string | null>(null);

    const handleSelect = (inst: Institution) => {
        setIsLoading(inst.code);
        router.visit(inst.url || `/${inst.code}/dashboard`);
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
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Ganti Lembaga
                        </h2>
                        <p className="mt-1 text-gray-500">
                            Pilih lembaga untuk berpindah ke dashboard yang
                            sesuai.
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
            </AppLayout>
        </>
    );
}
