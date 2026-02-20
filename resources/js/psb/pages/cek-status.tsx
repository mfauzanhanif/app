import { useState } from 'react';
import { Head } from '@inertiajs/react';
import PsbLayout from '@/psb/layouts/psb-layout';
import { Button, TextInput, Spinner, Card, Badge } from 'flowbite-react';

interface StudentData {
    registration_number: string;
    full_name: string;
    status: 'draft' | 'verified' | 'accepted' | 'rejected';
}

export default function CekStatus() {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [studentData, setStudentData] = useState<StudentData | null>(null);
    const [errorMsg, setErrorMsg] = useState('');

    const handleCheck = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');

        if (!registrationNumber) {
            setErrorMsg('Nomor pendaftaran tidak boleh kosong.');
            return;
        }

        setIsLoading(true);

        // Dummy fetch implementation - replace with actual Inertia/Axios call
        setTimeout(() => {
            if (registrationNumber === '230001') {
                setStudentData({
                    registration_number: '230001',
                    full_name: 'Ahmad Santoso',
                    status: 'verified',
                });
            } else {
                setErrorMsg('Nomor pendaftaran tidak ditemukan.');
                setStudentData(null);
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleLogout = () => {
        setStudentData(null);
        setRegistrationNumber('');
    };

    const statusBadgeColors = {
        draft: 'gray',
        verified: 'warning',
        accepted: 'success',
        rejected: 'failure',
    };

    const statusLabels = {
        draft: 'Menunggu',
        verified: 'Terverifikasi',
        accepted: 'Diterima',
        rejected: 'Ditolak',
    };

    return (
        <PsbLayout title="Cek Status - PSB Dar Al Tauhid">
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
                {!studentData ? (
                    /* Check Status Form */
                    <Card className="border-dat-primary mx-auto max-w-md overflow-hidden border-t-4 !p-0">
                        <div className="from-dat-primary to-dat-secondary bg-gradient-to-r p-6 text-center">
                            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-white md:text-2xl">
                                Cek Status Santri
                            </h2>
                            <p className="mt-2 text-sm text-green-100 md:text-base">
                                Masukkan nomor untuk melihat status pendaftaran.
                            </p>
                        </div>

                        <div className="p-6 md:p-8">
                            <form onSubmit={handleCheck}>
                                <div className="mb-6">
                                    <label
                                        className="text-dat-text mb-2 block text-sm font-semibold"
                                        htmlFor="reg_number"
                                    >
                                        Nomor Pendaftaran
                                    </label>
                                    <TextInput
                                        id="reg_number"
                                        type="text"
                                        placeholder="contoh: 230001"
                                        value={registrationNumber}
                                        onChange={(e) =>
                                            setRegistrationNumber(
                                                e.target.value,
                                            )
                                        }
                                        className="focus:ring-dat-primary focus:border-dat-primary"
                                    />
                                    {/* You could add a helper text underneath if it errors out here */}
                                </div>

                                {errorMsg && (
                                    <div
                                        className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700"
                                        role="alert"
                                    >
                                        <span className="block sm:inline">
                                            {errorMsg}
                                        </span>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-dat-primary hover:bg-dat-secondary focus:ring-dat-primary w-full"
                                    size="lg"
                                >
                                    {isLoading ? (
                                        <>
                                            <Spinner
                                                size="sm"
                                                className="mr-2"
                                            />
                                            Memeriksa...
                                        </>
                                    ) : (
                                        'Cek Status'
                                    )}
                                </Button>
                            </form>
                        </div>
                    </Card>
                ) : (
                    /* Simple Dashboard / Status View */
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="border-dat-primary flex flex-col items-start justify-between gap-4 rounded-xl border-l-4 bg-white p-4 shadow-md sm:flex-row sm:items-center md:p-6">
                            <div className="flex items-center">
                                <div className="bg-dat-primary/10 mr-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full md:mr-4 md:h-14 md:w-14">
                                    <svg
                                        className="text-dat-primary h-6 w-6 md:h-7 md:w-7"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-dat-text truncate text-lg font-bold md:text-2xl">
                                        {studentData.full_name}
                                    </h2>
                                    <p className="truncate text-xs text-gray-500 md:text-sm">
                                        {studentData.registration_number}
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-between space-x-2 sm:w-auto sm:justify-end md:space-x-3">
                                <Badge
                                    color={
                                        statusBadgeColors[studentData.status]
                                    }
                                    size="sm"
                                    className="rounded-full border px-3 py-1.5"
                                >
                                    {statusLabels[studentData.status]}
                                </Badge>
                                <button
                                    onClick={handleLogout}
                                    className="p-2 text-gray-400 transition hover:text-red-500"
                                    title="Keluar"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Status Message Display */}
                        <Card className="border-0 bg-white shadow-sm">
                            <div className="p-4 text-center">
                                {studentData.status === 'verified' && (
                                    <>
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
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
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-gray-800">
                                            Pendaftaran Terverifikasi
                                        </h3>
                                        <p className="text-gray-600">
                                            Terima kasih, dokumen pendaftaran
                                            Anda telah berhasil diverifikasi
                                            oleh panitia.
                                        </p>
                                    </>
                                )}
                                {studentData.status === 'draft' && (
                                    <>
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
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
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-gray-800">
                                            Pendaftaran Dalam Proses Peninjauan
                                        </h3>
                                        <p className="text-gray-600">
                                            Dokumen pendaftaran Anda sedang
                                            dalam antrean untuk diverifikasi.
                                        </p>
                                    </>
                                )}
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </PsbLayout>
    );
}
