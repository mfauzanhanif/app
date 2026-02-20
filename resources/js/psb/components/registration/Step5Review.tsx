import React from 'react';
import type { SantriData } from '@/psb/components/registration/Step1Santri';
import type { ParentsData } from '@/psb/components/registration/Step2Parents';
import type { SchoolData } from '@/psb/components/registration/Step3School';
import type { DocumentsData } from '@/psb/components/registration/Step4Documents';

interface Step5ReviewProps {
    data: SantriData & ParentsData & SchoolData & DocumentsData;
}

export default function Step5Review({ data }: Step5ReviewProps) {
    return (
        <div>
            <h3 className="text-dat-text mb-2 border-b border-gray-100 pb-2 text-lg font-bold md:text-xl">
                Review Data Pendaftaran
            </h3>
            <p className="mb-6 text-sm text-gray-500">
                Pastikan semua data yang Anda masukkan sudah benar sebelum
                mengirimkan pendaftaran.
            </p>

            <div className="space-y-6 text-sm">
                {/* Data Santri */}
                <div className="rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm">
                    <h4 className="text-dat-primary mb-3 font-bold">
                        Data Santri
                    </h4>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                Nama Lengkap
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.full_name || '-'}
                            </strong>
                        </p>
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                NIK
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.nik || '-'}
                            </strong>
                        </p>
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                NISN
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.nisn || '-'}
                            </strong>
                        </p>
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                Tempat, Tanggal Lahir
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.place_of_birth || '-'},{' '}
                                {data.date_of_birth || '-'}
                            </strong>
                        </p>
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                Jenis Kelamin
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.gender === 'male'
                                    ? 'Laki-laki'
                                    : data.gender === 'female'
                                      ? 'Perempuan'
                                      : '-'}
                            </strong>
                        </p>
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                Anak Ke
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.child_number || '-'} dari{' '}
                                {data.total_siblings || '-'}
                            </strong>
                        </p>
                    </div>
                </div>

                {/* Data Orang Tua */}
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 shadow-sm">
                    <h4 className="mb-3 font-bold text-blue-700">
                        Data Orang Tua
                    </h4>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div>
                            <p className="mb-2 border-b border-blue-200 pb-1 font-semibold text-gray-900">
                                Ayah Kandung
                            </p>
                            <div className="space-y-1">
                                <p>
                                    <span className="inline-block w-20 text-gray-500">
                                        Nama
                                    </span>{' '}
                                    <strong>{data.father_name || '-'}</strong>
                                </p>
                                <p>
                                    <span className="inline-block w-20 text-gray-500">
                                        Pekerjaan
                                    </span>{' '}
                                    <strong>{data.father_job || '-'}</strong>
                                </p>
                                <p>
                                    <span className="inline-block w-20 text-gray-500">
                                        No. HP
                                    </span>{' '}
                                    <strong>{data.father_phone || '-'}</strong>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-2 border-b border-blue-200 pb-1 font-semibold text-gray-900">
                                Ibu Kandung
                            </p>
                            <div className="space-y-1">
                                <p>
                                    <span className="inline-block w-20 text-gray-500">
                                        Nama
                                    </span>{' '}
                                    <strong>{data.mother_name || '-'}</strong>
                                </p>
                                <p>
                                    <span className="inline-block w-20 text-gray-500">
                                        Pekerjaan
                                    </span>{' '}
                                    <strong>{data.mother_job || '-'}</strong>
                                </p>
                                <p>
                                    <span className="inline-block w-20 text-gray-500">
                                        No. HP
                                    </span>{' '}
                                    <strong>{data.mother_phone || '-'}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Sekolah */}
                <div className="rounded-lg border border-purple-100 bg-purple-50 p-4 shadow-sm">
                    <h4 className="mb-3 font-bold text-purple-700">
                        Data Pendidikan
                    </h4>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                Sekolah Asal
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.previous_school_name || '-'}
                            </strong>
                        </p>
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                Jenjang Asal
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.previous_school_level || '-'}
                            </strong>
                        </p>
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                Sekolah Tujuan
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.target_school || '-'}
                            </strong>
                        </p>
                        <p>
                            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                                Kelas
                            </span>{' '}
                            <strong className="text-gray-900">
                                {data.target_class
                                    ? `Kelas ${data.target_class}`
                                    : '-'}
                            </strong>
                        </p>
                    </div>
                </div>

                {/* Dokumen */}
                <div className="rounded-lg border border-orange-100 bg-orange-50 p-4 shadow-sm">
                    <h4 className="mb-3 font-bold text-orange-700">
                        Dokumen Terlampir
                    </h4>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        <div className="flex items-center gap-2">
                            {data.kartu_keluarga ? (
                                <span className="text-green-500">✓</span>
                            ) : (
                                <span className="text-red-500">✗</span>
                            )}
                            <span className="text-sm">Kartu Keluarga</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {data.akta_kelahiran ? (
                                <span className="text-green-500">✓</span>
                            ) : (
                                <span className="text-red-500">✗</span>
                            )}
                            <span className="text-sm">Akta Kelahiran</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {data.ktp_ortu ? (
                                <span className="text-green-500">✓</span>
                            ) : (
                                <span className="text-red-500">✗</span>
                            )}
                            <span className="text-sm">KTP Ortu</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {data.pas_foto ? (
                                <span className="text-green-500">✓</span>
                            ) : (
                                <span className="text-red-500">✗</span>
                            )}
                            <span className="text-sm">Pas Foto</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {data.ijazah ? (
                                <span className="text-green-500">✓</span>
                            ) : (
                                <span className="text-yellow-500">-</span>
                            )}
                            <span className="border-b border-dashed border-gray-400 text-sm">
                                Ijazah
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg
                                className="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">
                                Deklarasi
                            </h3>
                            <div className="mt-2 text-sm text-yellow-700">
                                <p>
                                    Dengan menekan tombol "Kirim Pendaftaran",
                                    saya menyatakan bahwa seluruh data yang
                                    diisikan adalah benar dan dapat
                                    dipertanggungjawabkan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
