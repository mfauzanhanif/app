import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import type { FormEvent } from 'react';
import AppLayout from '@/app/layouts/app.layout';
import { getAdmissionNavGroups } from '../nav-config';

interface AcademicYear {
    id: number;
    name: string;
}

interface Wave {
    id: number;
    name: string;
    academic_year_id: number;
    start_date: string;
    end_date: string;
    exam_date: string | null;
    announcement_date: string | null;
    registration_fee: number;
    description: string | null;
    is_active: boolean;
}

interface Props {
    wave: Wave;
    academicYears: AcademicYear[];
    institutionCode: string;
}

export default function WaveEdit({ wave, academicYears, institutionCode }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: wave.name,
        academic_year_id: String(wave.academic_year_id),
        start_date: wave.start_date,
        end_date: wave.end_date,
        exam_date: wave.exam_date || '',
        announcement_date: wave.announcement_date || '',
        registration_fee: String(wave.registration_fee),
        description: wave.description || '',
        is_active: wave.is_active,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        put(`/${institutionCode}/admission-waves/${wave.id}`);
    };

    return (
        <>
            <Head title={`Edit — ${wave.name}`} />
            <AppLayout navGroups={getAdmissionNavGroups(institutionCode)} sidebarVariant="light" institutionCode={institutionCode}>
                <div className="flex items-center gap-3 mb-6">
                    <Link href={`/${institutionCode}/admission-waves/${wave.id}`} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"><ArrowLeft size={16} /></Link>
                    <h1 className="text-2xl font-bold text-gray-800">Edit Gelombang</h1>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl bg-white rounded-xl border border-gray-100 p-8 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Gelombang <span className="text-red-500">*</span></label>
                        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Ajaran <span className="text-red-500">*</span></label>
                        <select value={data.academic_year_id} onChange={(e) => setData('academic_year_id', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm">
                            {academicYears.map((ay) => <option key={ay.id} value={ay.id}>{ay.name}</option>)}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Buka</label>
                            <input type="date" value={data.start_date} onChange={(e) => setData('start_date', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Tutup</label>
                            <input type="date" value={data.end_date} onChange={(e) => setData('end_date', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Tes</label>
                            <input type="date" value={data.exam_date} onChange={(e) => setData('exam_date', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Pengumuman</label>
                            <input type="date" value={data.announcement_date} onChange={(e) => setData('announcement_date', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Biaya Pendaftaran</label>
                        <input type="number" value={data.registration_fee} onChange={(e) => setData('registration_fee', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="is_active" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                        <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Aktifkan</label>
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button type="submit" disabled={processing} className="inline-flex items-center gap-2 px-8 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-emerald-700 disabled:opacity-50">
                            {processing && <Loader2 size={16} className="animate-spin" />}
                            Simpan Perubahan
                        </button>
                        <Link href={`/${institutionCode}/admission-waves/${wave.id}`} className="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-200">Batal</Link>
                    </div>
                </form>
            </AppLayout>
        </>
    );
}
