import { Head, Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

interface PsbLayoutProps {
    children: ReactNode;
    title?: string;
}

export default function PsbLayout({ children, title }: PsbLayoutProps) {
    const appDomain = (window as any).__APP_DOMAIN || 'app.daraltauhid.com';

    return (
        <>
            <Head title={title} />
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
                {/* Navbar */}
                <nav className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        {/* Brand */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md shadow-emerald-200/50 transition-transform group-hover:scale-105">
                                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-bold leading-tight text-gray-900 dark:text-white">PSB Dar Al Tauhid</div>
                                <div className="text-[10px] font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Penerimaan Santri Baru</div>
                            </div>
                        </Link>

                        {/* Nav Links */}
                        <div className="hidden items-center gap-1 sm:flex">
                            <NavLink href="/">Beranda</NavLink>
                            <NavLink href="/status">Status Pendaftaran</NavLink>
                            <NavLink href="/pengumuman">Pengumuman</NavLink>
                        </div>

                        {/* Login Button */}
                        <a
                            href={`//${appDomain}/login`}
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-200/50 transition-all hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg dark:shadow-emerald-900/30"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Masuk
                        </a>
                    </div>

                    {/* Mobile Nav */}
                    <div className="flex items-center gap-1 overflow-x-auto border-t border-emerald-50 px-4 py-1.5 sm:hidden dark:border-gray-800">
                        <NavLink href="/">Beranda</NavLink>
                        <NavLink href="/status">Status</NavLink>
                        <NavLink href="/pengumuman">Pengumuman</NavLink>
                    </div>
                </nav>

                {/* Main */}
                <main className="flex-1">
                    {children}
                </main>

                {/* Footer */}
                <footer className="border-t border-emerald-100/80 bg-white/60 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/60">
                    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Pondok Pesantren Dar Al Tauhid
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-500">
                                    Mencetak Generasi Qur'ani yang Berakhlak Mulia
                                </p>
                            </div>
                            <p className="text-xs text-gray-400 dark:text-gray-600">
                                &copy; {new Date().getFullYear()} Dar Al Tauhid. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
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
