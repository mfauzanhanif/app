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
            <h3 className="mb-2 border-b border-gray-100 pb-2 text-lg font-bold text-gray-800 md:text-xl">
                Review Data Pendaftaran
            </h3>
            <p className="mb-6 text-sm text-gray-500">
                Pastikan semua data yang Anda masukkan sudah benar sebelum
                mengirimkan pendaftaran.
            </p>

            <div className="space-y-6 text-sm">
                {/* Data Santri */}
                <div className="rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm">
                    <h4 className="mb-3 font-bold text-emerald-700">
                        Data Santri
                    </h4>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                        <ReviewItem label="Nama Lengkap" value={data.name} />
                        <ReviewItem label="NIK" value={data.nik} />
                        <ReviewItem label="NISN" value={data.nisn} />
                        <ReviewItem
                            label="Tempat, Tanggal Lahir"
                            value={`${data.pob || '-'}, ${data.dob || '-'}`}
                        />
                        <ReviewItem
                            label="Jenis Kelamin"
                            value={
                                data.gender === 'l'
                                    ? 'Laki-laki'
                                    : data.gender === 'p'
                                      ? 'Perempuan'
                                      : '-'
                            }
                        />
                        <ReviewItem
                            cls="sm:col-span-2"
                            label="Alamat"
                            value={data.address}
                        />
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
                                <ReviewRow
                                    label="Nama"
                                    value={data.father_name}
                                />
                                <ReviewRow
                                    label="Pekerjaan"
                                    value={data.father_job}
                                />
                                <ReviewRow
                                    label="No. HP"
                                    value={data.father_phone}
                                />
                            </div>
                        </div>
                        <div>
                            <p className="mb-2 border-b border-blue-200 pb-1 font-semibold text-gray-900">
                                Ibu Kandung
                            </p>
                            <div className="space-y-1">
                                <ReviewRow
                                    label="Nama"
                                    value={data.mother_name}
                                />
                                <ReviewRow
                                    label="Pekerjaan"
                                    value={data.mother_job}
                                />
                                <ReviewRow
                                    label="No. HP"
                                    value={data.mother_phone}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Pendidikan */}
                <div className="rounded-lg border border-purple-100 bg-purple-50 p-4 shadow-sm">
                    <h4 className="mb-3 font-bold text-purple-700">
                        Data Pendidikan
                    </h4>
                    <ReviewItem
                        label="Sekolah Asal"
                        value={data.previous_school}
                    />
                </div>

                {/* Dokumen */}
                <div className="rounded-lg border border-orange-100 bg-orange-50 p-4 shadow-sm">
                    <h4 className="mb-3 font-bold text-orange-700">
                        Dokumen Terlampir
                    </h4>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        <DocStatus label="Kartu Keluarga" file={data.kk} />
                        <DocStatus
                            label="Akta Kelahiran"
                            file={data.akta_lahir}
                        />
                        <DocStatus label="KTP Ortu" file={data.ktp_ortu} />
                        <DocStatus label="Pas Foto" file={data.foto} />
                        <DocStatus label="Ijazah" file={data.ijazah} optional />
                        <DocStatus label="KIP/KIS" file={data.kip} optional />
                    </div>
                </div>

                {/* Declaration */}
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                    <div className="flex">
                        <svg
                            className="mr-3 h-5 w-5 shrink-0 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div>
                            <h3 className="text-sm font-medium text-yellow-800">
                                Deklarasi
                            </h3>
                            <p className="mt-1 text-sm text-yellow-700">
                                Dengan menekan tombol "Kirim Pendaftaran", saya
                                menyatakan bahwa seluruh data yang diisikan
                                adalah benar dan dapat dipertanggungjawabkan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ReviewItem({
    label,
    value,
    cls,
}: {
    label: string;
    value?: string;
    cls?: string;
}) {
    return (
        <p className={cls}>
            <span className="block text-xs tracking-wider text-gray-500 uppercase">
                {label}
            </span>
            <strong className="text-gray-900">{value || '-'}</strong>
        </p>
    );
}

function ReviewRow({ label, value }: { label: string; value?: string }) {
    return (
        <p>
            <span className="inline-block w-20 text-gray-500">{label}</span>
            <strong>{value || '-'}</strong>
        </p>
    );
}

function DocStatus({
    label,
    file,
    optional,
}: {
    label: string;
    file: File | null;
    optional?: boolean;
}) {
    return (
        <div className="flex items-center gap-2">
            {file ? (
                <span className="text-green-500">✓</span>
            ) : optional ? (
                <span className="text-yellow-500">–</span>
            ) : (
                <span className="text-red-500">✗</span>
            )}
            <span className="text-sm">{label}</span>
        </div>
    );
}
