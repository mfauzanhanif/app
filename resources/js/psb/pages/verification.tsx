import { Head } from '@inertiajs/react';

interface StudentData {
    full_name: string;
    registration_number: string;
}

interface TransactionData {
    id: number;
    transaction_date: string;
    amount: number;
    user: {
        name: string;
    } | null;
}

interface VerificationProps {
    valid: boolean;
    transaction?: TransactionData;
    student?: StudentData;
}

export default function Verification({
    valid,
    transaction,
    student,
}: VerificationProps) {
    const formattedDate = transaction?.transaction_date
        ? new Date(transaction.transaction_date).toLocaleDateString('id-ID', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
          })
        : '-';

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-5 font-sans">
            <Head>
                <title>Verifikasi Dokumen - PSB Dar Al Tauhid</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            {valid && transaction && student ? (
                /* Valid Document Card */
                <div className="w-full max-w-[450px] rounded-[20px] bg-white p-10 text-center shadow-2xl">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-[40px] text-white">
                        ✓
                    </div>
                    <h1 className="mb-2.5 text-[28px] leading-tight font-bold text-emerald-600">
                        DOKUMEN VALID
                    </h1>
                    <p className="mb-7 text-gray-500">
                        Nota pembayaran ini asli dan sah.
                    </p>

                    <table className="w-full border-collapse text-left">
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="w-[140px] py-3 text-gray-500">
                                    No. Nota
                                </td>
                                <td className="py-3 font-semibold text-gray-800">
                                    #{String(transaction.id).padStart(6, '0')}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Tanggal</td>
                                <td className="py-3 font-semibold text-gray-800">
                                    {formattedDate}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">
                                    Nama Santri
                                </td>
                                <td className="py-3 font-semibold text-gray-800">
                                    {student.full_name}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">
                                    No. Pendaftaran
                                </td>
                                <td className="py-3 font-semibold text-gray-800">
                                    {student.registration_number}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-3 text-gray-500">Jumlah</td>
                                <td className="py-3 font-semibold text-gray-800">
                                    Rp{' '}
                                    {transaction.amount.toLocaleString('id-ID')}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 text-gray-500">Petugas</td>
                                <td className="py-3 font-semibold text-gray-800">
                                    {transaction.user?.name ?? 'System'}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-7 border-t border-gray-200 pt-5 text-xs text-gray-400">
                        <p className="mb-1 text-sm font-bold text-gray-700">
                            Pondok Pesantren Dar Al Tauhid
                        </p>
                        <p>Sistem Penerimaan Santri Baru</p>
                    </div>
                </div>
            ) : (
                /* Invalid Document Card */
                <div className="w-full max-w-[450px] rounded-[20px] bg-white p-10 text-center shadow-2xl">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 text-[40px] text-white">
                        ✕
                    </div>
                    <h1 className="mb-2.5 text-[28px] leading-tight font-bold text-red-600">
                        DOKUMEN TIDAK VALID
                    </h1>
                    <p className="mb-7 text-gray-500">
                        Token verifikasi tidak ditemukan atau tidak valid.
                    </p>

                    <div className="mt-7 border-t border-gray-200 pt-5 text-xs text-gray-400">
                        <p className="mb-1 text-sm font-bold text-gray-700">
                            Pondok Pesantren Dar Al Tauhid
                        </p>
                        <p>Sistem Penerimaan Santri Baru</p>
                    </div>
                </div>
            )}
        </div>
    );
}
