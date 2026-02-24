import { Head, Link } from '@inertiajs/react';
import { Shield } from 'lucide-react';
import type { ReactNode } from 'react';

interface PPDTLayoutProps {
    children: ReactNode;
    title?: string;
}

export default function PPDTLayout({ children, title }: PPDTLayoutProps) {
    return (
        <>
            <Head title={title} />
            <div className="flex min-h-screen flex-col bg-gray-50">
                {/* Navbar */}
                <nav className="sticky top-0 z-50 bg-white shadow-sm">
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        {/* Brand */}
                        <Link
                            href="/"
                            className="group flex items-center gap-3"
                        >
                            <div className="flex h-10 w-12 items-center justify-center rounded-b-xl border-t-4 border-green-600 bg-green-100 transition-transform group-hover:scale-105">
                                <Shield className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                                <div className="text-sm leading-tight font-bold text-gray-900">
                                    PPDT Dar Al Tauhid
                                </div>
                                <div className="text-[10px] font-medium tracking-wider text-green-600 uppercase">
                                    Pondok Pesantren
                                </div>
                            </div>
                        </Link>

                        {/* Nav Links */}
                        <div className="hidden items-center gap-1 sm:flex">
                            <NavLink href="/">Beranda</NavLink>
                            <NavLink href="#tentang">Tentang Kami</NavLink>
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    <div className="flex items-center gap-1 overflow-x-auto border-t border-gray-100 px-4 py-1.5 sm:hidden">
                        <NavLink href="/">Beranda</NavLink>
                        <NavLink href="#tentang">Tentang Kami</NavLink>
                    </div>
                </nav>

                {/* Main */}
                <main className="flex-1">{children}</main>

                {/* Footer */}
                <footer className="border-t border-gray-200 bg-white">
                    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-semibold text-gray-700">
                                    Pondok Pesantren Dar Al Tauhid
                                </p>
                                <p className="text-xs text-gray-500">
                                    Berilmu, Beradab, Berdampak
                                </p>
                            </div>
                            <p className="text-xs text-gray-400">
                                &copy; {new Date().getFullYear()} Dar Al Tauhid.
                                All rights reserved.
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
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                isActive
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
        >
            {children}
        </Link>
    );
}
