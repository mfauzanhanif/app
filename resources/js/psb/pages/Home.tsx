import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import PsbLayout from '@/psb/layouts/psb-layout';

// Types for pricing
interface FeeItem {
    id: number;
    name: string;
    amount: number;
    institution?: { type: string };
}

interface HomeProps {
    registrationFees?: FeeItem[];
    monthlyFees?: FeeItem[];
}

// Subcomponents
function HeroSection() {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-dat-primary relative overflow-hidden">
                {/* Background Pattern */}
                <div className='bg-[url(&apos;data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] absolute inset-0 opacity-30'></div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        {/* Text Content */}
                        <div className="animate-fade-in order-2 text-center lg:order-1 lg:text-left">
                            {/* Badge */}
                            <span className="mb-8 inline-block transform cursor-default rounded-full bg-yellow-500 px-8 py-3 text-xl font-bold tracking-wider text-yellow-50 shadow-md transition hover:scale-105 md:text-2xl">
                                Telah Dibuka!
                            </span>

                            {/* Main Heading */}
                            <h2 className="font-serif text-2xl text-[2rem] leading-tight font-bold text-white/90 sm:text-3xl md:text-4xl md:text-[2.5rem] lg:text-[3rem]">
                                Penerimaan Santri Baru
                            </h2>

                            {/* Sub Heading */}
                            <h2 className="mt-4 font-serif text-2xl text-[2rem] leading-tight font-bold text-white/90 sm:text-3xl md:text-4xl md:text-[2.5rem] lg:text-[3rem]">
                                Pondok Pesantren Dar Al Tauhid
                            </h2>

                            {/* Academic Year */}
                            <p className="mt-6 text-xl font-light text-green-200 sm:text-2xl md:text-3xl">
                                Tahun Ajaran 2025-2026
                            </p>

                            {/* Buttons */}
                            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                                <Link
                                    href="/psb/registration"
                                    className="text-dat-primary inline-flex transform items-center justify-center rounded-lg border-2 border-white bg-white px-8 py-4 text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
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
                                            strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    Daftar Sekarang
                                </Link>
                                <Link
                                    href="/psb/cek-status"
                                    className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
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
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Cek Status
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="animate-fade-in-delay order-1 flex justify-center lg:order-2 lg:justify-end">
                            <div className="group relative">
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-300 to-yellow-300 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
                                <div className="absolute -inset-4 rounded-full bg-white/10 blur-2xl"></div>
                                {/* Change asset path below if FOTOSANTRI.png is stored elsewhere, using standard public path */}
                                <img
                                    src="/FOTOSANTRI.png"
                                    alt="Santri Dar Al Tauhid"
                                    className="relative h-auto w-64 transform object-contain drop-shadow-2xl transition duration-500 hover:scale-[1.02] sm:w-72 md:w-80 lg:w-96"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Decoration */}
                <div className="absolute right-0 bottom-0 left-0 z-10">
                    <svg
                        className="h-12 w-full md:h-16"
                        viewBox="0 0 1440 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 22L60 27C120 32 240 42 360 47C480 52 600 52 720 44C840 36 960 22 1080 17C1200 12 1320 17 1380 19L1440 22V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"
                            fill="#fefce8"
                        />
                    </svg>
                </div>
            </div>

            {/* Info Banner */}
            <section className="relative z-20 border-b border-yellow-200 bg-yellow-50">
                <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-start text-center md:items-center md:text-left">
                            <div className="mr-4 hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 md:flex">
                                <svg
                                    className="h-6 w-6 text-yellow-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-yellow-800">
                                    Melayani Pendaftaran Offline di Kantor
                                    Pondok Pesantren
                                </p>
                                <p className="text-sm text-yellow-700">
                                    Jam Operasional: 08.00 s.d. 15.00 WIB
                                    (Setiap Hari)
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://drive.google.com/drive/folders/1ImBD_zIfcYtWkI-WCfUt5wl3bl6xo0QR?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex flex-shrink-0 items-center rounded-lg bg-yellow-500 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-200"
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
                                    strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            Download Brosur
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProgramSection() {
    return (
        <section className="scroll-mt-20 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="animate-on-scroll visible mb-12 text-center">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        Program Unggulan
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                        Program pendidikan berkualitas untuk membentuk generasi
                        yang berakhlak mulia
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-12">
                    {/* Program 1 */}
                    <div className="group animate-on-scroll visible rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center shadow-xl transition-all duration-300 hover:shadow-2xl md:p-10">
                        <div className="from-dat-primary to-dat-secondary mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <svg
                                className="h-10 w-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                            Kajian Kitab Kuning
                        </h3>
                        <p className="leading-relaxed text-gray-600">
                            Mempelajari kitab-kitab klasik Islam (turats) dengan
                            metode sorogan dan bandongan untuk memahami ilmu
                            agama secara mendalam dari sumber aslinya.
                        </p>
                    </div>

                    {/* Program 2 */}
                    <div className="group animate-on-scroll visible rounded-3xl border border-yellow-100 bg-gradient-to-br from-yellow-50 to-amber-50 p-8 text-center shadow-xl transition-all duration-300 hover:shadow-2xl md:p-10">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <svg
                                className="text-dat-primary h-10 w-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                            Tahfidz Al Qur'an
                        </h3>
                        <p className="leading-relaxed text-gray-600">
                            Program menghafal Al-Qur'an dengan metode terbukti
                            efektif, dibimbing oleh ustadz/ustadzah
                            berpengalaman untuk mencetak generasi penghafal
                            Al-Qur'an.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AlurSection() {
    return (
        <section id="alur" className="scroll-mt-20 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="animate-on-scroll visible mb-12 text-center">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        Alur Pendaftaran
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                        Hanya 4 langkah mudah untuk bergabung bersama kami
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block">
                    <div className="relative">
                        <div className="absolute top-16 right-0 left-0 h-3 rounded-full bg-gradient-to-r from-green-600 via-green-400 to-green-600 shadow-md"></div>
                        <div className="relative grid grid-cols-4 gap-4">
                            {/* Step 1 */}
                            <div className="animate-on-scroll visible flex flex-col items-center">
                                <div className="from-dat-primary to-dat-secondary z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                    <svg
                                        className="h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="text-dat-text mb-2 text-lg font-bold">
                                        Isi Formulir
                                    </h3>
                                    <p className="px-2 text-sm text-gray-500">
                                        Isi biodata santri, orang tua &
                                        pendidikan secara online.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="animate-on-scroll visible flex flex-col items-center">
                                <div className="from-dat-primary to-dat-secondary z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                    <svg
                                        className="h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="text-dat-text mb-2 text-lg font-bold">
                                        Upload Dokumen
                                    </h3>
                                    <p className="px-2 text-sm text-gray-500">
                                        Unggah KK, Akta, Ijazah dalam format
                                        digital.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="animate-on-scroll visible flex flex-col items-center">
                                <div className="from-dat-primary to-dat-secondary z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                    <svg
                                        className="h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="text-dat-text mb-2 text-lg font-bold">
                                        Cetak Pendaftaran
                                    </h3>
                                    <p className="px-2 text-sm text-gray-500">
                                        Download bukti pendaftaran setelah data
                                        terverifikasi.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="animate-on-scroll visible flex flex-col items-center">
                                <div className="from-dat-primary to-dat-secondary z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                    <svg
                                        className="h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="text-dat-text mb-2 text-lg font-bold">
                                        Pembayaran & Cek Status
                                    </h3>
                                    <p className="px-2 text-sm text-gray-500">
                                        Lunasi pembayaran dan Cek Status
                                        Pembayaran.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden">
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 left-8 w-2 rounded-full bg-gradient-to-b from-green-600 via-green-400 to-green-600 shadow-md"></div>
                        <div className="space-y-8">
                            {/* Steps for Mobile - mapping same items visually */}
                            <div className="animate-on-scroll visible flex items-start">
                                <div className="from-dat-primary to-dat-secondary z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-6 pt-2">
                                    <h3 className="text-dat-text text-lg font-bold">
                                        Isi Formulir
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Isi biodata santri secara online.
                                    </p>
                                </div>
                            </div>
                            <div className="animate-on-scroll visible flex items-start">
                                <div className="from-dat-primary to-dat-secondary z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-6 pt-2">
                                    <h3 className="text-dat-text text-lg font-bold">
                                        Upload Dokumen
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Unggah KK, Akta, dll.
                                    </p>
                                </div>
                            </div>
                            <div className="animate-on-scroll visible flex items-start">
                                <div className="from-dat-primary to-dat-secondary z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-6 pt-2">
                                    <h3 className="text-dat-text text-lg font-bold">
                                        Cetak Pendaftaran
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Download bukti pendaftaran.
                                    </p>
                                </div>
                            </div>
                            <div className="animate-on-scroll visible flex items-start">
                                <div className="from-dat-primary to-dat-secondary z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-6 pt-2">
                                    <h3 className="text-dat-text text-lg font-bold">
                                        Pembayaran
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Lunasi pembayaran dan cek status.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PersyaratanSection() {
    const requirements = [
        'Kartu Keluarga (KK)',
        'Akta Kelahiran',
        'KTP Orang Tua / Wali',
        'Ijazah / Surat Keterangan Lulus',
        'Kartu NISN (Jika ada)',
        'KIP / KIS (Jika ada)',
    ];

    return (
        <section
            id="persyaratan"
            className="scroll-mt-20 bg-gray-50 py-16 md:py-20"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="animate-on-scroll visible mb-12 text-center">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        Berkas Persyaratan
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                        Pastikan dokumen berikut sudah siap dalam format digital
                        (JPG/PDF)
                    </p>
                </div>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {requirements.map((req, i) => (
                        <div
                            key={i}
                            className="animate-on-scroll visible flex items-center rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                                <svg
                                    className="text-dat-primary h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <span className="text-dat-text font-medium">
                                {req}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingSection({
    registrationFees = [],
    monthlyFees = [],
}: HomeProps) {
    const [pricingType, setPricingType] = useState<'pendaftaran' | 'syahriah'>(
        'pendaftaran',
    );

    // Mocks for presentation purposes based on the logic in blade file
    const package1Reg = 3500000;
    const package1Monthly = 400000;
    const package2Reg = 4200000;
    const package2Monthly = 500000;
    const package3Reg = 4500000;
    const package3Monthly = 550000;

    const dummyFees = [
        { name: 'Pangkal', amount: 1500000 },
        { name: 'Seragam', amount: 1000000 },
        { name: 'Buku', amount: 1000000 },
    ];

    return (
        <section id="biaya" className="scroll-mt-20 bg-gray-50/50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="animate-on-scroll visible mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Rincian Biaya
                    </h2>
                </div>

                <div className="animate-on-scroll visible mb-12 flex justify-center">
                    <div className="relative inline-flex rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
                        <button
                            onClick={() => setPricingType('pendaftaran')}
                            className={`relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-all duration-300 ${pricingType === 'pendaftaran' ? 'bg-dat-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Pendaftaran
                        </button>
                        <button
                            onClick={() => setPricingType('syahriah')}
                            className={`relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-all duration-300 ${pricingType === 'syahriah' ? 'bg-dat-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Syahriah
                        </button>
                    </div>
                </div>

                <div className="animate-on-scroll visible grid gap-6 md:grid-cols-3 lg:gap-8">
                    {/* Card 1 */}
                    <div className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl md:p-10">
                        <div className="from-dat-primary/60 to-dat-secondary/60 absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r"></div>
                        <h3 className="mb-6 text-xl font-bold text-gray-900">
                            Pondok & Madrasah
                        </h3>
                        <div className="mb-8">
                            <span className="mb-1 block text-sm font-medium text-gray-500">
                                Total Biaya
                            </span>
                            <div className="text-dat-primary text-4xl font-extrabold">
                                Rp{' '}
                                {pricingType === 'pendaftaran'
                                    ? package1Reg.toLocaleString('id-ID')
                                    : package1Monthly.toLocaleString('id-ID')}
                            </div>
                        </div>
                        <div className="w-full space-y-4 text-left">
                            {dummyFees.map((fee, i) => (
                                <div
                                    key={i}
                                    className="flex items-end justify-between py-1 text-sm"
                                >
                                    <span className="z-10 bg-white pr-2 font-medium text-gray-700">
                                        {fee.name}
                                    </span>
                                    <div className="mx-1 mb-1 flex-grow border-b border-dashed border-gray-200"></div>
                                    <span className="z-10 bg-white pl-2 font-bold text-gray-900">
                                        Rp {fee.amount.toLocaleString('id-ID')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl md:p-10">
                        <div className="from-dat-primary/80 to-dat-secondary/80 absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r"></div>
                        <h3 className="mb-6 text-xl font-bold text-gray-900">
                            Pondok + Madrasah + SMP
                        </h3>
                        <div className="mb-8">
                            <span className="mb-1 block text-sm font-medium text-gray-500">
                                Total Biaya
                            </span>
                            <div className="text-dat-primary text-4xl font-extrabold">
                                Rp{' '}
                                {pricingType === 'pendaftaran'
                                    ? package2Reg.toLocaleString('id-ID')
                                    : package2Monthly.toLocaleString('id-ID')}
                            </div>
                        </div>
                        <div className="w-full space-y-4 text-left">
                            {dummyFees.map((fee, i) => (
                                <div
                                    key={i}
                                    className="flex items-end justify-between py-1 text-sm"
                                >
                                    <span className="z-10 bg-white pr-2 font-medium text-gray-700">
                                        {fee.name}
                                    </span>
                                    <div className="mx-1 mb-1 flex-grow border-b border-dashed border-gray-200"></div>
                                    <span className="z-10 bg-white pl-2 font-bold text-gray-900">
                                        Rp {fee.amount.toLocaleString('id-ID')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl md:p-10">
                        <div className="from-dat-primary/60 to-dat-secondary/60 absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r"></div>
                        <h3 className="mb-6 text-xl font-bold text-gray-900">
                            Pondok + Madrasah + MA
                        </h3>
                        <div className="mb-8">
                            <span className="mb-1 block text-sm font-medium text-gray-500">
                                Total Biaya
                            </span>
                            <div className="text-dat-primary text-4xl font-extrabold">
                                Rp{' '}
                                {pricingType === 'pendaftaran'
                                    ? package3Reg.toLocaleString('id-ID')
                                    : package3Monthly.toLocaleString('id-ID')}
                            </div>
                        </div>
                        <div className="w-full space-y-4 text-left">
                            {dummyFees.map((fee, i) => (
                                <div
                                    key={i}
                                    className="flex items-end justify-between py-1 text-sm"
                                >
                                    <span className="z-10 bg-white pr-2 font-medium text-gray-700">
                                        {fee.name}
                                    </span>
                                    <div className="mx-1 mb-1 flex-grow border-b border-dashed border-gray-200"></div>
                                    <span className="z-10 bg-white pl-2 font-bold text-gray-900">
                                        Rp {fee.amount.toLocaleString('id-ID')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CtaSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 py-16 md:py-20">
            <div className='bg-[url(&apos;data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] absolute inset-0 opacity-20'></div>

            <div className="animate-on-scroll visible relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                    Tunggu Apa Lagi?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
                    Daftarkan putra-putri Anda sekarang!
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/psb/registration"
                        className="border-dat-primary bg-dat-primary hover:bg-dat-secondary inline-flex transform items-center justify-center rounded-lg border-2 px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:-translate-y-1"
                    >
                        <svg
                            className="mr-2 h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                        </svg>
                        Daftar Sekarang
                    </Link>
                    <a
                        href="https://wa.me/6285624568440"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
                    >
                        <svg
                            className="mr-2 h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Tanya via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function Home(props: HomeProps) {
    return (
        <PsbLayout title="Penerimaan Santri Baru - Dar Al Tauhid">
            <HeroSection />
            <ProgramSection />
            <AlurSection />
            <PersyaratanSection />
            <PricingSection
                registrationFees={props.registrationFees}
                monthlyFees={props.monthlyFees}
            />
            <CtaSection />
        </PsbLayout>
    );
}
