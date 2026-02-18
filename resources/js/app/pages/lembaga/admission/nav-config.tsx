import { LayoutDashboard, Users, FileText, Wallet, ClipboardCheck, Settings, GraduationCap } from 'lucide-react';
import type { NavGroup } from '@/app/layouts/app.layout';

export function getAdmissionNavGroups(institutionCode: string): NavGroup[] {
    return [
        {
            title: 'PSB',
            items: [
                { icon: <LayoutDashboard size={18} />, label: 'Dashboard', href: `/${institutionCode}/dashboard` },
                { icon: <GraduationCap size={18} />, label: 'Gelombang', href: `/${institutionCode}/admission-waves`, active: true },
                { icon: <Users size={18} />, label: 'Pendaftar', href: `/${institutionCode}/candidates` },
                { icon: <ClipboardCheck size={18} />, label: 'Seleksi', href: `/${institutionCode}/candidates` },
                { icon: <Wallet size={18} />, label: 'Tagihan PSB', href: `/${institutionCode}/admission-invoices` },
            ],
        },
        {
            title: 'Administrasi',
            items: [
                { icon: <Settings size={18} />, label: 'Pengaturan', href: `/${institutionCode}/settings` },
            ],
        },
    ];
}
