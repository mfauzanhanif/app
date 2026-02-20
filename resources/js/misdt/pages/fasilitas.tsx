import MisdtLayout from '@/misdt/layouts/misdt-layout';

export default function Fasilitas() {
    const fasilitasUnggulan = [
        {
            title: 'Ruang Kelas Ber-AC',
            desc: 'Seluruh ruang kelas dilengkapi dengan pendingin udara (AC)CCTV untuk kenyamanan dan keamanan proses belajar mengajar.',
            icon: '❄️',
            gradient: 'from-cyan-500 to-blue-500',
        },
        {
            title: 'Ruang Kelas dengan CCTV',
            desc: 'Ruang kelas dilengkapi dengan CCTV untuk kenyamanan dan keamanan proses belajar mengajar.',
            icon: '📹',
            gradient: 'from-orange-400 to-red-500',
        },
    ];

    const fasilitasPenunjang = [
        {
            title: 'Pendopo Makan',
            desc: 'Area makan siang bersama yang nyaman dan bersih.',
            icon: '🍽️',
        },
        {
            title: 'Mushola',
            desc: 'Tempat ibadah yang bersih dan nyaman untuk shalat berjamaah.',
            icon: '🕌',
        },
        {
            title: 'Perpustakaan',
            desc: 'Koleksi buku yang lengkap untuk menumbuhkan minat baca siswa.',
            icon: '📚',
        },
        {
            title: 'Lapangan Olahraga',
            desc: 'Area olahraga untuk pengembangan fisik dan kegiatan ekstrakurikuler.',
            icon: '⚽',
        },
        {
            title: 'Kantin Sehat',
            desc: 'Menyediakan makanan dan minuman sehat untuk siswa.',
            icon: '🏪',
        },
        {
            title: 'Toilet',
            desc: 'Toilet yang bersih dan nyaman tersedia di setiap pojok gedung.',
            icon: '🚽',
        },
    ];

    return (
        <MisdtLayout title="Fasilitas">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-heading mb-3 text-4xl font-bold">
                        Fasilitas
                    </h1>
                    <p className="text-primary-200">
                        Sarana & prasarana yang mendukung pembelajaran terbaik
                    </p>
                </div>
            </section>

            {/* Fasilitas Unggulan */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Fasilitas{' '}
                            <span className="text-gradient">Unggulan</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-500">
                            Investasi terbaik untuk kenyamanan belajar
                            putra-putri Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {fasilitasUnggulan.map((item) => (
                            <div
                                key={item.title}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div
                                    className={`bg-gradient-to-r ${item.gradient} flex h-56 items-center justify-center`}
                                >
                                    <span className="text-8xl opacity-80 transition-transform group-hover:scale-110">
                                        {item.icon}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-500">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fasilitas Penunjang */}
            <section className="section-padding bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Fasilitas{' '}
                            <span className="text-gradient">Penunjang</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {fasilitasPenunjang.map((item) => (
                            <div
                                key={item.title}
                                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                            >
                                <span className="text-4xl transition-transform group-hover:scale-110">
                                    {item.icon}
                                </span>
                                <div>
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

            {/* Info Box */}
            <section className="bg-primary-50 py-12">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-primary-100 bg-white p-8 shadow-sm">
                        <div className="mb-4 text-4xl">📸</div>
                        <h3 className="font-heading mb-2 text-lg font-bold text-gray-900">
                            Ingin Melihat Langsung?
                        </h3>
                        <p className="mb-6 text-sm text-gray-500">
                            Kunjungi MI Dar Al Tauhid dan lihat sendiri
                            fasilitas yang kami sediakan untuk putra-putri Anda.
                        </p>
                        <a
                            href="https://wa.me/6285860783784?text=Assalamu'alaikum,%20saya%20ingin%20mengunjungi%20MIS%20Dar%20Al%20Tauhid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700"
                        >
                            Jadwalkan Kunjungan
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
                        </a>
                    </div>
                </div>
            </section>
        </MisdtLayout>
    );
}
