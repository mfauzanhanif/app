import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import type { FormEvent } from 'react';
import AppLayout from '@/app/layouts/app.layout';
import { getAdmissionNavGroups } from '../nav-config';

interface AcademicYear {
    id: number;
    name: string;
}

interface Props {
    academicYears: AcademicYear[];
    institutionCode: string;
}

export default function WaveCreate({ academicYears, institutionCode }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        academic_year_id: '',
        start_date: '',
        end_date: '',
        exam_date: '',
        announcement_date: '',
        registration_fee: '',
        description: '',
        is_active: true,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(`/${institutionCode}/admission-waves`);
    };

    return (
        <>
            <Head title="Tambah Gelombang" />
            <AppLayout navGroups={getAdmissionNavGroups(institutionCode)} sidebarVariant="light" institutionCode={institutionCode}>
                <div className="flex items-center gap-3 mb-6">
                    <Link href={`/${institutionCode}/admission-waves`} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"><ArrowLeft size={16} /></Link>
                    <h1 className="text-2xl font-bold text-gray-800">Tambah Gelombang Baru</h1>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl bg-white rounded-xl border border-gray-100 p-8 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Gelombang <span className="text-red-500">*</span></label>
                        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm" placeholder="Contoh: Gelombang 1 - Jalur Reguler" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Ajaran <span className="text-red-500">*</span></label>
                        <select value={data.academic_year_id} onChange={(e) => setData('academic_year_id', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm">
                            <option value="">Pilih TA</option>
                            {academicYears.map((ay) => <option key={ay.id} value={ay.id}>{ay.name}</option>)}
                        </select>
                        {errors.academic_year_id && <p className="text-red-500 text-xs mt-1">{errors.academic_year_id}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Buka <span className="text-red-500">*</span></label>
                            <input type="date" value={data.start_date} onChange={(e) => setData('start_date', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                            {errors.start_date && <p className="text-red-500 text-xs mt-1">{errors.start_date}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Tutup <span className="text-red-500">*</span></label>
                            <input type="date" value={data.end_date} onChange={(e) => setData('end_date', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                            {errors.end_date && <p className="text-red-500 text-xs mt-1">{errors.end_date}</p>}
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">Biaya Pendaftaran <span className="text-red-500">*</span></label>
                        <input type="number" value={data.registration_fee} onChange={(e) => setData('registration_fee', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" placeholder="250000" />
                        {errors.registration_fee && <p className="text-red-500 text-xs mt-1">{errors.registration_fee}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm" />
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="is_active" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                        <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Aktifkan langsung</label>
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button type="submit" disabled={processing} className="inline-flex items-center gap-2 px-8 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-emerald-700 transition-colors disabled:opacity-50">
                            {processing && <Loader2 size={16} className="animate-spin" />}
                            Simpan
                        </button>
                        <Link href={`/${institutionCode}/admission-waves`} className="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">Batal</Link>
                    </div>
                </form>
            </AppLayout>
        </>
    );
}
