export interface ParentsData {
    father_name: string;
    father_life_status: string;
    father_education: string;
    father_job: string;
    father_phone: string;
    father_income: string;
    mother_name: string;
    mother_life_status: string;
    mother_education: string;
    mother_job: string;
    mother_phone: string;
    mother_income: string;
    wali_type: string;
    guardian_name: string;
    guardian_job: string;
    guardian_phone: string;
    guardian_education: string;
    guardian_income: string;
}

interface Step2ParentsProps {
    data: ParentsData;
    setData: (field: string, value: any) => void;
    errors?: Record<string, string>;
}

const EDUCATION_OPTIONS = [
    { value: '', label: '-- Pilih Pendidikan --' },
    { value: 'sd', label: 'SD / Sederajat' },
    { value: 'smp', label: 'SMP / Sederajat' },
    { value: 'sma', label: 'SMA / Sederajat' },
    { value: 'd1', label: 'D1' },
    { value: 'd2', label: 'D2' },
    { value: 'd3', label: 'D3' },
    { value: 's1', label: 'S1 / D4' },
    { value: 's2', label: 'S2' },
    { value: 's3', label: 'S3' },
    { value: 'tidak_sekolah', label: 'Tidak Sekolah' },
];

const JOB_OPTIONS = [
    { value: '', label: '-- Pilih Pekerjaan --' },
    { value: 'Akuntan', label: 'Akuntan' },
    { value: 'Apoteker', label: 'Apoteker' },
    { value: 'Arsitek', label: 'Arsitek' },
    { value: 'Bidan', label: 'Bidan' },
    { value: 'Buruh', label: 'Buruh' },
    { value: 'Buruh Harian Lepas', label: 'Buruh Harian Lepas' },
    { value: 'Dokter', label: 'Dokter' },
    { value: 'Dosen', label: 'Dosen' },
    { value: 'Guru', label: 'Guru' },
    { value: 'IRT', label: 'Ibu Rumah Tangga' },
    { value: 'Karyawan BUMN/BUMD', label: 'Karyawan BUMN/BUMD' },
    { value: 'Karyawan Swasta', label: 'Karyawan Swasta' },
    { value: 'Kepala/Perangkat Desa', label: 'Kepala/Perangkat Desa' },
    { value: 'Nelayan', label: 'Nelayan' },
    { value: 'Pedagang', label: 'Pedagang' },
    { value: 'Pelaut', label: 'Pelaut' },
    { value: 'Pensiunan', label: 'Pensiunan' },
    { value: 'Perawat', label: 'Perawat' },
    { value: 'Petani', label: 'Petani' },
    { value: 'Peternak', label: 'Peternak' },
    { value: 'PNS', label: 'PNS' },
    { value: 'Polri', label: 'Polri' },
    { value: 'Seniman', label: 'Seniman' },
    { value: 'Sopir', label: 'Sopir' },
    { value: 'TNI', label: 'TNI' },
    { value: 'Wartawan', label: 'Wartawan' },
    { value: 'Wiraswasta', label: 'Wiraswasta' },
    { value: 'Tidak Bekerja', label: 'Tidak Bekerja' },
    { value: 'Lainnya', label: 'Lainnya' },
];

const INCOME_OPTIONS = [
    { value: '', label: '-- Pilih Penghasilan --' },
    { value: '<_500rb', label: '< Rp 500.000' },
    { value: 'Rp. 500.000 - Rp. 1.000.000', label: 'Rp 500.000 - 1.000.000' },
    {
        value: 'Rp. 1.000.000 - Rp. 3.000.000',
        label: 'Rp 1.000.000 - 3.000.000',
    },
    {
        value: 'Rp. 3.000.000 - Rp. 5.000.000',
        label: 'Rp 3.000.000 - 5.000.000',
    },
    {
        value: 'Rp. 5.000.000 - Rp. 10.000.000',
        label: 'Rp 5.000.000 - 10.000.000',
    },
    { value: 'Rp. 10.000.000_>', label: '> Rp 10.000.000' },
];

