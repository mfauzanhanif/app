import { type ReactNode } from 'react';
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';

type AlertVariant = 'error' | 'success' | 'warning' | 'info';

interface FormAlertProps {
    variant?: AlertVariant;
    title?: string;
    message: string;
    className?: string;
    icon?: ReactNode;
}

const variantStyles: Record<AlertVariant, { bg: string; border: string; text: string; iconColor: string; icon: ReactNode }> = {
    error: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-700',
        iconColor: 'text-red-500',
        icon: <XCircle size={20} />,
    },
    success: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-700',
        iconColor: 'text-emerald-500',
        icon: <CheckCircle size={20} />,
    },
    warning: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
        iconColor: 'text-amber-500',
        icon: <AlertTriangle size={20} />,
    },
    info: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        iconColor: 'text-blue-500',
        icon: <Info size={20} />,
    },
};

export default function FormAlert({ variant = 'error', title, message, className = '', icon }: FormAlertProps) {
    const styles = variantStyles[variant];

    return (
        <div className={`flex items-start gap-3 p-4 ${styles.bg} border ${styles.border} rounded-xl ${styles.text} ${className}`}>
            <span className={`mt-0.5 shrink-0 ${styles.iconColor}`}>
                {icon ?? styles.icon}
            </span>
            <div className="text-sm">
                {title && <p className="font-semibold">{title}</p>}
                <p className={`${title ? 'mt-0.5 opacity-90' : 'font-medium'}`}>{message}</p>
            </div>
        </div>
    );
}
