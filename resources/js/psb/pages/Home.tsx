import { Link } from '@inertiajs/react';
import PsbLayout from '../layouts/psb-layout';
import type { Wave } from '../types';
import { formatCurrency, formatDate } from '../types';

interface HomeProps {
    waves: Wave[];
}

export default function Home({ waves }: HomeProps) {
    return (
        <PsbLayout>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                            </span>
                            Pendaftaran Dibuka
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Penerimaan{' '}
                            <span className="bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                                Santri Baru
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-emerald-100 sm:text-xl">
                            Pondok Pesantren Dar Al Tauhid — Mencetak Generasi Qur'ani yang Berakhlak Mulia, Berwawasan Luas, dan Mandiri.
                        </p>
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <a
                                href="#gelombang"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-emerald-700 shadow-xl shadow-emerald-900/20 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                            >
                                Lihat Gelombang
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Wave Decoration */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" className="fill-emerald-50 dark:fill-gray-950" />
                    </svg>
                </div>
            </section>

            {/* Info Cards */}
            <section className="mx-auto -mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-3">
                    <InfoCard
                        icon={
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        }
                        title="Pendidikan Berkualitas"
                        desc="Kurikulum terpadu integratif yang memadukan ilmu agama dan ilmu umum."
                        color="emerald"
                    />
                    <InfoCard
                        icon={
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        }
                        title="Lingkungan Islami"
                        desc="Lingkungan pesantren yang kondusif untuk pembentukan karakter santri."
                        color="teal"
                    />
                    <InfoCard
                        icon={
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                        }
                        title="Pendaftaran Online"
                        desc="Proses pendaftaran mudah, cepat, dan transparan secara online."
                        color="amber"
                    />
                </div>
            </section>

            {/* Gelombang Pendaftaran */}
            <section id="gelombang" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Gelombang Pendaftaran
                    </h2>
                    <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                        Pilih gelombang dan lembaga yang sesuai untuk putra/putri Anda
                    </p>
                </div>

                {waves.length === 0 ? (
                    <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                            <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            Belum ada gelombang pendaftaran dibuka
                        </p>
                        <p className="mt-2 text-sm text-gray-500">Silakan cek kembali nanti.</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {waves.map((wave) => (
                            <WaveCard key={wave.id} wave={wave} />
                        ))}
                    </div>
                )}
            </section>

            {/* Alur Pendaftaran */}
            <section className="bg-emerald-50/50 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Alur Pendaftaran</h2>
                        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">3 langkah mudah untuk mendaftar</p>
                    </div>
                    <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
                        <StepCard step={1} title="Isi Formulir" desc="Lengkapi data santri, keluarga, dan dokumen" />
                        <StepCard step={2} title="Bayar Formulir" desc="Upload bukti pembayaran biaya pendaftaran" />
                        <StepCard step={3} title="Tunggu Hasil" desc="Pantau status di halaman pengumuman" />
                    </div>
                </div>
            </section>
        </PsbLayout>
    );
}

/* ---------- Sub-components ---------- */

function InfoCard({ icon, title, desc, color }: { icon: React.ReactNode; title: string; desc: string; color: string }) {
    const colors: Record<string, string> = {
        emerald: 'from-emerald-500 to-teal-500 shadow-emerald-200/40 dark:shadow-emerald-900/30',
        teal: 'from-teal-500 to-cyan-500 shadow-teal-200/40 dark:shadow-teal-900/30',
        amber: 'from-amber-500 to-orange-500 shadow-amber-200/40 dark:shadow-amber-900/30',
    };

    return (
        <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-800/50">
            <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${colors[color]} p-3 text-white shadow-lg`}>
                {icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{desc}</p>
        </div>
    );
}

function WaveCard({ wave }: { wave: Wave }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            {/* Top accent */}
            <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />
            <div className="p-6">
                {/* Institution badge */}
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    {wave.institution.name}
                </span>

                <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">{wave.name}</h3>

                {wave.description && (
                    <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{wave.description}</p>
                )}

                <div className="mt-5 space-y-2.5 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <span>{formatDate(wave.start_date)} — {formatDate(wave.end_date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <svg className="h-4 w-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75" />
                        </svg>
                        <span>Biaya: <strong className="text-gray-900 dark:text-white">{formatCurrency(wave.registration_fee)}</strong></span>
                    </div>
                </div>

                <div className="mt-6">
                    <Link
                        href={`/daftar/${wave.id}`}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200/40 transition-all hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl dark:shadow-emerald-900/20"
                    >
                        Daftar Sekarang
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function StepCard({ step, title, desc }: { step: number; title: string; desc: string }) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-extrabold text-white shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/30">
                {step}
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{desc}</p>
        </div>
    );
}
