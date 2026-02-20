import { Link } from '@inertiajs/react';
import MisdtLayout from '@/misdt/layouts/misdt-layout';
import AnnouncementModal from '@/misdt/components/AnnouncementModal';

export default function Beranda() {
    return (
        <MisdtLayout>
            <AnnouncementModal />

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/images/misdt/Gedung.jpg"
                        alt="Gedung MIS Dar Al Tauhid"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-900/75" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
                    <div className="text-center">
                        <h1 className="font-heading mb-6 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
                            Madrasah Ibtidaiyah
                        </h1>
                        <h1 className="font-heading mb-6 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
                            Dar Al Tauhid
                        </h1>
                        <p className="mx-auto mb-4 max-w-2xl text-lg text-primary-100 sm:text-xl">
                            Mencetak Generasi yang Berakhlakul Karimah, Cerdas,
                            dan Kreatif
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/ppdb"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                Info PPDB
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="/profil"
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Wave bottom */}
                <div className="absolute right-0 bottom-0 left-0">
                    <svg
                        viewBox="0 0 1440 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                    >
                        <path
                            d="M0 50L48 45C96 40 192 30 288 28C384 26 480 32 576 40C672 48 768 58 864 55C960 52 1056 36 1152 30C1248 24 1344 28 1392 30L1440 32V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
                            fill="#f9fafb"
                        />
                    </svg>
                </div>
            </section>

            {/* Keunggulan Section */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Mengapa Memilih{' '}
                            <span className="text-gradient">MISDT?</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-500">
                            Kami menyediakan lingkungan belajar terbaik untuk
                            putra-putri Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {/* Full Day School */}
                        <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-3xl transition-colors group-hover:bg-primary-100">
                                🏫
                            </div>
                            <h3 className="font-heading mb-2 text-lg font-semibold text-gray-900">
                                Full Day School
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500">
                                Pembelajaran efektif dari pukul 07.00 hingga
                                16.00 WIB dengan kurikulum terintegrasi.
                            </p>
                        </div>

                        {/* Nyaman & Aman */}
                        <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="bg-accent-50 group-hover:bg-accent-100 mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-3xl transition-colors">
                                ❄️
                            </div>
                            <h3 className="font-heading mb-2 text-lg font-semibold text-gray-900">
                                Nyaman & Aman
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500">
                                Ruang kelas Full AC dengan pantauan CCTV 24 jam
                                untuk keamanan dan kenyamanan belajar.
                            </p>
                        </div>

                        {/* Tahfidz */}
                        <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="bg-gold-400/10 group-hover:bg-gold-400/20 mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-3xl transition-colors">
                                📖
                            </div>
                            <h3 className="font-heading mb-2 text-lg font-semibold text-gray-900">
                                Tahfidz & Yanbu'a
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500">
                                Target hafalan Juz 30, 29, dan 1 dengan metode
                                pembelajaran Al-Qur'an Yanbu'a.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlight Kegiatan */}
            <section className="section-padding bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Kegiatan{' '}
                            <span className="text-gradient">Unggulan</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-500">
                            Berbagai kegiatan yang mendukung tumbuh kembang
                            putra-putri Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: 'Market Day',
                                desc: 'Belajar wirausaha sejak dini melalui kegiatan jual beli di lingkungan sekolah.',
                                image: '/assets/images/misdt/Market Day.jpg',
                            },
                            {
                                title: 'Outing Class',
                                desc: 'Pembelajaran di luar kelas untuk pengalaman belajar yang lebih menyenangkan.',
                                image: '/assets/images/misdt/Outing Class.jpg',
                            },
                            {
                                title: 'Bilingual Class',
                                desc: 'Pengembangan kemampuan bahasa Inggris dan Arab secara intensif.',
                                image: '/assets/images/misdt/KBM.jpeg',
                            },
                            {
                                title: 'Tahfidz',
                                desc: "Program hafalan Al-Qur'an dengan target Juz 30, 29, dan 1.",
                                image: '/assets/images/misdt/Yanbua.jpg',
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group overflow-hidden rounded-2xl bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="h-40 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-heading mb-1 font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Profil */}
            <section className="section-padding bg-primary-900">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-white">
                            Video Profil Sekolah
                        </h2>
                        <p className="text-primary-200">
                            Kenali lebih dekat MIS DAR Al Tauhid
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                        <iframe
                            className="aspect-video w-full"
                            src="https://www.youtube.com/embed/dXHXtbAtF-c?si=FKnt0qIHuCOZj0pZ"
                            title="Video Profil MIS DAR Al Tauhid"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900">
                        Siap Bergabung Bersama Kami?
                    </h2>
                    <p className="mx-auto mb-8 max-w-xl text-gray-500">
                        Dapatkan informasi lebih lanjut tentang pendaftaran dan
                        program kami. Hubungi kami sekarang juga.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="https://wa.me/6285860783784?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20MIS%20Dar%20Al%20Tauhid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Hubungi via WhatsApp
                        </a>
                        <Link
                            href="/kontak"
                            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                        >
                            Halaman Kontak
                        </Link>
                    </div>
                </div>
            </section>
        </MisdtLayout>
    );
}
