import { Head, Link, router, useForm } from '@inertiajs/react';
import { ArrowLeft, FileText, Users, ClipboardCheck, Wallet, CheckCircle, XCircle, Clock, Loader2 } from 'lucide-react';
import { useState } from 'react';
import AppLayout from '@/app/layouts/app.layout';
import { getAdmissionNavGroups } from '../nav-config';

interface Document {
    id: number;
    file_type: string;
    file_path: string;
    is_valid: boolean | null;
    notes: string | null;
}

interface Family {
    id: number;
    type: string;
    name: string;
    nik: string | null;
    phone: string | null;
    job: string | null;
    income: string | null;
}

interface Exam {
    id: number;
    type: string;
    schedule: string | null;
    score: number | null;
    result: string | null;
    notes: string | null;
}

interface Invoice {
    id: number;
    code: string;
    amount: number;
    type: string;
    status: string;
    proof_path: string | null;
    verified_at: string | null;
}

interface Candidate {
    id: number;
    registration_number: string;
    name: string;
    nik: string;
    gender: string;
    pob: string;
    dob: string;
    previous_school: string | null;
    nisn: string | null;
    address: string;
    status: string;
    created_at: string;
    user: { id: number; name: string; email: string };
    admission_wave: { id: number; name: string };
    documents: Document[];
    families: Family[];
    exams: Exam[];
    invoices: Invoice[];
}

interface Status {
    value: string;
    label: string;
}

interface Props {
    candidate: Candidate;
    statuses: Status[];
    institutionCode: string;
}

const DOC_LABELS: Record<string, string> = {
    kk: 'Kartu Keluarga', akta: 'Akta Kelahiran', ktp_wali: 'KTP Wali',
    ijazah: 'Ijazah', foto: 'Pas Foto', skl: 'SKL', kip: 'KIP',
};

const EXAM_LABELS: Record<string, string> = {
    wawancara_santri: 'Wawancara Santri', wawancara_wali: 'Wawancara Wali',
    tes_tulis: 'Tes Tulis', tes_alquran: 'Tes Al-Quran',
};

