import { Link } from '@inertiajs/react';
import MisdtLayout from '@/misdt/layouts/misdt-layout';

export default function Ppdb() {
    return (
        <MisdtLayout title="PPDB">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-heading mb-3 text-4xl font-bold">
                        Penerimaan Peserta Didik Baru
                    </h1>
                    <p className="text-primary-200">Tahun Ajaran 2026-2027</p>
                </div>
            </section>

            {/* Alert Box */}
            <section className="bg-gray-50 py-8">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
                        <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                                <svg
                                    className="h-5 w-5 text-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>
                            <h2 className="font-heading text-lg font-bold text-red-800">
                                🚫 Pengumuman Penting
                            </h2>
                        </div>
                        <p className="text-sm leading-relaxed text-red-700">
                            Mohon maaf, Pendaftaran <strong>Gelombang 2</strong>{' '}
                            yang dijadwalkan{' '}
                            <strong>15 Februari - 8 Mei 2026</strong>{' '}
                            <strong className="uppercase">ditiadakan</strong>{' '}
                            karena kuota sudah penuh pada Gelombang 1 (50
                            siswa). Terima kasih atas kepercayaan Ayah/Bunda.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Gelombang */}
            <section className="section-padding bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Jadwal{' '}
                            <span className="text-gradient">Pendaftaran</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Gelombang 1 */}
                        <div className="relative overflow-hidden rounded-2xl border-2 border-primary-200 bg-primary-50 p-6">
                            <div className="absolute top-0 right-0 rounded-bl-xl bg-primary-600 px-3 py-1 text-xs font-bold text-white">
                                DITUTUP ✓
                            </div>
                            <div className="mb-3 text-3xl">📋</div>
                            <h3 className="font-heading mb-2 text-xl font-bold text-primary-800">
                                Gelombang 1
                            </h3>
                            <p className="mb-3 text-sm font-medium text-primary-700">
                                1 Desember 2025 — 13 Februari 2026
                            </p>
                            <p className="text-sm text-primary-600">
                                Kuota: 50 siswa — <strong>TERPENUHI</strong>
                            </p>
                        </div>

                        {/* Gelombang 2 */}
                        <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-50 p-6 opacity-60">
                            <div className="absolute top-0 right-0 rounded-bl-xl bg-red-500 px-3 py-1 text-xs font-bold text-white">
                                DITIADAKAN
                            </div>
                            <div className="mb-3 text-3xl">📋</div>
                            <h3 className="font-heading mb-2 text-xl font-bold text-gray-600 line-through">
                                Gelombang 2
                            </h3>
                            <p className="mb-3 text-sm font-medium text-gray-500 line-through">
                                15 Februari 2026 — 8 Mei 2026
                            </p>
                            <p className="text-sm font-medium text-red-500">
                                Ditiadakan karena kuota penuh
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Persyaratan */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Persyaratan{' '}
                            <span className="text-gradient">Berkas</span>
                        </h2>
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                        <ul className="space-y-4">
                            {[
                                'Usia minimal 6 tahun (per Juli 2026)',
                                'Fotokopi Akta Kelahiran',
                                'Fotokopi Kartu Keluarga (KK)',
                                'Fotokopi KTP Orang Tua/Wali',
                                'Fotokopi Ijazah TK/RA (menyusul jika belum ada)',
                                'Pas Foto ukuran 2x3 dan 3x4 (Background Merah)',
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                                        {idx + 1}
                                    </span>
                                    <span className="text-sm text-gray-700">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Alur Pendaftaran */}
            <section className="section-padding bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading mb-3 text-3xl font-bold text-gray-900">
                            Alur{' '}
                            <span className="text-gradient">Pendaftaran</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Offline */}
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                                    <svg
                                        className="h-6 w-6 text-primary-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-heading text-lg font-bold text-gray-900">
                                    Pendaftaran Offline
                                </h3>
                            </div>
                            <ol className="space-y-3">
                                {[
                                    'Datang ke sekolah MI Dar Al Tauhid',
                                    'Isi formulir pendaftaran',
                                    'Bayar biaya pendaftaran',
                                    'Ikuti observasi/tes',
                                ].map((step, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                                            {idx + 1}
                                        </span>
                                        <span className="text-sm text-gray-600">
                                            {step}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Online */}
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="bg-accent-100 flex h-12 w-12 items-center justify-center rounded-xl">
                                    <svg
                                        className="text-accent-600 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-heading text-lg font-bold text-gray-900">
                                    Pendaftaran Online
                                </h3>
                            </div>
                            <ol className="space-y-3">
                                {[
                                    'Buka link pendaftaran online',
                                    'Isi formulir pendaftaran digital',
                                    'Bayar biaya pendaftaran (transfer)',
                                    'Ikuti observasi/tes sesuai jadwal',
                                ].map((step, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="bg-accent-600 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                                            {idx + 1}
                                        </span>
                                        <span className="text-sm text-gray-600">
                                            {step}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* CTA */}
                    {/* <div className="mt-10 text-center">
                        <a
                            href="https://mis.daraltauhid.com/ppdb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl"
                        >
                            Daftar Online Sekarang
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div> */}
                </div>
            </section>
        </MisdtLayout>
    );
}
