import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const navLinks = [
    { name: 'Beranda', href: '/', routeName: 'beranda' },
    { name: 'Profil', href: '/profil', routeName: 'profil' },
    { name: 'Program Unggulan', href: '/program', routeName: 'program' },
    { name: 'Fasilitas', href: '/fasilitas', routeName: 'fasilitas' },
    { name: 'PPDB', href: '/ppdb', routeName: 'ppdb' },
    { name: 'Kontak', href: '/kontak', routeName: 'kontak' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const isActive = (href: string) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-primary-100 bg-white/95 shadow-sm backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/assets/images/logo/logo-misdt.svg" alt="Logo MIS Dar Al Tauhid" className="h-10 w-10 rounded-xl object-contain lg:h-12 lg:w-12" />
                        <div>
                            <h1 className="font-heading text-base font-bold leading-tight text-primary-800 lg:text-lg">
                                MIS Dar Al Tauhid
                            </h1>
                            <p className="text-xs text-gray-500">Arjawinangun, Cirebon</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.routeName}
                                href={link.href}
                                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 xl:px-4 ${
                                    isActive(link.href)
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="border-t border-gray-100 pb-4 lg:hidden">
                        <div className="mt-2 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.routeName}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                                        isActive(link.href)
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
