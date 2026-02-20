import { Head } from '@inertiajs/react';

export default function Bio() {
    const links = [
        {
            title: 'Chat Admin',
            url: "https://wa.me/6285860783784?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20MIS%20Dar%20Al%20Tauhid.",
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            style: 'bg-green-500 text-white hover:bg-green-600',
            external: true,
        },
        {
            title: 'Website Resmi',
            url: '/',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            style: 'bg-white text-primary-900 border border-gray-200 hover:bg-gray-50',
            external: false,
        },
        {
            title: 'Lokasi Sekolah',
            url: 'https://maps.app.goo.gl/zLM5VQwKF5wGPe78A',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            style: 'bg-white text-primary-900 border border-gray-200 hover:bg-gray-50',
            external: true,
        },
    ];

    const socials = [
        {
            label: 'Instagram',
            url: 'https://instagram.com/misdaraltauhid',
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
        },
        {
            label: 'TikTok',
            url: 'https://tiktok.com/@misdaraltauhidawn',
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
            ),
        },
        {
            label: 'YouTube',
            url: 'https://youtube.com/@misdaraltauhid',
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
        {
            label: 'Facebook',
            url: 'https://facebook.com/MisDarAlTauhid',
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <Head title="Bio Link">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-primary-900 via-primary-800 to-primary-950 px-4 py-12">
                {/* Background ornaments */}
                <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-1/3 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />

                {/* Profile Header */}
                <div className="z-10 mb-10 flex w-full max-w-md flex-col items-center text-center">
                    {/* Logo */}
                    <div className="group relative mb-4">
                        <div className="h-28 w-28 overflow-hidden rounded-full bg-white p-1 shadow-2xl ring-4 ring-gold-400 transition-transform duration-300 group-hover:scale-105">
                            <img
                                src="/assets/images/logo/logo-misdt.svg"
                                alt="Logo MIS Dar Al Tauhid"
                                className="h-full w-full object-contain p-1"
                            />
                        </div>
                        {/* Verified badge */}
                        <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary-900 bg-blue-500 text-white" title="Akun Resmi">
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="font-heading mt-1 text-2xl font-bold tracking-wide text-white drop-shadow-md">
                        MIS Dar Al Tauhid
                    </h1>
                    <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-primary-200">
                        Mencetak Generasi yang berakhlakul karimah, cerdas, dan kreatif.
                    </p>

                    {/* Status badge */}
                    <div className="mt-4 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 backdrop-blur-sm">
                        <a href="https://maps.app.goo.gl/zLM5VQwKF5wGPe78A" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-wide text-gold-300">
                            📍 Arjawinangun, Cirebon
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="z-10 flex w-full max-w-md flex-col gap-3.5">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target={link.external ? '_blank' : '_self'}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className={`group flex items-center justify-between rounded-xl px-5 py-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${link.style}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="transition-transform duration-300 group-hover:scale-110">
                                    {link.icon}
                                </span>
                                <span className="text-sm font-semibold sm:text-base">{link.title}</span>
                            </div>
                            <svg className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    ))}
                </div>

                {/* Social Media */}
                <div className="z-10 mt-12 w-full max-w-md text-center">
                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-400">
                        Media Sosial Resmi
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-primary-900"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <footer className="z-10 mt-16 text-center">
                    <p className="text-xs text-primary-400/60">
                        &copy; {new Date().getFullYear()} MIS Dar Al Tauhid
                    </p>
                    <p className="mt-1 text-[10px] text-primary-500/40">
                        Jl. KH. A. Syathori, RT/RW 02/06, Desa Arjawinangun, Kec. Arjawinangun, Kab. Cirebon, Jawa Barat - 45162
                    </p>
                </footer>
            </div>
        </>
    );
}
