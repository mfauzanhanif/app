import { Head, Link, usePage } from '@inertiajs/react';
import { Calendar, MapPin, Users, ArrowRight, GraduationCap, Star, Shield } from 'lucide-react';

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
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
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
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                    <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <img src="/logo-pondok.png" alt="Logo" className="h-16 w-auto drop-shadow-lg" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            Penerimaan Santri Baru
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
                            Pondok Pesantren Dar Al Tauhid — Mendidik Generasi Qurani yang Berilmu dan Berakhlak
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {auth?.user ? (
                                <Link
                                    href="/status"
                                    className="inline-flex items-center gap-2 bg-white text-emerald-800 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                                >
                                    <Users size={20} />
                                    Cek Status Pendaftaran
                                </Link>
                            ) : (
                                <a
                                    href="/login"
                                    className="inline-flex items-center gap-2 bg-white text-emerald-800 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                                >
                                    <ArrowRight size={20} />
                                    Login & Daftar Sekarang
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                {/* Why Us */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">Kenapa Dar Al Tauhid?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <GraduationCap className="text-emerald-600" size={32} />, title: 'Kurikulum Terintegrasi', desc: 'Memadukan kurikulum nasional, diniyyah, dan tahfidz Al-Quran dalam satu sistem pendidikan.' },
                            { icon: <Star className="text-amber-500" size={32} />, title: 'Tenaga Pendidik Berkualitas', desc: 'Dibimbing oleh ustadz dan guru berpengalaman yang berdedikasi tinggi.' },
                            { icon: <Shield className="text-blue-600" size={32} />, title: 'Lingkungan Islami', desc: 'Suasana pondok yang kondusif untuk pengembangan karakter dan spiritual.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Open Waves */}
                <section className="max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">Gelombang Pendaftaran Terbuka</h2>
                    <p className="text-gray-500 text-center mb-10">Pilih lembaga dan gelombang sesuai keinginan Anda</p>

                    {waves.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                            <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500 font-medium">Belum ada gelombang pendaftaran yang terbuka saat ini.</p>
                            <p className="text-gray-400 text-sm mt-1">Silakan kunjungi kembali nanti.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                            {waves.map((wave) => (
                                <div key={wave.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5">
                                        <span className="text-emerald-100 text-xs font-medium uppercase tracking-wider">{wave.institution.type}</span>
                                        <h3 className="text-white font-bold text-lg mt-1">{wave.institution.name}</h3>
                                        <p className="text-emerald-200 text-sm mt-1">{wave.name}</p>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                            <Calendar size={16} className="text-emerald-500 flex-shrink-0" />
                                            <span>{formatDate(wave.start_date)} — {formatDate(wave.end_date)}</span>
                                        </div>
                                        {wave.exam_date && (
                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                                                <span>Tes Seleksi: {formatDate(wave.exam_date)}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div>
                                                <span className="text-xs text-gray-400">Biaya Pendaftaran</span>
                                                <p className="text-emerald-700 font-bold text-lg">{formatCurrency(wave.registration_fee)}</p>
                                            </div>
                                            <Link
                                                href={`/daftar/${wave.id}`}
                                                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm shadow-sm hover:bg-emerald-700 transition-colors"
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
                <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <p className="text-sm">&copy; {new Date().getFullYear()} Pondok Pesantren Dar Al Tauhid. Hak Cipta Dilindungi.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
