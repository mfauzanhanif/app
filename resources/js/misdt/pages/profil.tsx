import MisdtLayout from '@/misdt/layouts/misdt-layout';

export default function Profil() {
    const misi = [
        'Menyelenggarakan pendidikan yang kreatif dan inovatif berbasis pesantren.',
        'Menyelenggarakan kegiatan hafalan surat-surat pendek dan surat-surat pilihan.',
        'Mengembangkan keterampilan berbahasa dan berkomunikasi melalui bilingual class.',
        'Mengembangkan potensi peserta didik sesuai minat dan bakat.',
        'Mengembangkan dan mengamalkan nilai-nilai akhlakul karimah yang sesuai dengan ajaran Islam dalam kehidupan sehari-hari.',
        'Meningkatkan kebiasaan berperilaku disiplin dan bertanggung jawab dalam kehidupan bermasyarakat baik dalam lingkungan keluarga, madrasah, maupun masyarakat.',
    ];

    return (
        <MisdtLayout title="Profil">
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-heading mb-3 text-4xl font-bold">
                        Profil Madrasah
                    </h1>
                    <p className="text-primary-200">
                        Mengenal lebih dekat MI Dar Al Tauhid
                    </p>
                </div>
            </section>

            {/* Sambutan Kepala Madrasah */}
            <section className="section-padding bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        <div className="order-2 lg:order-1">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
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
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                Sambutan Kepala Madrasah
                            </div>
                            <h2 className="font-heading mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                                Hj. Fuaidiyah, S.Pd.I.
                            </h2>
                            <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                                <p>
                                    <em>
                                        Assalamu'alaikum Warahmatullahi
                                        Wabarakatuh,
                                    </em>
                                </p>
                                <p>
                                    Alhamdulillah, segala puji bagi Allah SWT
                                    yang telah memberikan rahmat dan karunia-Nya
                                    sehingga Madrasah Ibtidaiyah Dar Al Tauhid
                                    (MISDT) dapat terus hadir memberikan
                                    pelayanan pendidikan terbaik bagi
                                    putra-putri bangsa.
                                </p>
                                <p>
                                    MISDT berkomitmen untuk mencetak generasi
                                    yang tidak hanya cerdas secara akademik,
                                    tetapi juga memiliki akhlakul karimah dan
                                    keimanan yang kuat. Melalui kurikulum
                                    terintegrasi dan program unggulan kami, kami
                                    berupaya mempersiapkan siswa-siswi yang siap
                                    menghadapi tantangan masa depan.
                                </p>
                                <p>
                                    Kami mengundang Ayah/Bunda untuk
                                    mempercayakan pendidikan putra-putrinya
                                    kepada kami. Bersama-sama kita wujudkan
                                    generasi emas yang bermanfaat bagi nusa,
                                    bangsa, dan agama.
                                </p>
                                <p>
                                    <em>
                                        Wassalamu'alaikum Warahmatullahi
                                        Wabarakatuh.
                                    </em>
                                </p>
                            </div>
                        </div>
                        <div className="order-1 flex justify-center lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-200 to-primary-400 opacity-20 blur-xl" />
                                <div className="relative h-80 w-64 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-xl lg:h-96 lg:w-72">
                                    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                                        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md">
                                            <svg
                                                className="h-12 w-12 text-primary-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-primary-800">
                                            Hj. Fuaidiyah, S.Pd.I.
                                        </h3>
                                        <p className="text-sm text-primary-600">
                                            Kepala Madrasah
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Visi */}
                        <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-8 text-white shadow-xl lg:p-10">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
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
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                                VISI
                            </div>
                            <blockquote className="text-lg leading-relaxed italic lg:text-xl">
                                "Mencetak Lulusan Berakhlakul Karimah, Cerdas,
                                Kreatif yang Bermanfaat bagi Nusa, Bangsa dan
                                Agama."
                            </blockquote>
                        </div>

                        {/* Misi */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
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
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                </svg>
                                MISI
                            </div>
                            <ul className="space-y-3">
                                {misi.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                                            {idx + 1}
                                        </span>
                                        <span className="text-sm leading-relaxed text-gray-600">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Instansi */}
            <section className="section-padding bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Data <span className="text-gradient">Instansi</span>
                        </h2>
                    </div>

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
                        {[
                            {
                                label: 'Nama Madrasah',
                                value: 'MI Dar Al Tauhid (MISDT)',
                            },
                            { label: 'NSM', value: '111232090179' },
                            { label: 'NPSN', value: '70041588' },
                            // { label: 'Akreditasi', value: 'Belum Akreditasi' },
                            // { label: 'Kepala Madrasah', value: 'Hj. Fuaidiyah, S.Pd.I.' },
                            {
                                label: 'Alamat',
                                value: 'Jl. KH. A. Syathori, RT/RW 02/06, Desa Arjawinangun, Kec. Arjawinangun, Kab. Cirebon, Jawa Barat - 45162',
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-xl border border-gray-100 bg-gray-50 p-5"
                            >
                                <p className="mb-1 text-xs font-medium tracking-wider text-gray-400 uppercase">
                                    {item.label}
                                </p>
                                <p className="text-sm font-medium text-gray-800">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MisdtLayout>
    );
}
