import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 shadow-md shadow-emerald-200/50 transition-transform group-hover:scale-105">
                        <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                    </div>
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
                        href="/#gelombang"
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
                    href="/#gelombang"
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
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                isActive
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
        >
            {children}
        </Link>
    );
}
