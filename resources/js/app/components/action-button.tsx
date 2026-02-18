import type { ReactNode } from 'react';

interface ActionButtonProps {
    icon: ReactNode;
    label: string;
    color?: string;
    bg?: string;
    onClick?: () => void;
}

export default function ActionButton({ icon, label, color = 'text-emerald-600', bg = 'bg-emerald-50', onClick }: ActionButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border border-transparent hover:border-gray-200 transition-all ${bg} hover:bg-white hover:shadow-sm`}
        >
            <div className={`mb-2 ${color}`}>{icon}</div>
            <span className="text-xs font-medium text-gray-700">{label}</span>
        </button>
    );
}
