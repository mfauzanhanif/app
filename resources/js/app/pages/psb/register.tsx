import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Upload, User, Users as UsersIcon, FileText, Loader2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';

interface Wave {
    id: number;
    name: string;
    registration_fee: number;
    institution: { id: number; name: string; code: string; type: string };
}

interface Props {
    wave: Wave;
}

const STEPS = ['Biodata Santri', 'Data Keluarga', 'Upload Berkas'];

export default function Register({ wave }: Props) {
    const [step, setStep] = useState(0);

    const { data, setData, post, processing, errors } = useForm<{
        nik: string; name: string; gender: string; pob: string; dob: string;
        previous_school: string; nisn: string; address: string;
        families: { type: string; nik: string; name: string; phone: string; job: string; income: string }[];
        documents: Record<string, File | null>;
    }>({
        nik: '', name: '', gender: '', pob: '', dob: '',
        previous_school: '', nisn: '', address: '',
        families: [
            { type: 'ayah', nik: '', name: '', phone: '', job: '', income: '' },
            { type: 'ibu', nik: '', name: '', phone: '', job: '', income: '' },
        ],
        documents: {},
    });

    const updateFamily = (idx: number, field: string, value: string) => {
        const updated = [...data.families];
        (updated[idx] as any)[field] = value;
        setData('families', updated);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(`/daftar/${wave.id}`, {
            forceFormData: true,
        });
    };

    const InputField = ({ label, name, type = 'text', value, onChange, error, required = false, ...rest }: any) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-2.5 rounded-xl border ${error ? 'border-red-400 ring-1 ring-red-200' : 'border-gray-200'} bg-gray-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all text-sm`}
                {...rest}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );

    return (
        <>
            <Head title={`Pendaftaran — ${wave.institution.name}`} />

            <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white font-sans">
                {/* Header Bar */}
                <div className="bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 text-sm font-medium">
                            <ArrowLeft size={16} />
                            Kembali
                        </Link>
                        <div className="text-right">
                            <p className="text-xs text-gray-400">{wave.institution.type}</p>
                            <p className="text-sm font-bold text-emerald-800">{wave.institution.name}</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto px-6 py-8">
                    {/* Steps Indicator */}
                    <div className="flex items-center justify-center gap-2 mb-10">
                        {STEPS.map((s, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i === step ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : i < step ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-400'}`}>
                                    {i + 1}
                                </div>
                                <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-emerald-700' : 'text-gray-400'}`}>{s}</span>
                                {i < STEPS.length - 1 && <div className={`w-8 h-0.5 ${i < step ? 'bg-emerald-300' : 'bg-gray-200'}`} />}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        {/* Step 1: Biodata */}
                        {step === 0 && (
                            <div className="space-y-5">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                                        <User className="text-emerald-600" size={20} />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-gray-800 text-lg">Biodata Calon Santri</h2>
                                        <p className="text-gray-400 text-xs">Lengkapi data diri calon santri</p>
                                    </div>
                                </div>

                                <InputField label="NIK" name="nik" value={data.nik} onChange={(e: any) => setData('nik', e.target.value)} error={errors.nik} required maxLength={16} placeholder="16 digit NIK" />
                                <InputField label="Nama Lengkap" name="name" value={data.name} onChange={(e: any) => setData('name', e.target.value)} error={errors.name} required />
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin <span className="text-red-500">*</span></label>
                                        <select value={data.gender} onChange={(e) => setData('gender', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm">
                                            <option value="">Pilih</option>
                                            <option value="l">Laki-laki</option>
                                            <option value="p">Perempuan</option>
                                        </select>
                                        {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                                    </div>
                                    <InputField label="Tempat Lahir" name="pob" value={data.pob} onChange={(e: any) => setData('pob', e.target.value)} error={errors.pob} required />
                                </div>
                                <InputField label="Tanggal Lahir" name="dob" type="date" value={data.dob} onChange={(e: any) => setData('dob', e.target.value)} error={errors.dob} required />
                                <InputField label="Asal Sekolah" name="previous_school" value={data.previous_school} onChange={(e: any) => setData('previous_school', e.target.value)} error={errors.previous_school} />
                                <InputField label="NISN" name="nisn" value={data.nisn} onChange={(e: any) => setData('nisn', e.target.value)} error={errors.nisn} />
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Alamat <span className="text-red-500">*</span></label>
                                    <textarea value={data.address} onChange={(e) => setData('address', e.target.value)} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm" />
                                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Family */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                                        <UsersIcon className="text-blue-600" size={20} />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-gray-800 text-lg">Data Orang Tua / Wali</h2>
                                        <p className="text-gray-400 text-xs">Minimal isi data Ayah atau Ibu</p>
                                    </div>
                                </div>

                                {data.families.map((fam, idx) => (
                                    <div key={idx} className="p-5 bg-gray-50 rounded-xl space-y-4">
                                        <h3 className="font-bold text-gray-700 capitalize">{fam.type}</h3>
                                        <InputField label="Nama" value={fam.name} onChange={(e: any) => updateFamily(idx, 'name', e.target.value)} required />
                                        <div className="grid grid-cols-2 gap-4">
                                            <InputField label="NIK" value={fam.nik} onChange={(e: any) => updateFamily(idx, 'nik', e.target.value)} maxLength={16} />
                                            <InputField label="No. HP" value={fam.phone} onChange={(e: any) => updateFamily(idx, 'phone', e.target.value)} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <InputField label="Pekerjaan" value={fam.job} onChange={(e: any) => updateFamily(idx, 'job', e.target.value)} />
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Penghasilan</label>
                                                <select value={fam.income} onChange={(e) => updateFamily(idx, 'income', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 text-sm">
                                                    <option value="">Pilih</option>
                                                    <option value="kurang_1jt">&lt; Rp 1 Juta</option>
                                                    <option value="1_3jt">Rp 1-3 Juta</option>
                                                    <option value="3_5jt">Rp 3-5 Juta</option>
                                                    <option value="5_10jt">Rp 5-10 Juta</option>
                                                    <option value="lebih_10jt">&gt; Rp 10 Juta</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Step 3: Documents */}
                        {step === 2 && (
                            <div className="space-y-5">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                                        <FileText className="text-purple-600" size={20} />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-gray-800 text-lg">Upload Berkas</h2>
                                        <p className="text-gray-400 text-xs">Format: JPG, PNG, PDF. Maks: 5MB</p>
                                    </div>
                                </div>

                                {[
                                    { key: 'kk', label: 'Kartu Keluarga' },
                                    { key: 'akta', label: 'Akta Kelahiran' },
                                    { key: 'ktp_wali', label: 'KTP Orang Tua/Wali' },
                                    { key: 'foto', label: 'Pas Foto (3x4)' },
                                    { key: 'ijazah', label: 'Ijazah / SKL' },
                                ].map((doc) => (
                                    <div key={doc.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                                        <span className="text-sm font-medium text-gray-700">{doc.label}</span>
                                        <label className="cursor-pointer inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors">
                                            <Upload size={14} />
                                            {(data.documents as any)[doc.key] ? 'Ganti' : 'Upload'}
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".jpg,.jpeg,.png,.pdf"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0] || null;
                                                    setData('documents', { ...data.documents, [doc.key]: file });
                                                }}
                                            />
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                            {step > 0 ? (
                                <button type="button" onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 px-6 py-2.5 text-gray-600 bg-gray-100 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                                    <ArrowLeft size={16} />
                                    Sebelumnya
                                </button>
                            ) : <div />}

                            {step < STEPS.length - 1 ? (
                                <button type="button" onClick={() => setStep(step + 1)} className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium shadow-sm hover:bg-emerald-700 transition-colors">
                                    Selanjutnya
                                    <ArrowRight size={16} />
                                </button>
                            ) : (
                                <button type="submit" disabled={processing} className="inline-flex items-center gap-2 px-8 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-lg hover:bg-emerald-700 transition-all disabled:opacity-50">
                                    {processing ? <Loader2 size={16} className="animate-spin" /> : null}
                                    Kirim Pendaftaran
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
