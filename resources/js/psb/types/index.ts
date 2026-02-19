/**
 * PSB (Penerimaan Santri Baru) — Shared Type Definitions
 */

export interface Institution {
    id: number;
    name: string;
    code: string;
    type: string;
}

export interface Wave {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    exam_date: string | null;
    announcement_date: string | null;
    registration_fee: number;
    description: string | null;
    institution: Institution;
}

export interface Invoice {
    id: number;
    code: string;
    amount: number;
    type: string;
    status: string;
    proof_path: string | null;
    verified_at: string | null;
}

export interface CandidateDocument {
    id: number;
    file_type: string;
    is_valid: boolean | null;
}

export interface Exam {
    id: number;
    type: string;
    score: number | null;
    result: string | null;
}

export interface Candidate {
    id: number;
    registration_number: string;
    name: string;
    status: string;
    guardian_phone: string | null;
    guardian_email: string | null;
    created_at: string;
    institution: Institution;
    admission_wave: Wave;
    invoices: Invoice[];
    documents: CandidateDocument[];
    exams: Exam[];
}

export const STATUS_MAP: Record<string, { label: string; color: string }> = {
    draft: { label: 'Draft', color: 'bg-gray-100 text-gray-600' },
    diajukan: { label: 'Diajukan', color: 'bg-blue-100 text-blue-700' },
    diverifikasi: { label: 'Diverifikasi', color: 'bg-indigo-100 text-indigo-700' },
    jadwal_tes_ada: { label: 'Jadwal Tes', color: 'bg-yellow-100 text-yellow-700' },
    lulus: { label: 'Lulus', color: 'bg-green-100 text-green-700' },
    tidak_lulus: { label: 'Tidak Lulus', color: 'bg-red-100 text-red-600' },
    diterima: { label: 'Diterima', color: 'bg-emerald-100 text-emerald-700' },
};

export const EXAM_LABELS: Record<string, string> = {
    wawancara_santri: 'Wawancara Santri',
    wawancara_wali: 'Wawancara Wali',
    tes_tulis: 'Tes Tulis',
    tes_alquran: 'Tes Al-Quran',
};

export function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
}
