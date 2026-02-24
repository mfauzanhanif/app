import { useState } from 'react';
import { Link } from '@inertiajs/react';
import type { SantriData } from '@/psb/components/registration/Step1Santri';
import type { ParentsData } from '@/psb/components/registration/Step2Parents';
import type { SchoolData } from '@/psb/components/registration/Step3School';

interface SuccessProps {
    data: SantriData & ParentsData & SchoolData;
    registrationNumber?: string;
}

export default function Success({ data, registrationNumber }: SuccessProps) {
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const regNumber = registrationNumber || 'PSB-XXXXX';

    const handleCopy = () => {
        navigator.clipboard.writeText('060101000494304');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="overflow-hidden rounded-xl border-t-4 border-emerald-600 bg-white shadow-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-center text-white md:p-8">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <svg
                        className="h-10 w-10"
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
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                    Terima Kasih Telah Mendaftar
                </h2>
                <p className="text-white/90">
                    di Pondok Pesantren Dar Al Tauhid
                </p>
            </div>

            <div className="p-6 md:p-8">
                {/* Registration Number */}
                <div className="mb-6 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-6 text-center">
                    <p className="mb-1 text-sm text-emerald-700">
                        Nomor Pendaftaran Anda
                    </p>
                    <p className="mb-2 text-4xl font-bold tracking-wider text-emerald-700 md:text-5xl">
                        {regNumber}
                    </p>
                    <p className="text-sm text-gray-600">
                        Simpan nomor ini untuk mengecek status pendaftaran
                    </p>
                </div>

                {/* Payment Info */}
                <div className="mx-auto mb-6 max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                    <div className="relative overflow-hidden bg-blue-900 p-6 text-center">
                        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-blue-800 opacity-50" />
                        <h2 className="relative z-10 text-xl font-bold text-white">
                            Informasi Pembayaran
                        </h2>
                        <p className="relative z-10 mt-1 text-sm text-blue-100">
                            Silakan transfer ke rekening di bawah ini
                        </p>
                    </div>

                    <div className="space-y-6 p-6">
                        {/* Card */}
                        <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-lg">
                            <div className="mb-8 flex items-start justify-between">
                                <div className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">
                                    <span className="text-sm font-bold tracking-wider">
                                        BANK BRI
                                    </span>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-1 block text-xs tracking-wider text-blue-100 uppercase">
                                    Nomor Rekening
                                </label>
                                <span className="font-mono text-2xl font-bold tracking-tight drop-shadow-sm md:text-3xl">
                                    060101000494304
                                </span>
                            </div>
                            <div>
                                <label className="mb-1 block text-xs tracking-wider text-blue-100 uppercase">
                                    Atas Nama
                                </label>
                                <p className="text-lg font-medium">
                                    YAYASAN DAR AL TAUHID
                                </p>
                            </div>
                        </div>

                        {/* Copy */}
                        <button
                            onClick={handleCopy}
                            className={`flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-4 font-semibold shadow-sm transition active:scale-95 ${copied ? 'border-green-200 bg-green-50 text-green-700' : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700'}`}
                        >
                            {copied ? (
                                <svg
                                    className="h-5 w-5 animate-bounce"
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
                            ) : (
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                    />
                                </svg>
                            )}
                            {copied
                                ? 'Berhasil Disalin!'
                                : 'Salin Nomor Rekening'}
                        </button>

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/6285864737811?text=Assalamualaikum,%20saya%20ingin%20konfirmasi%20pembayaran%20dengan%20Nomor%20Pendaftaran:%20${regNumber}%20atas%20nama%20${data.name}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-4 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-600 active:scale-95"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <div className="flex flex-col items-start leading-tight">
                                <span className="text-xs font-medium opacity-90">
                                    Konfirmasi Pembayaran
                                </span>
                                <span className="text-base font-bold">
                                    0858-6473-7811
                                </span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Quick Info */}
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-gray-50 p-4">
                        <span className="block text-xs tracking-wide text-gray-500 uppercase">
                            Nama Santri
                        </span>
                        <span className="block text-lg font-bold text-gray-900">
                            {data.name || '-'}
                        </span>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                        <span className="block text-xs tracking-wide text-gray-500 uppercase">
                            NIK
                        </span>
                        <span className="block text-lg font-bold text-gray-900">
                            {data.nik || '-'}
                        </span>
                    </div>
                </div>

                {/* Accordion */}
                <div className="mb-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 transition hover:bg-gray-200"
                    >
                        <span className="font-semibold text-gray-800">
                            Lihat Detail Data Pendaftaran
                        </span>
                        <svg
                            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="mt-4 space-y-4 text-sm">
                            <div className="rounded-lg border border-green-100 bg-green-50 p-4">
                                <h4 className="mb-3 font-bold text-emerald-700">
                                    Data Santri
                                </h4>
                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    <p>
                                        <span className="text-gray-500">
                                            Nama:
                                        </span>{' '}
                                        <strong>{data.name}</strong>
                                    </p>
                                    <p>
                                        <span className="text-gray-500">
                                            NIK:
                                        </span>{' '}
                                        <strong>{data.nik}</strong>
                                    </p>
                                    <p>
                                        <span className="text-gray-500">
                                            NISN:
                                        </span>{' '}
                                        <strong>{data.nisn || '-'}</strong>
                                    </p>
                                    <p>
                                        <span className="text-gray-500">
                                            TTL:
                                        </span>{' '}
                                        <strong>
                                            {data.pob}, {data.dob}
                                        </strong>
                                    </p>
                                    <p>
                                        <span className="text-gray-500">
                                            Sekolah Asal:
                                        </span>{' '}
                                        <strong>
                                            {data.previous_school || '-'}
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Action */}
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700"
                    >
                        Kembali ke Halaman Utama
                    </Link>
                </div>
            </div>
        </div>
    );
}
