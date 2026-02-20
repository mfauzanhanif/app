import React from 'react';
import { FileInput, Label, Alert } from 'flowbite-react';

export interface DocumentsData {
    kartu_keluarga: File | null;
    akta_kelahiran: File | null;
    ktp_ortu: File | null;
    ijazah: File | null;
    kartu_nisn: File | null;
    kip_kis: File | null;
    pas_foto: File | null;
}

interface Step4DocumentsProps {
    data: DocumentsData;
    setData: (field: string, value: File | null) => void;
    errors?: Record<string, string>;
}

export default function Step4Documents({
    data,
    setData,
    errors = {},
}: Step4DocumentsProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData(e.target.name, file);
    };

    return (
        <div>
            <h3 className="text-dat-text mb-2 border-b border-gray-100 pb-2 text-lg font-bold md:text-xl">
                Upload Dokumen
            </h3>
            <p className="mb-6 text-sm text-gray-500">
                Silahkan unggah dokumen persyaratan dalam format PDF/JPG/PNG.
                Maksimal ukuran file 2MB per dokumen.
            </p>

            <Alert color="info" className="mb-6">
                <span>
                    <span className="font-medium">Penting!</span> Dokumen
                    bertanda (*) wajib diunggah untuk keperluan verifikasi.
                </span>
            </Alert>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {/* Kartu Keluarga */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-2 block">
                        <Label htmlFor="kartu_keluarga">
                            Kartu Keluarga (KK) *
                        </Label>
                    </div>
                    <FileInput
                        id="kartu_keluarga"
                        name="kartu_keluarga"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        color={errors.kartu_keluarga ? 'failure' : 'gray'}
                    />
                    <p
                        className={`mt-2 text-sm ${errors.kartu_keluarga ? 'text-red-500' : 'text-gray-500'}`}
                    >
                        {errors.kartu_keluarga ||
                            'Format: PDF/JPG/PNG. Maks 2MB'}
                    </p>
                    {data.kartu_keluarga && (
                        <p className="mt-2 flex items-center text-sm text-green-600">
                            <svg
                                className="mr-1 h-4 w-4"
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
                            File terpilih: {data.kartu_keluarga.name}
                        </p>
                    )}
                </div>

                {/* Akta Kelahiran */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-2 block">
                        <Label htmlFor="akta_kelahiran">Akta Kelahiran *</Label>
                    </div>
                    <FileInput
                        id="akta_kelahiran"
                        name="akta_kelahiran"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        color={errors.akta_kelahiran ? 'failure' : 'gray'}
                    />
                    <p
                        className={`mt-2 text-sm ${errors.akta_kelahiran ? 'text-red-500' : 'text-gray-500'}`}
                    >
                        {errors.akta_kelahiran ||
                            'Format: PDF/JPG/PNG. Maks 2MB'}
                    </p>
                    {data.akta_kelahiran && (
                        <p className="mt-2 flex items-center text-sm text-green-600">
                            <svg
                                className="mr-1 h-4 w-4"
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
                            File terpilih: {data.akta_kelahiran.name}
                        </p>
                    )}
                </div>

                {/* KTP Orang Tua */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-2 block">
                        <Label htmlFor="ktp_ortu">KTP Orang Tua / Wali *</Label>
                    </div>
                    <FileInput
                        id="ktp_ortu"
                        name="ktp_ortu"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        color={errors.ktp_ortu ? 'failure' : 'gray'}
                    />
                    <p
                        className={`mt-2 text-sm ${errors.ktp_ortu ? 'text-red-500' : 'text-gray-500'}`}
                    >
                        {errors.ktp_ortu ||
                            'Boleh KTP Ayah atau Ibu. Format: PDF/JPG/PNG. Maks 2MB'}
                    </p>
                    {data.ktp_ortu && (
                        <p className="mt-2 flex items-center text-sm text-green-600">
                            <svg
                                className="mr-1 h-4 w-4"
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
                            File terpilih: {data.ktp_ortu.name}
                        </p>
                    )}
                </div>

                {/* Ijazah / SKL */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-2 block">
                        <Label htmlFor="ijazah">
                            Ijazah / Surat Keterangan Lulus
                        </Label>
                    </div>
                    <FileInput
                        id="ijazah"
                        name="ijazah"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        color={errors.ijazah ? 'failure' : 'gray'}
                    />
                    <p
                        className={`mt-2 text-sm ${errors.ijazah ? 'text-red-500' : 'text-gray-500'}`}
                    >
                        {errors.ijazah ||
                            'Jika belum ada, boleh disusulkan. Format: PDF/JPG/PNG. Maks 2MB'}
                    </p>
                    {data.ijazah && (
                        <p className="mt-2 flex items-center text-sm text-green-600">
                            <svg
                                className="mr-1 h-4 w-4"
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
                            File terpilih: {data.ijazah.name}
                        </p>
                    )}
                </div>

                {/* Pas Foto */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 md:col-span-2">
                    <div className="mb-2 block">
                        <Label htmlFor="pas_foto">
                            Pas Foto 3x4 (Berwarna) *
                        </Label>
                    </div>
                    <FileInput
                        id="pas_foto"
                        name="pas_foto"
                        onChange={handleFileChange}
                        accept=".jpg,.jpeg,.png"
                        color={errors.pas_foto ? 'failure' : 'gray'}
                    />
                    <p
                        className={`mt-2 text-sm ${errors.pas_foto ? 'text-red-500' : 'text-gray-500'}`}
                    >
                        {errors.pas_foto ||
                            'Latar Biru/Merah. Format: JPG/PNG. Maks 2MB'}
                    </p>
                    {data.pas_foto && (
                        <p className="mt-2 flex items-center text-sm text-green-600">
                            <svg
                                className="mr-1 h-4 w-4"
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
                            File terpilih: {data.pas_foto.name}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
