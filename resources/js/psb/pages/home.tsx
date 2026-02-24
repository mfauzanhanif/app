import { Link } from '@inertiajs/react';

import Navbar from '@/psb/components/Navbar';
import PsbLayout from '@/psb/layouts/psb-layout';
import type { Wave } from '@/psb/types';
import { formatCurrency, formatDate } from '@/psb/types';

interface FeeComponent {
    id: number;
    name: string;
    amount: number;
    type: 'sekali' | 'bulanan';
    description: string | null;
}

interface HomeProps {
    waves: Wave[];
    fees: Record<string, FeeComponent[]>;
}

export default function Home({ waves, fees }: HomeProps) {
    const firstWaveId = waves.length > 0 ? waves[0].id : null;
    const daftarHref = firstWaveId ? `/daftar/${firstWaveId}` : '/#gelombang';

    return (
        <PsbLayout
            title="PSB Dar Al Tauhid — Penerimaan Santri Baru"
            hideFooter
            navbar={<Navbar firstWaveId={firstWaveId} />}
        >
            {/* ══════════ SECTION 1+2: HERO + BANNER (digabung) ══════════ */}
            <section className="relative overflow-hidden bg-linear-to-br from-emerald-600 via-emerald-700 to-teal-800">
                {/* Dots background */}
                <div className="pointer-events-none absolute inset-0 opacity-10">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                </div>

                {/* Hero content */}
                <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-16 pb-10 sm:px-6 md:pt-24 md:pb-16 lg:grid-cols-2 lg:px-8">
                    <div className="order-2 text-center lg:order-1 lg:text-left">
                        <span className="mb-6 inline-block cursor-default rounded-full bg-yellow-400 px-6 py-2 text-lg font-bold tracking-wider text-yellow-900 shadow-md transition hover:scale-105 md:text-xl">
                            Telah Dibuka!
                        </span>
                        <h1 className="mt-2 font-serif text-3xl font-bold text-white/90 sm:text-4xl md:text-5xl">
                            Penerimaan Santri Baru
                        </h1>
                        <h2 className="mt-3 font-serif text-2xl font-bold text-white/80 sm:text-3xl md:text-4xl">
                            Pondok Pesantren Dar Al Tauhid
                        </h2>
                        <p className="mt-3 text-lg font-light text-emerald-200 sm:text-xl md:text-2xl">
                            Tahun Ajaran 2026–2027
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                            <Link
                                href={daftarHref}
                                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-[0_0_20px_rgba(255,255,255,.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-[0_0_25px_rgba(255,255,255,.5)]"
                            >
                                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                Daftar Sekarang
                            </Link>
                            <Link
                                href="/status"
                                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                            >
                                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Cek Status
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                        <div className="group relative">
                            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-emerald-300 to-yellow-300 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />
                            <div className="absolute -inset-4 rounded-full bg-white/10 blur-2xl" />
                            <img
                                src="/assets/images/psb/foto-santri.png"
                                alt="Santri Dar Al Tauhid"
                                className="relative w-56 object-contain drop-shadow-2xl transition duration-500 hover:scale-[1.02] sm:w-64 md:w-72 lg:w-96"
                            />
                        </div>
                    </div>
                </div>

                {/* Info banner (di dalam section yang sama) */}
                <div className="relative z-10 border-t border-emerald-500/40 bg-emerald-800/60 backdrop-blur-sm">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row lg:px-8">
                        <div className="flex items-start text-center md:items-center md:text-left">
                            <div className="mr-4 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-700 md:flex">
                                <svg className="h-6 w-6 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-white">
                                    Melayani Pendaftaran Offline di Kantor Pondok Pesantren
                                </p>
                                <p className="text-sm text-emerald-200">
                                    Jam Operasional: 08.00 s.d. 15.00 WIB (Setiap Hari)
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://wa.me/6285624568440"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center rounded-lg bg-white px-5 py-2.5 font-medium text-emerald-700 shadow-sm transition hover:bg-emerald-50"
                        >
                            <svg className="mr-2 h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="relative z-10">
                    <svg className="h-10 w-full md:h-14" viewBox="0 0 1440 54" fill="none" preserveAspectRatio="none">
                        <path d="M0 22L60 27C120 32 240 42 360 47C480 52 600 52 720 44C840 36 960 22 1080 17C1200 12 1320 17 1380 19L1440 22V54H0V22Z" fill="#f0fdf4" />
                    </svg>
                </div>
            </section>

            {/* ══════════ SECTION 3: PROGRAM UNGGULAN ══════════ */}
            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            Program Unggulan
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                            Memadukan kurikulum pesantren salaf dengan
                            pendidikan formal modern
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Kitab Kuning */}
                        <div className="group relative overflow-hidden rounded-3xl border border-amber-100 bg-linear-to-br from-amber-50 to-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-amber-200/30 blur-2xl" />
                            <div className="relative">
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                    Kajian Kitab Kuning
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-600">
                                    Santri diajarkan membaca, memahami, dan
                                    mendalami kitab-kitab klasik karya ulama
                                    salaf secara langsung dari masyayikh
                                    berpengalaman. Kajian mencakup{' '}
                                    <strong>
                                        Nahwu, Sharaf, Fiqih, Ushul Fiqih,
                                        Tafsir, Hadits,
                                    </strong>{' '}
                                    dan ilmu-ilmu alat lainnya.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Nahwu-Sharaf',
                                        'Fiqih',
                                        'Tafsir',
                                        'Hadits',
                                        'Aqidah',
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tahfidz */}
                        <div className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 to-teal-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-200/30 blur-2xl" />
                            <div className="relative">
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                    Tahfidz Al-Qur'an
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-600">
                                    Program unggulan menghafal Al-Qur'an dengan
                                    bimbingan <strong>ustadz/ah hafidz</strong>{' '}
                                    bersertifikat sanad. Santri dibimbing secara
                                    intensif dan bertahap dengan metode{' '}
                                    <strong>talaqqi</strong> dan{' '}
                                    <strong>muraja'ah</strong> harian untuk
                                    memastikan kualitas hafalan yang mutqin.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Talaqqi',
                                        "Muraja'ah",
                                        'Sanad',
                                        'Tartil',
                                        'Tajwid',
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ SECTION 4: ALUR PENDAFTARAN ══════════ */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            Alur Pendaftaran
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                            Hanya 4 langkah mudah untuk bergabung bersama kami
                        </p>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block">
                        <div className="relative">
                            <div className="absolute top-16 right-0 left-0 h-3 rounded-full bg-linear-to-r from-emerald-600 via-emerald-400 to-emerald-600 shadow-md" />
                            <div className="relative grid grid-cols-4 gap-4">
                                <TimelineStep
                                    icon={FormIcon}
                                    title="Isi Formulir"
                                    desc="Isi biodata santri, orang tua & pendidikan secara online."
                                />
                                <TimelineStep
                                    icon={UploadIcon}
                                    title="Upload Dokumen"
                                    desc="Unggah KK, Akta, Ijazah dalam format digital."
                                />
                                <TimelineStep
                                    icon={PrintIcon}
                                    title="Cetak Pendaftaran"
                                    desc="Download bukti pendaftaran setelah terverifikasi."
                                />
                                <TimelineStep
                                    icon={PayIcon}
                                    title="Pembayaran & Cek Status"
                                    desc="Lunasi pembayaran dan pantau status pendaftaran."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden">
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-8 w-2 rounded-full bg-linear-to-b from-emerald-600 via-emerald-400 to-emerald-600 shadow-md" />
                            <div className="space-y-8">
                                <MobileStep
                                    icon={FormIcon}
                                    title="Isi Formulir"
                                    desc="Isi biodata santri, orang tua & pendidikan secara online."
                                />
                                <MobileStep
                                    icon={UploadIcon}
                                    title="Upload Dokumen"
                                    desc="Unggah KK, Akta, Ijazah dalam format digital."
                                />
                                <MobileStep
                                    icon={PrintIcon}
                                    title="Cetak Pendaftaran"
                                    desc="Download bukti pendaftaran setelah terverifikasi."
                                />
                                <MobileStep
                                    icon={PayIcon}
                                    title="Pembayaran & Cek Status"
                                    desc="Lunasi pembayaran dan pantau status pendaftaran."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ SECTION 5: PERSYARATAN ══════════ */}
            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            Berkas Persyaratan
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                            Pastikan dokumen berikut sudah siap dalam format
                            digital (JPG/PDF)
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            'Kartu Keluarga (KK)',
                            'Akta Kelahiran',
                            'KTP Orang Tua / Wali',
                            'Ijazah / Surat Keterangan Lulus',
                            'Pas Foto 3×4 Berwarna',
                            'KIP / KIS (Jika ada)',
                        ].map((doc) => (
                            <div
                                key={doc}
                                className="flex items-center rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
                            >
                                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                                    <svg
                                        className="h-5 w-5 text-emerald-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <span className="font-medium text-gray-800">
                                    {doc}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ SECTION 6: RINCIAN BIAYA ══════════ */}
            <section
                id="biaya"
                className="scroll-mt-20 bg-gray-50 py-16 md:py-20"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            Rincian Biaya
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                            Informasi rincian biaya pendidikan per lembaga
                        </p>
                    </div>

                    {Object.keys(fees).length === 0 ? (
                        <p className="text-center text-gray-400">
                            Belum ada data rincian biaya.
                        </p>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {Object.entries(fees).map(
                                ([institutionName, items]) => {
                                    const sekali = items.filter(
                                        (i) => i.type === 'sekali',
                                    );
                                    const bulanan = items.filter(
                                        (i) => i.type === 'bulanan',
                                    );
                                    const totalSekali = sekali.reduce(
                                        (sum, i) => sum + Number(i.amount),
                                        0,
                                    );
                                    const totalBulanan = bulanan.reduce(
                                        (sum, i) => sum + Number(i.amount),
                                        0,
                                    );

                                    return (
                                        <div
                                            key={institutionName}
                                            className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl"
                                        >
                                            <div className="bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-5 text-center text-white">
                                                <h3 className="text-lg font-bold">
                                                    {institutionName}
                                                </h3>
                                            </div>
                                            <div className="p-6">
                                                {sekali.length > 0 && (
                                                    <div className="mb-5">
                                                        <h4 className="mb-3 text-xs font-bold tracking-wider text-gray-400 uppercase">
                                                            Biaya Sekali Bayar
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {sekali.map(
                                                                (item) => (
                                                                    <div
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        className="flex items-end justify-between"
                                                                    >
                                                                        <div>
                                                                            <span className="text-sm font-medium text-gray-700">
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </span>
                                                                            {item.description && (
                                                                                <p className="text-xs text-gray-400">
                                                                                    {
                                                                                        item.description
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                        <span className="ml-2 text-sm font-bold whitespace-nowrap text-gray-900">
                                                                            {formatCurrency(
                                                                                Number(
                                                                                    item.amount,
                                                                                ),
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                ),
                                                            )}
                                                        </div>
                                                        <div className="mt-3 flex items-end justify-between border-t border-dashed border-gray-200 pt-3">
                                                            <span className="text-sm font-semibold text-gray-600">
                                                                Total Sekali
                                                                Bayar
                                                            </span>
                                                            <span className="text-base font-extrabold text-emerald-600">
                                                                {formatCurrency(
                                                                    totalSekali,
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                {bulanan.length > 0 && (
                                                    <div>
                                                        <h4 className="mb-3 text-xs font-bold tracking-wider text-gray-400 uppercase">
                                                            Biaya Bulanan
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {bulanan.map(
                                                                (item) => (
                                                                    <div
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        className="flex items-end justify-between"
                                                                    >
                                                                        <div>
                                                                            <span className="text-sm font-medium text-gray-700">
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </span>
                                                                            {item.description && (
                                                                                <p className="text-xs text-gray-400">
                                                                                    {
                                                                                        item.description
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                        <span className="ml-2 text-sm font-bold whitespace-nowrap text-gray-900">
                                                                            {formatCurrency(
                                                                                Number(
                                                                                    item.amount,
                                                                                ),
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                ),
                                                            )}
                                                        </div>
                                                        <div className="mt-3 flex items-end justify-between border-t border-dashed border-gray-200 pt-3">
                                                            <span className="text-sm font-semibold text-gray-600">
                                                                Total / Bulan
                                                            </span>
                                                            <span className="text-base font-extrabold text-emerald-600">
                                                                {formatCurrency(
                                                                    totalBulanan,
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* ══════════ SECTION 7: CTA + GELOMBANG ══════════ */}
            <section
                id="gelombang"
                className="scroll-mt-20 bg-white py-16 md:py-20"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            Tunggu Apa Lagi?<br />
                            <span className="text-emerald-600">Daftarkan Putra-Putri Anda Sekarang!</span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                            Pilih gelombang pendaftaran dan segera daftarkan
                            putra‑putri Anda untuk tahun ajaran 2026–2027
                        </p>
                    </div>

                    {waves.length === 0 ? (
                        <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
                            <svg
                                className="mx-auto mb-4 h-12 w-12 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <p className="text-lg font-semibold text-gray-600">
                                Belum Ada Gelombang Dibuka
                            </p>
                            <p className="mt-1 text-sm text-gray-400">
                                Nantikan informasi gelombang pendaftaran
                                berikutnya.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {waves.map((wave) => (
                                <div
                                    key={wave.id}
                                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8"
                                >
                                    <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-emerald-500 to-teal-500" />
                                    <span className="mb-4 inline-block self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                        {wave.institution.name}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {wave.name}
                                    </h3>
                                    {wave.description && (
                                        <p className="mt-2 text-sm text-gray-500">
                                            {wave.description}
                                        </p>
                                    )}

                                    <div className="mt-6 space-y-3 text-sm">
                                        <InfoRow
                                            label="Tanggal Buka"
                                            value={formatDate(wave.start_date)}
                                        />
                                        <InfoRow
                                            label="Tanggal Tutup"
                                            value={formatDate(wave.end_date)}
                                        />
                                        {wave.exam_date && (
                                            <InfoRow
                                                label="Tanggal Ujian"
                                                value={formatDate(
                                                    wave.exam_date,
                                                )}
                                            />
                                        )}
                                        {wave.announcement_date && (
                                            <InfoRow
                                                label="Pengumuman"
                                                value={formatDate(
                                                    wave.announcement_date,
                                                )}
                                            />
                                        )}
                                    </div>

                                    <div className="mt-auto pt-6">
                                        <div className="mb-4 text-center">
                                            <span className="text-xs font-medium text-gray-500">
                                                Biaya Pendaftaran
                                            </span>
                                            <div className="text-2xl font-extrabold text-emerald-600">
                                                {wave.registration_fee > 0
                                                    ? formatCurrency(
                                                        wave.registration_fee,
                                                    )
                                                    : 'Gratis'}
                                            </div>
                                        </div>
                                        <Link
                                            href={`/daftar/${wave.id}`}
                                            className="flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white shadow-md transition hover:bg-emerald-700"
                                        >
                                            <svg
                                                className="mr-2 h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                            </svg>
                                            Daftar Sekarang
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CTA bawah */}
                    <div className="mt-12 rounded-2xl bg-linear-to-br from-emerald-600 to-teal-700 p-8 text-center shadow-xl md:p-10">
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                            Tunggu Apa Lagi?
                        </h3>
                        <p className="mx-auto mt-3 max-w-xl text-emerald-100">
                            Daftarkan putra-putri Anda sekarang dan raih masa depan yang lebih cerah bersama Pondok Pesantren Dar Al Tauhid.
                        </p>
                        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href={daftarHref}
                                className="inline-flex items-center rounded-lg border-2 border-white bg-white px-8 py-3 text-lg font-bold text-emerald-700 shadow-md transition hover:-translate-y-1 hover:bg-emerald-50"
                            >
                                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                Daftar Sekarang
                            </Link>
                            <a
                                href="https://wa.me/6285624568440"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-lg border-2 border-white/50 bg-white/10 px-8 py-3 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                            >
                                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Hubungi via WA
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ SECTION 8: FOOTER & COPYRIGHT ══════════ */}
            <footer className="bg-slate-900 text-gray-300">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Tentang */}
                        <div>
                            <h3 className="mb-4 text-lg font-bold text-white">
                                Pondok Pesantren Dar Al Tauhid
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                Lembaga pendidikan Islam yang memadukan
                                kurikulum pesantren salaf dengan pendidikan
                                formal modern. Mencetak generasi yang berilmu,
                                berakhlak mulia, dan bermanfaat bagi umat.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="mb-4 text-lg font-bold text-white">
                                Navigasi
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#gelombang"
                                        className="transition hover:text-emerald-400"
                                    >
                                        Daftar Sekarang
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="/status"
                                        className="transition hover:text-emerald-400"
                                    >
                                        Cek Status Pendaftaran
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/pengumuman"
                                        className="transition hover:text-emerald-400"
                                    >
                                        Pengumuman
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#biaya"
                                        className="transition hover:text-emerald-400"
                                    >
                                        Rincian Biaya
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Kontak */}
                        <div>
                            <h3 className="mb-4 text-lg font-bold text-white">
                                Kontak
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span>
                                        Jl. Raya Cipanas, Kec. Cipanas, Kab.
                                        Cianjur, Jawa Barat 43253
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg
                                        className="h-5 w-5 shrink-0 text-emerald-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <a
                                        href="https://wa.me/6285624568440"
                                        className="transition hover:text-emerald-400"
                                    >
                                        0856-2456-8440
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800">
                    <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-gray-500 sm:px-6 lg:px-8">
                        &copy; {new Date().getFullYear()} Yayasan Dar Al Tauhid.
                        Hak Cipta Dilindungi.
                    </div>
                </div>
            </footer>
        </PsbLayout>
    );
}

/* ─── Helper Components ─── */

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-end justify-between">
            <span className="z-10 bg-white pr-2 font-medium text-gray-600">
                {label}
            </span>
            <div className="mx-1 mb-1 grow border-b border-dashed border-gray-200" />
            <span className="z-10 bg-white pl-2 font-bold text-gray-900">
                {value}
            </span>
        </div>
    );
}

function TimelineStep({
    icon: Icon,
    title,
    desc,
}: {
    icon: React.FC;
    title: string;
    desc: string;
}) {
    return (
        <div className="flex flex-col items-center">
            <div className="z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <Icon />
            </div>
            <div className="mt-6 text-center">
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                    {title}
                </h3>
                <p className="px-2 text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    );
}

function MobileStep({
    icon: Icon,
    title,
    desc,
}: {
    icon: React.FC;
    title: string;
    desc: string;
}) {
    return (
        <div className="flex items-start">
            <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                <Icon />
            </div>
            <div className="ml-6 pt-2">
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    );
}

/* ─── SVG Icons ─── */

const FormIcon = () => (
    <svg
        className="h-10 w-10 md:h-12 md:w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
    </svg>
);

const UploadIcon = () => (
    <svg
        className="h-10 w-10 md:h-12 md:w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
    </svg>
);

const PrintIcon = () => (
    <svg
        className="h-10 w-10 md:h-12 md:w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
    </svg>
);

const PayIcon = () => (
    <svg
        className="h-10 w-10 md:h-12 md:w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
    </svg>
);
