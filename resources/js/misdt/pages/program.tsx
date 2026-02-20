import MisdtLayout from '@/misdt/layouts/misdt-layout';

export default function Program() {
    const jadwal = [
        { waktu: '07.00 - 07.30', kegiatan: 'Penyambutan Siswa' },
        {
            waktu: '07.30 - 08.00',
            kegiatan:
                "Pembiasaan Siswa (Sholat Dhuha, Kosakata Bahasa Arab & Inggris, Do'a Harian, Calistung)",
        },
        {
            waktu: '08.00 - 09.00',
            kegiatan: "Pembelajaran Al-Qur'an Metode Yanbu'a",
        },
        { waktu: '09.00 - 09.30', kegiatan: 'Istirahat - Snack Time' },
        { waktu: '09.30 - 11.30', kegiatan: 'Kegiatan Belajar Mengajar (KBM)' },
        {
            waktu: '11.30 - 12.30',
            kegiatan: 'Sholat Dzuhur Berjamaah dan Makan Siang',
        },
        { waktu: '12.30 - 14.00', kegiatan: 'Kegiatan Belajar Mengajar (KBM)' },
        { waktu: '14.00 - 15.00', kegiatan: 'Istirahat - Tidur' },
        { waktu: '15.00 - 15.30', kegiatan: 'Sholat Ashar Berjamaah' },
        { waktu: '15.30 - 16.00', kegiatan: 'Penjemputan Pulang Siswa' },
    ];

    const ekskul = [
        { name: 'Pramuka', icon: '⚜️' },
        { name: 'Arabic Club', icon: '🕌' },
        { name: 'English Club', icon: '🇬🇧' },
        { name: 'Tari Tradisional', icon: '💃' },
        { name: 'Tahfidz', icon: '📖' },
        { name: 'Taekwondo', icon: '🥋' },
        { name: 'Montessori', icon: '🧩' },
    ];

    return (
        <MisdtLayout title="Program Unggulan">
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-heading mb-3 text-4xl font-bold">
                        Program Unggulan
                    </h1>
                    <p className="text-primary-200">
                        Kurikulum terintegrasi untuk generasi unggul
                    </p>
                </div>
            </section>

            {/* Program Akademik */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Program{' '}
                            <span className="text-gradient">Akademik</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-500">
                            Kami menggabungkan kurikulum nasional dengan
                            kurikulum pesantren
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {/* Bilingual Class */}
                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/assets/images/misdt/KBM.jpeg"
                                    alt="Bilingual Class"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                                    Bilingual Class
                                </h3>
                                <p className="mb-3 text-sm text-gray-500">
                                    Program pengembangan kemampuan berbahasa
                                    asing melalui pembelajaran bilingual.
                                </p>
                                <ul className="space-y-1.5 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Bahasa Inggris
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Bahasa Arab
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Praktek Percakapan Harian
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Tahfidz */}
                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/assets/images/misdt/KBM.jpeg"
                                    alt="Tahfidz Al-Qur'an"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                                    Tahfidz Al-Qur'an
                                </h3>
                                <p className="mb-3 text-sm text-gray-500">
                                    Program hafalan Al-Qur'an dengan target yang
                                    terukur dan bimbingan intensif.
                                </p>
                                <ul className="space-y-1.5 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Target Juz 30
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Target Juz 29
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Target Juz 1
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Metode Yanbu'a */}
                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/assets/images/misdt/KBM.jpeg"
                                    alt="Metode Yanbu'a"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                                    Metode Yanbu'a
                                </h3>
                                <p className="mb-3 text-sm text-gray-500">
                                    Pembelajaran membaca Al-Qur'an dengan metode
                                    Yanbu'a yang terbukti efektif.
                                </p>
                                <ul className="space-y-1.5 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Pembelajaran Bertahap
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Tajwid & Makhorijul Huruf
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary-500">
                                            ✓
                                        </span>{' '}
                                        Bimbingan Individual
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jadwal Harian */}
            <section className="section-padding bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Jadwal <span className="text-gradient">Harian</span>
                        </h2>
                        <p className="text-gray-500">
                            Full Day Activity (07.00 - 16.00 WIB)
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-primary-700 text-white">
                                    <th className="px-6 py-4 text-left text-sm font-semibold">
                                        Waktu
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">
                                        Kegiatan
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {jadwal.map((item, idx) => (
                                    <tr
                                        key={idx}
                                        className={`border-b border-gray-50 transition-colors hover:bg-primary-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                                    >
                                        <td className="px-6 py-3.5 text-sm font-medium whitespace-nowrap text-primary-700">
                                            {item.waktu}
                                        </td>
                                        <td className="px-6 py-3.5 text-sm text-gray-600">
                                            {item.kegiatan}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Ekstrakurikuler */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Ekstra
                            <span className="text-gradient">kurikuler</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-500">
                            Mengembangkan potensi siswa sesuai minat dan bakat
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                        {ekskul.map((item) => (
                            <div
                                key={item.name}
                                className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                            >
                                <span className="mb-3 text-4xl transition-transform group-hover:scale-110">
                                    {item.icon}
                                </span>
                                <span className="text-center text-sm font-medium text-gray-700">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MisdtLayout>
    );
}
