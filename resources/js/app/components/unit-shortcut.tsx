import { ArrowUpRight } from 'lucide-react';

interface UnitShortcutProps {
    name: string;
    role: string;
    href?: string;
    onClick?: () => void;
}

export default function UnitShortcut({ name, role, href, onClick }: UnitShortcutProps) {
    const Tag = href ? 'a' : 'div';

    return (
        <Tag
            href={href}
            onClick={onClick}
            className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors cursor-pointer border border-white/5 group"
        >
            <div>
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-emerald-200">{role}</p>
            </div>
            <ArrowUpRight size={16} className="text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Tag>
    );
}
