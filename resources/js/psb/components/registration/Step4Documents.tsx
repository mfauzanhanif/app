export interface DocumentsData {
    kk: File | null;
    akta_lahir: File | null;
    ktp_ortu: File | null;
    ijazah: File | null;
    foto: File | null;
    skl: File | null;
    kip: File | null;
}

interface Step4DocumentsProps {
    data: DocumentsData;
    setData: (field: string, value: File | null) => void;
    errors?: Record<string, string>;
}

const DOCUMENTS = [
    {
        key: 'kk',
        label: 'Kartu Keluarga (KK)',
        required: true,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxLabel: '5MB',
    },
    {
        key: 'akta_lahir',
        label: 'Akta Kelahiran',
        required: true,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxLabel: '5MB',
    },
    {
        key: 'ktp_ortu',
        label: 'KTP Orang Tua / Wali',
        required: true,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxLabel: '5MB',
    },
    {
        key: 'foto',
        label: 'Pas Foto 3x4 (Berwarna)',
        required: true,
        accept: '.jpg,.jpeg,.png',
        maxLabel: '2MB',
    },
    {
        key: 'ijazah',
        label: 'Ijazah / Surat Keterangan Lulus',
        required: false,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxLabel: '5MB',
    },
    {
        key: 'skl',
        label: 'Surat Keterangan Lulus',
        required: false,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxLabel: '5MB',
    },
    {
        key: 'kip',
        label: 'KIP / KIS (Jika ada)',
        required: false,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxLabel: '5MB',
    },
] as const;

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
            <h3 className="mb-2 border-b border-gray-100 pb-2 text-lg font-bold text-gray-800 md:text-xl">
                Upload Dokumen
            </h3>
            <p className="mb-6 text-sm text-gray-500">
                Silahkan unggah dokumen persyaratan dalam format PDF/JPG/PNG.
                Dokumen bertanda (*) wajib diunggah.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {DOCUMENTS.map((doc) => {
                    const fileValue = data[doc.key as keyof DocumentsData];
                    const errorKey = `documents.${doc.key}`;

                    return (
                        <div
                            key={doc.key}
                            className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                        >
                            <label
                                htmlFor={doc.key}
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                {doc.label}{' '}
                                {doc.required && (
                                    <span className="text-red-500">*</span>
                                )}
                            </label>
                            <input
                                id={doc.key}
                                name={doc.key}
                                type="file"
                                onChange={handleFileChange}
                                accept={doc.accept}
                                className="w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-emerald-700 hover:file:bg-emerald-100"
                            />
                            <p
                                className={`mt-2 text-xs ${errors[errorKey] ? 'text-red-500' : 'text-gray-500'}`}
                            >
                                {errors[errorKey] ||
                                    `Format: ${doc.accept.replace(/\./g, '').toUpperCase()}. Maks ${doc.maxLabel}`}
                            </p>
                            {fileValue && (
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
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {fileValue.name}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
