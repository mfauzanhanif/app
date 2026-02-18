export default function AppLogo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className ?? ''}`}>
            <img src="/logo-pondok.png" alt="Logo Dar Al Tauhid" className="h-8 w-auto" />
            <span className="font-bold text-lg leading-none">Dar Al Tauhid</span>
        </div>
    );
}
