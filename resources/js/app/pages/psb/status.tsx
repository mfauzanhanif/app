import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, CheckCircle, Clock, AlertCircle, FileText, Upload, Loader2, XCircle } from 'lucide-react';

interface Invoice {
    id: number;
    code: string;
    amount: number;
    type: string;
    status: string;
    proof_path: string | null;
    verified_at: string | null;
}

interface Document {
    id: number;
    file_type: string;
    is_valid: boolean | null;
}

interface Candidate {
    id: number;
    registration_number: string;
    name: string;
    status: string;
    created_at: string;
    institution: { id: number; name: string; code: string };
    admission_wave: { id: number; name: string };
    invoices: Invoice[];
    documents: Document[];
}

interface Props {
    candidates: Candidate[];
}

const STATUS_MAP: Record<string, { label: string; color: string; icon: any }> = {
    draft: { label: 'Draft', color: 'bg-gray-100 text-gray-600', icon: Clock },
    diajukan: { label: 'Diajukan', color: 'bg-blue-100 text-blue-700', icon: Clock },
    diverifikasi: { label: 'Diverifikasi', color: 'bg-indigo-100 text-indigo-700', icon: CheckCircle },
    jadwal_tes_ada: { label: 'Jadwal Tes', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
    lulus: { label: 'Lulus', color: 'bg-green-100 text-green-700', icon: CheckCircle },
    tidak_lulus: { label: 'Tidak Lulus', color: 'bg-red-100 text-red-600', icon: XCircle },
    diterima: { label: 'Diterima', color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle },
};

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

function InvoiceCard({ invoice }: { invoice: Invoice }) {
    const { data, setData, post, processing } = useForm<{ proof: File | null }>({ proof: null });

    const handleUpload = () => {
        if (!data.proof) return;
        post(`/invoices/${invoice.id}/upload-proof`, { forceFormData: true });
    };

    return (
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <span className="text-xs text-gray-400">{invoice.code}</span>
                    <p className="text-sm font-bold text-gray-800">{invoice.type === 'biaya_formulir' ? 'Biaya Formulir' : 'Biaya Daftar Ulang'}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${invoice.status === 'lunas' ? 'bg-green-100 text-green-700' : invoice.status === 'dibatalkan' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-700'}`}>
                    {invoice.status === 'lunas' ? 'Lunas' : invoice.status === 'dibatalkan' ? 'Dibatalkan' : 'Belum Lunas'}
                </span>
            </div>
            <p className="text-lg font-bold text-emerald-700 mb-3">{formatCurrency(invoice.amount)}</p>

            {invoice.status === 'belum_lunas' && !invoice.proof_path && (
                <div className="flex items-center gap-2">
                    <label className="cursor-pointer inline-flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-4 py-2 rounded-lg hover:bg-emerald-100 font-medium">
                        <Upload size={14} />
                        Upload Bukti Transfer
                        <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => setData('proof', e.target.files?.[0] || null)} />
                    </label>
                    {data.proof && (
                        <button onClick={handleUpload} disabled={processing} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium disabled:opacity-50">
                            {processing ? <Loader2 size={14} className="animate-spin" /> : 'Kirim'}
                        </button>
                    )}
                </div>
            )}
            {invoice.proof_path && invoice.status !== 'lunas' && (
                <p className="text-xs text-blue-600 flex items-center gap-1"><Clock size={12} /> Bukti transfer menunggu verifikasi admin</p>
            )}
        </div>
    );
}

export default function Status({ candidates }: Props) {
    return (
        <>
            <Head title="Status Pendaftaran" />

            <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white font-sans">
                <div className="bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 text-sm font-medium">
                            <ArrowLeft size={16} />
                            Beranda PSB
                        </Link>
                        <h1 className="font-bold text-emerald-800">Status Pendaftaran</h1>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
                    {candidates.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                            <FileText className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500 font-medium">Belum ada pendaftaran.</p>
                            <Link href="/" className="text-emerald-600 text-sm font-medium hover:underline mt-2 inline-block">Daftar Sekarang</Link>
                        </div>
                    ) : (
                        candidates.map((c) => {
                            const statusInfo = STATUS_MAP[c.status] || STATUS_MAP.draft;
                            const StatusIcon = statusInfo.icon;

                            return (
                                <div key={c.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="p-6 border-b border-gray-50">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <span className="text-xs text-gray-400 font-mono">{c.registration_number}</span>
                                                <h2 className="font-bold text-gray-800 text-lg mt-1">{c.name}</h2>
                                                <p className="text-sm text-gray-500">{c.institution.name} — {c.admission_wave.name}</p>
                                            </div>
                                            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${statusInfo.color}`}>
                                                <StatusIcon size={14} />
                                                {statusInfo.label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Documents Status */}
                                    {c.documents.length > 0 && (
                                        <div className="px-6 py-4 border-b border-gray-50">
                                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Berkas</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {c.documents.map((doc) => (
                                                    <span key={doc.id} className={`text-xs px-3 py-1 rounded-full font-medium ${doc.is_valid === true ? 'bg-green-100 text-green-700' : doc.is_valid === false ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
                                                        {doc.file_type.toUpperCase()} {doc.is_valid === true ? '✓' : doc.is_valid === false ? '✗' : '⏳'}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Invoices */}
                                    {c.invoices.length > 0 && (
                                        <div className="px-6 py-4 space-y-3">
                                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tagihan</h3>
                                            {c.invoices.map((inv) => (
                                                <InvoiceCard key={inv.id} invoice={inv} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}