const STATUS_COLORS: Record<string, string> = {
    draft: 'bg-gray-100 text-gray-600', diajukan: 'bg-blue-100 text-blue-700',
    diverifikasi: 'bg-indigo-100 text-indigo-700', jadwal_tes_ada: 'bg-yellow-100 text-yellow-700',
    lulus: 'bg-green-100 text-green-700', tidak_lulus: 'bg-red-100 text-red-600',
    diterima: 'bg-emerald-100 text-emerald-700',
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

export default function CandidateShow({ candidate, statuses, institutionCode }: Props) {
    const c = candidate;
    const [verifying, setVerifying] = useState<number | null>(null);

    const updateStatus = (newStatus: string) => {
        if (!confirm(`Ubah status ke "${statuses.find(s => s.value === newStatus)?.label}"?`)) return;
        router.put(`/${institutionCode}/candidates/${c.id}/status`, { status: newStatus }, { preserveScroll: true });
    };

    const verifyDocument = (docId: number, isValid: boolean) => {
        setVerifying(docId);
        router.put(`/${institutionCode}/candidates/${c.id}/documents/${docId}/verify`, { is_valid: isValid }, {
            preserveScroll: true,
            onFinish: () => setVerifying(null),
        });
    };

    const verifyPayment = (invoiceId: number) => {
        if (!confirm('Verifikasi pembayaran ini?')) return;
        router.put(`/${institutionCode}/admission-invoices/${invoiceId}/verify`, {}, { preserveScroll: true });
    };

    return (
        <>
            <Head title={`Detail — ${c.name}`} />
            <AppLayout navGroups={getAdmissionNavGroups(institutionCode)} sidebarVariant="light" institutionCode={institutionCode}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Link href={`/${institutionCode}/candidates`} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                            <ArrowLeft size={16} />
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">{c.name}</h1>
                            <p className="text-xs text-gray-400 font-mono">{c.registration_number} — {c.admission_wave.name}</p>
                        </div>
                    </div>
                    <span className={`text-sm font-bold px-4 py-1.5 rounded-full ${STATUS_COLORS[c.status] || 'bg-gray-100'}`}>
                        {c.status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Biodata */}
                        <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-4"><FileText size={18} className="text-emerald-600" /> Biodata</h2>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div><span className="text-gray-400">NIK</span><p className="font-medium">{c.nik}</p></div>
                                <div><span className="text-gray-400">Jenis Kelamin</span><p className="font-medium">{c.gender === 'l' ? 'Laki-laki' : 'Perempuan'}</p></div>
                                <div><span className="text-gray-400">TTL</span><p className="font-medium">{c.pob}, {formatDate(c.dob)}</p></div>
                                <div><span className="text-gray-400">NISN</span><p className="font-medium">{c.nisn || '-'}</p></div>
                                <div><span className="text-gray-400">Asal Sekolah</span><p className="font-medium">{c.previous_school || '-'}</p></div>
                                <div><span className="text-gray-400">Wali Akun</span><p className="font-medium">{c.user.name} ({c.user.email})</p></div>
                                <div className="col-span-2"><span className="text-gray-400">Alamat</span><p className="font-medium">{c.address}</p></div>
                            </div>
                        </div>

                        {/* Families */}
                        <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-4"><Users size={18} className="text-blue-600" /> Data Keluarga</h2>
                            <div className="space-y-3">
                                {c.families.map((f) => (
                                    <div key={f.id} className="p-4 bg-gray-50 rounded-xl text-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-gray-800 capitalize">{f.type}</span>
                                            {f.phone && <span className="text-gray-400 text-xs">{f.phone}</span>}
                                        </div>
                                        <p className="text-gray-700">{f.name}</p>
                                        <div className="flex gap-4 mt-1 text-xs text-gray-400">
                                            {f.job && <span>Pekerjaan: {f.job}</span>}
                                            {f.income && <span>Penghasilan: {f.income.replace(/_/g, ' ')}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Documents */}
                        <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-4"><FileText size={18} className="text-purple-600" /> Berkas Persyaratan</h2>
                            <div className="space-y-2">
                                {c.documents.length === 0 ? (
                                    <p className="text-sm text-gray-400 text-center py-4">Belum ada berkas yang diupload.</p>
                                ) : c.documents.map((doc) => (
                                    <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <FileText size={16} className="text-gray-400" />
                                            <span className="text-sm font-medium text-gray-700">{DOC_LABELS[doc.file_type] || doc.file_type}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {doc.is_valid === null && (
                                                <>
                                                    <button onClick={() => verifyDocument(doc.id, true)} disabled={verifying === doc.id} className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium hover:bg-green-200 transition-colors">
                                                        <CheckCircle size={12} className="inline mr-1" />Valid
                                                    </button>
                                                    <button onClick={() => verifyDocument(doc.id, false)} disabled={verifying === doc.id} className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-xs font-medium hover:bg-red-200 transition-colors">
                                                        <XCircle size={12} className="inline mr-1" />Tolak
                                                    </button>
                                                </>
                                            )}
                                            {doc.is_valid === true && <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">✓ Valid</span>}
                                            {doc.is_valid === false && <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">✗ Ditolak</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Exams */}
                        <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-4"><ClipboardCheck size={18} className="text-yellow-600" /> Tes Seleksi</h2>
                            {c.exams.length === 0 ? (
                                <p className="text-sm text-gray-400 text-center py-4">Belum ada data tes.</p>
                            ) : (
                                <div className="space-y-2">
                                    {c.exams.map((exam) => (
                                        <div key={exam.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm">
                                            <span className="font-medium text-gray-700">{EXAM_LABELS[exam.type] || exam.type}</span>
                                            <div className="flex items-center gap-3">
                                                {exam.score !== null && <span className="font-bold text-gray-800">{exam.score}</span>}
                                                {exam.result && (
                                                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${exam.result === 'direkomendasikan' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                                                        {exam.result === 'direkomendasikan' ? 'Rekomendasi' : 'Tidak'}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Status Actions */}
                        <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-800 mb-4">Ubah Status</h3>
                            <div className="space-y-2">
                                {statuses.map((s) => (
                                    <button key={s.value} onClick={() => updateStatus(s.value)} disabled={c.status === s.value}
                                        className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${c.status === s.value ? 'bg-emerald-100 text-emerald-700 cursor-default' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>
                                        {c.status === s.value && <CheckCircle size={14} className="inline mr-2" />}
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Invoices */}
                        <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4"><Wallet size={18} className="text-emerald-600" /> Tagihan</h3>
                            {c.invoices.length === 0 ? (
                                <p className="text-sm text-gray-400">Belum ada tagihan.</p>
                            ) : (
                                <div className="space-y-3">
                                    {c.invoices.map((inv) => (
                                        <div key={inv.id} className="p-3 bg-gray-50 rounded-xl">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs text-gray-400 font-mono">{inv.code}</span>
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${inv.status === 'lunas' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                    {inv.status === 'lunas' ? 'Lunas' : 'Belum Lunas'}
                                                </span>
                                            </div>
                                            <p className="text-sm font-bold text-gray-800">{inv.type === 'biaya_formulir' ? 'Formulir' : 'Daftar Ulang'}</p>
                                            <p className="text-emerald-700 font-bold">{formatCurrency(inv.amount)}</p>
                                            {inv.proof_path && inv.status !== 'lunas' && (
                                                <button onClick={() => verifyPayment(inv.id)} className="mt-2 w-full py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700 transition-colors">
                                                    Verifikasi Pembayaran
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