const inputClass = (hasError?: string) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-emerald-500 ${hasError ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500'}`;

export default function Step2Parents({
    data,
    setData,
    errors = {},
}: Step2ParentsProps) {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <div>
            {/* ─── FATHER ─── */}
            <h3 className="mb-4 border-b border-blue-100 pb-2 text-lg font-bold text-blue-700 md:text-xl">
                Data Ayah Kandung
            </h3>
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <div className="md:col-span-2">
                    <label
                        htmlFor="father_name"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        Nama Lengkap Ayah{' '}
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="father_name"
                        name="father_name"
                        type="text"
                        value={data.father_name}
                        onChange={handleChange}
                        className={inputClass(errors.father_name)}
                    />
                    {errors.father_name && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.father_name}
                        </p>
                    )}
                </div>

                <SelectField
                    id="father_life_status"
                    label="Status"
                    value={data.father_life_status}
                    onChange={handleChange}
                    options={[
                        { value: 'alive', label: 'Masih Hidup' },
                        { value: 'deceased', label: 'Sudah Meninggal' },
                    ]}
                />

                <SelectField
                    id="father_education"
                    label="Pendidikan Terakhir"
                    value={data.father_education}
                    onChange={handleChange}
                    options={EDUCATION_OPTIONS}
                />

                <SelectField
                    id="father_job"
                    label="Pekerjaan"
                    value={data.father_job}
                    onChange={handleChange}
                    options={JOB_OPTIONS}
                    required
                />

                <SelectField
                    id="father_income"
                    label="Penghasilan"
                    value={data.father_income}
                    onChange={handleChange}
                    options={INCOME_OPTIONS}
                />

                <div>
                    <label
                        htmlFor="father_phone"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        No. HP / WhatsApp
                    </label>
                    <input
                        id="father_phone"
                        name="father_phone"
                        type="text"
                        value={data.father_phone}
                        onChange={(e) =>
                            setData(
                                'father_phone',
                                e.target.value.replace(/[^0-9+]/g, ''),
                            )
                        }
                        placeholder="contoh: 081234567890"
                        className={inputClass()}
                    />
                </div>
            </div>

            {/* ─── MOTHER ─── */}
            <h3 className="mb-4 border-b border-pink-100 pb-2 text-lg font-bold text-pink-600 md:text-xl">
                Data Ibu Kandung
            </h3>
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <div className="md:col-span-2">
                    <label
                        htmlFor="mother_name"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        Nama Lengkap Ibu <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="mother_name"
                        name="mother_name"
                        type="text"
                        value={data.mother_name}
                        onChange={handleChange}
                        className={inputClass(errors.mother_name)}
                    />
                    {errors.mother_name && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.mother_name}
                        </p>
                    )}
                </div>

                <SelectField
                    id="mother_life_status"
                    label="Status"
                    value={data.mother_life_status}
                    onChange={handleChange}
                    options={[
                        { value: 'alive', label: 'Masih Hidup' },
                        { value: 'deceased', label: 'Sudah Meninggal' },
                    ]}
                />

                <SelectField
                    id="mother_education"
                    label="Pendidikan Terakhir"
                    value={data.mother_education}
                    onChange={handleChange}
                    options={EDUCATION_OPTIONS}
                />

                <SelectField
                    id="mother_job"
                    label="Pekerjaan"
                    value={data.mother_job}
                    onChange={handleChange}
                    options={JOB_OPTIONS}
                />

                <SelectField
                    id="mother_income"
                    label="Penghasilan"
                    value={data.mother_income}
                    onChange={handleChange}
                    options={INCOME_OPTIONS}
                />

                <div>
                    <label
                        htmlFor="mother_phone"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        No. HP / WhatsApp
                    </label>
                    <input
                        id="mother_phone"
                        name="mother_phone"
                        type="text"
                        value={data.mother_phone}
                        onChange={(e) =>
                            setData(
                                'mother_phone',
                                e.target.value.replace(/[^0-9+]/g, ''),
                            )
                        }
                        placeholder="contoh: 081234567890"
                        className={inputClass()}
                    />
                </div>
            </div>

            {/* ─── GUARDIAN ─── */}
            <h3 className="mb-4 border-b border-amber-100 pb-2 text-lg font-bold text-amber-600 md:text-xl">
                Wali Calon Santri
            </h3>

            <div className="mb-6 rounded-lg border border-amber-100 bg-amber-50 p-4">
                <p className="mb-3 text-sm font-semibold text-gray-700">
                    Siapa yang menjadi wali calon santri?
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                    {[
                        { value: 'father', label: 'Ayah Kandung' },
                        { value: 'mother', label: 'Ibu Kandung' },
                        { value: 'other', label: 'Wali Lainnya' },
                    ].map((opt) => (
                        <label
                            key={opt.value}
                            className="flex cursor-pointer items-center gap-2"
                        >
                            <input
                                type="radio"
                                name="wali_type"
                                value={opt.value}
                                checked={data.wali_type === opt.value}
                                onChange={handleChange}
                                className="text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm text-gray-700">
                                {opt.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {data.wali_type === 'other' && (
                <div className="grid grid-cols-1 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 md:grid-cols-2 md:gap-5">
                    <div className="md:col-span-2">
                        <label
                            htmlFor="guardian_name"
                            className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                            Nama Lengkap Wali{' '}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="guardian_name"
                            name="guardian_name"
                            type="text"
                            value={data.guardian_name}
                            onChange={handleChange}
                            className={inputClass(errors.guardian_name)}
                        />
                        {errors.guardian_name && (
                            <p className="mt-1 text-xs text-red-600">
                                {errors.guardian_name}
                            </p>
                        )}
                    </div>

                    <SelectField
                        id="guardian_education"
                        label="Pendidikan"
                        value={data.guardian_education}
                        onChange={handleChange}
                        options={EDUCATION_OPTIONS}
                    />

                    <SelectField
                        id="guardian_job"
                        label="Pekerjaan Wali"
                        value={data.guardian_job}
                        onChange={handleChange}
                        options={JOB_OPTIONS}
                    />

                    <SelectField
                        id="guardian_income"
                        label="Penghasilan"
                        value={data.guardian_income}
                        onChange={handleChange}
                        options={INCOME_OPTIONS}
                    />

                    <div>
                        <label
                            htmlFor="guardian_phone"
                            className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                            No. HP / WhatsApp Wali
                        </label>
                        <input
                            id="guardian_phone"
                            name="guardian_phone"
                            type="text"
                            value={data.guardian_phone}
                            onChange={(e) =>
                                setData(
                                    'guardian_phone',
                                    e.target.value.replace(/[^0-9+]/g, ''),
                                )
                            }
                            className={inputClass()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

/* ─── Helper ─── */

function SelectField({
    id,
    label,
    value,
    onChange,
    options,
    required,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    required?: boolean;
}) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-1.5 block text-sm font-semibold text-gray-700"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
