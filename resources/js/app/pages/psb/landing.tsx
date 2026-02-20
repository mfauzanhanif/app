import { Head, Link, usePage } from '@inertiajs/react';
import {
    Calendar,
    MapPin,
    Users,
    ArrowRight,
    GraduationCap,
    Star,
    Shield,
} from 'lucide-react';

interface Wave {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    exam_date: string | null;
    announcement_date: string | null;
    registration_fee: number;
    description: string | null;
    institution: {
        id: number;
        name: string;
        code: string;
        type: string;
    };
}

interface Props {
    waves: Wave[];
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
}

export default function Landing({ waves }: Props) {
    const { auth } = usePage<any>().props;

    return (
        <>
            <Head title="Pendaftaran Santri Baru — Dar Al Tauhid" />

            <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-gray-50 font-sans">
                {/* Hero */}
                <header className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-teal-700" />
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        }}
                    />
                    <div className="relative mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
                        <div className="mb-6 flex items-center justify-center gap-3">
                            <img
                                src="/assets/images/logo/logo-pondok.svg"
                                alt="Logo"
                                className="h-16 w-auto drop-shadow-lg"
                            />
                        </div>
                        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Penerimaan Santri Baru
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-emerald-100 md:text-xl">
                            Pondok Pesantren Dar Al Tauhid — Mendidik Generasi
                            Qurani yang Berilmu dan Berakhlak
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {auth?.user ? (
                                <Link
                                    href="/status"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-emerald-800 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                                >
                                    <Users size={20} />
                                    Cek Status Pendaftaran
                                </Link>
                            ) : (
                                <a
                                    href="/login"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-emerald-800 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                                >
                                    <ArrowRight size={20} />
                                    Login & Daftar Sekarang
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                {/* Why Us */}
                <section className="mx-auto max-w-6xl px-6 py-16">
                    <h2 className="mb-10 text-center text-2xl font-bold text-gray-800">
                        Kenapa Dar Al Tauhid?
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: (
                                    <GraduationCap
                                        className="text-emerald-600"
                                        size={32}
                                    />
                                ),
                                title: 'Kurikulum Terintegrasi',
                                desc: 'Memadukan kurikulum nasional, diniyyah, dan tahfidz Al-Quran dalam satu sistem pendidikan.',
                            },
                            {
                                icon: (
                                    <Star
                                        className="text-amber-500"
                                        size={32}
                                    />
                                ),
                                title: 'Tenaga Pendidik Berkualitas',
                                desc: 'Dibimbing oleh ustadz dan guru berpengalaman yang berdedikasi tinggi.',
                            },
                            {
                                icon: (
                                    <Shield
                                        className="text-blue-600"
                                        size={32}
                                    />
                                ),
                                title: 'Lingkungan Islami',
                                desc: 'Suasana pondok yang kondusif untuk pengembangan karakter dan spiritual.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Open Waves */}
                <section className="mx-auto max-w-6xl px-6 py-12">
                    <h2 className="mb-3 text-center text-2xl font-bold text-gray-800">
                        Gelombang Pendaftaran Terbuka
                    </h2>
                    <p className="mb-10 text-center text-gray-500">
                        Pilih lembaga dan gelombang sesuai keinginan Anda
                    </p>

                    {waves.length === 0 ? (
                        <div className="rounded-2xl border border-gray-100 bg-white py-16 text-center">
                            <Calendar
                                className="mx-auto mb-4 text-gray-300"
                                size={48}
                            />
                            <p className="font-medium text-gray-500">
                                Belum ada gelombang pendaftaran yang terbuka
                                saat ini.
                            </p>
                            <p className="mt-1 text-sm text-gray-400">
                                Silakan kunjungi kembali nanti.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            {waves.map((wave) => (
                                <div
                                    key={wave.id}
                                    className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5">
                                        <span className="text-xs font-medium tracking-wider text-emerald-100 uppercase">
                                            {wave.institution.type}
                                        </span>
                                        <h3 className="mt-1 text-lg font-bold text-white">
                                            {wave.institution.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-emerald-200">
                                            {wave.name}
                                        </p>
                                    </div>
                                    <div className="space-y-4 p-6">
                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                            <Calendar
                                                size={16}
                                                className="flex-shrink-0 text-emerald-500"
                                            />
                                            <span>
                                                {formatDate(wave.start_date)} —{' '}
                                                {formatDate(wave.end_date)}
                                            </span>
                                        </div>
                                        {wave.exam_date && (
                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <MapPin
                                                    size={16}
                                                    className="flex-shrink-0 text-blue-500"
                                                />
                                                <span>
                                                    Tes Seleksi:{' '}
                                                    {formatDate(wave.exam_date)}
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                            <div>
                                                <span className="text-xs text-gray-400">
                                                    Biaya Pendaftaran
                                                </span>
                                                <p className="text-lg font-bold text-emerald-700">
                                                    {formatCurrency(
                                                        wave.registration_fee,
                                                    )}
                                                </p>
                                            </div>
                                            <Link
                                                href={`/daftar/${wave.id}`}
                                                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700"
                                            >
                                                Daftar
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Footer */}
                <footer className="mt-12 bg-gray-900 py-12 text-gray-400">
                    <div className="mx-auto max-w-6xl px-6 text-center">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Pondok Pesantren
                            Dar Al Tauhid. Hak Cipta Dilindungi.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
