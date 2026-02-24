import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

interface NavbarProps {
    firstWaveId?: string | number | null;
}

export default function Navbar({ firstWaveId }: NavbarProps = {}) {
    const daftarHref = firstWaveId ? `/daftar/${firstWaveId}` : '/#gelombang';

    return (
        <nav className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <Link href="/" className="group flex items-center gap-2">
                    <img
                        src="/assets/images/logo/logo-pondok.svg"
                        alt="Logo Pondok Pesantren Dar Al Tauhid"
                        className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
                    />
                    <div>
                        <div className="text-sm leading-tight font-bold text-gray-900 dark:text-white">
                            PSB Dar Al Tauhid
                        </div>
                        <div className="text-[10px] font-medium tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                            Penerimaan Santri Baru
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-1 sm:flex">
                    <NavLink href="/">Beranda</NavLink>
                    <NavLink href="/status">Cek Status</NavLink>
                    <NavLink href="/pengumuman">Pengumuman</NavLink>
                    <Link
                        href={daftarHref}
                        className="ml-2 rounded-lg bg-emerald-600 px-4 py-1.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700"
                    >
                        Daftar
                    </Link>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className="flex items-center gap-1 overflow-x-auto border-t border-emerald-50 px-4 py-1.5 sm:hidden dark:border-gray-800">
                <NavLink href="/">Beranda</NavLink>
                <NavLink href="/status">Cek Status</NavLink>
                <NavLink href="/pengumuman">Pengumuman</NavLink>
                <Link
                    href={daftarHref}
                    className="rounded-lg bg-emerald-600 px-3 py-1 text-xs font-bold whitespace-nowrap text-white shadow-md transition hover:bg-emerald-700"
                >
                    Daftar
                </Link>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
    const isActive = window.location.pathname === href;

    return (
        <Link
            href={href}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${isActive
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                }`}
        >
            {children}
        </Link>
    );
}
