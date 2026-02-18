import { Building2, School, GraduationCap, ArrowRight } from 'lucide-react';
import LoadingSpinner from '@/app/components/ui/loading-spinner';
import type { Institution } from '@/app/types';

interface InstitutionCardProps {
    institution?: Institution;
    isAdmin?: boolean;
    isLoading?: boolean;
    onClick: () => void;
    disabled?: boolean;
}

function getIcon(type: string) {
    switch (type) {
        case 'Yayasan':
        case 'foundation':
            return <Building2 className="w-8 h-8 text-white" />;
        case 'Pondok Pesantren':
        case 'boarding':
            return <School className="w-8 h-8 text-white" />;
        default:
            return <GraduationCap className="w-8 h-8 text-white" />;
    }
}

function getThemeColor(type: string) {
    switch (type) {
        case 'Yayasan':
        case 'foundation':
            return 'bg-emerald-600';
        case 'Pondok Pesantren':
        case 'boarding':
            return 'bg-green-600';
        case 'Sekolah':
        case 'school':
            return 'bg-teal-600';
        default:
            return 'bg-blue-600';
    }
}

export default function InstitutionCard({ institution, isAdmin = false, isLoading = false, onClick, disabled = false }: InstitutionCardProps) {
    const themeColor = isAdmin ? 'bg-emerald-600' : getThemeColor(institution?.type ?? '');
    const icon = isAdmin ? <Building2 className="w-8 h-8 text-white" /> : getIcon(institution?.type ?? '');
    const title = isAdmin ? 'Dashboard Yayasan' : institution?.name ?? '';
    const subtitle = isAdmin ? 'Admin Global' : undefined;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`group relative flex flex-col text-left bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden ${isLoading ? 'ring-2 ring-emerald-500' : ''}`}
        >
            <div className={`h-1.5 w-full ${themeColor}`} />
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${themeColor} shadow-lg shadow-emerald-100 group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1 leading-snug group-hover:text-emerald-700 transition-colors">
                    {title}
                </h3>
                {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
            </div>
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center group-hover:bg-emerald-50 transition-colors">
                <span className="text-xs text-gray-400 group-hover:text-emerald-600 font-medium">
                    Masuk Dashboard
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isLoading ? 'bg-transparent' : 'bg-white text-gray-400 group-hover:bg-emerald-600 group-hover:text-white'} shadow-sm transition-all`}>
                    {isLoading ? (
                        <LoadingSpinner size="sm" />
                    ) : (
                        <ArrowRight size={14} />
                    )}
                </div>
            </div>
        </button>
    );
}
