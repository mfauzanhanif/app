import type { ReactNode } from 'react';

interface StatCardProps {
    icon: ReactNode;
    iconBg?: string;
    title: string;
    value: string | number;
    subtitle?: string;
    badge?: ReactNode;
    children?: ReactNode;
}

export default function StatCard({ icon, iconBg = 'bg-blue-50 text-blue-600', title, value, subtitle, badge, children }: StatCardProps) {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-2 rounded-lg ${iconBg}`}>
                    {icon}
                </div>
                {badge}
            </div>
            <h3 className="text-gray-500 text-sm font-medium relative z-10">{title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1 relative z-10">{value}</p>
            {subtitle && <p className="text-xs text-gray-400 mt-2 relative z-10">{subtitle}</p>}
            {children}
        </div>
    );
}
