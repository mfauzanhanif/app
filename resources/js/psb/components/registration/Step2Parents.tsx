import React from 'react';
import { TextInput, Label, Select, Radio } from 'flowbite-react';

export interface ParentsData {
    father_name: string;
    father_life_status: string;
    father_education: string;
    father_has_pesantren: boolean;
    father_pesantren_name: string;
    father_job: string;
    father_job_other: string;
    father_phone: string;
    father_no_whatsapp: boolean;

    mother_name: string;
    mother_life_status: string;
    mother_education: string;
    mother_has_pesantren: boolean;
    mother_pesantren_name: string;
    mother_job: string;
    mother_job_other: string;
    mother_phone: string;
    mother_no_whatsapp: boolean;

    wali_type: string;
    guardian_name: string;
    guardian_life_status: string;
    guardian_education: string;
    guardian_has_pesantren: boolean;
    guardian_pesantren_name: string;
    guardian_job: string;
    guardian_job_other: string;
    guardian_phone: string;
    guardian_no_whatsapp: boolean;
}

interface Step2ParentsProps {
    data: ParentsData;
    setData: (field: string, value: any) => void;
    errors?: Record<string, string>;
}

export default function Step2Parents({
    data,
    setData,
    errors = {},
}: Step2ParentsProps) {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setData(name, checked);
        } else {
            setData(name, value);
        }
    };

    const handleRadio = (name: string, value: string) => {
        setData(name, value);
    };

    return (
        <div>
            {/* FATHER SECTION */}
            <h3 className="mb-4 border-b border-blue-100 pb-2 text-lg font-bold text-blue-700 md:text-xl">
                Data Ayah Kandung
            </h3>
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <div className="md:col-span-2">
                    <div className="mb-2 block">
                        <Label htmlFor="father_name">Nama Lengkap Ayah *</Label>
                    </div>
                    <TextInput
                        id="father_name"
                        name="father_name"
                        value={data.father_name}
                        onChange={handleChange}
                        color={errors.father_name ? 'failure' : 'gray'}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="father_life_status">Status *</Label>
                    </div>
                    <Select
                        id="father_life_status"
                        name="father_life_status"
                        value={data.father_life_status}
                        onChange={handleChange}
                    >
                        <option value="alive">Masih Hidup</option>
                        <option value="deceased">Sudah Meninggal</option>
                        <option value="unknown">Tidak Diketahui</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="father_education">
                            Pendidikan Terakhir
                        </Label>
                    </div>
                    <Select
                        id="father_education"
                        name="father_education"
                        value={data.father_education}
                        onChange={handleChange}
                    >
                        <option value="">-- Pilih Pendidikan --</option>
                        <option value="SD/Sederajat">SD / Sederajat</option>
                        <option value="SMP/Sederajat">SMP / Sederajat</option>
                        <option value="SMA/Sederajat">SMA / Sederajat</option>
                        <option value="D1/D2/D3">D1 / D2 / D3</option>
                        <option value="S1/D4">S1 / D4</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                        <option value="Tidak Sekolah">Tidak Sekolah</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="father_job">Pekerjaan *</Label>
                    </div>
                    <Select
                        id="father_job"
                        name="father_job"
                        value={data.father_job}
                        onChange={handleChange}
                    >
                        <option value="">-- Pilih Pekerjaan --</option>
                        <option value="PNS">PNS / TNI / POLRI</option>
                        <option value="Karyawan Swasta">Karyawan Swasta</option>
                        <option value="Wiraswasta">
                            Wiraswasta / Pengusaha
                        </option>
                        <option value="Buruh">Buruh / Petani / Nelayan</option>
                        <option value="Tidak Bekerja">Tidak Bekerja</option>
                        <option value="Lainnya">Lainnya...</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="father_phone">No. HP / WhatsApp</Label>
                    </div>
                    <TextInput
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
                        disabled={data.father_no_whatsapp}
                    />
                    <div className="mt-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="father_no_whatsapp"
                            name="father_no_whatsapp"
                            checked={data.father_no_whatsapp}
                            onChange={handleChange}
                            className="text-dat-primary focus:ring-dat-primary rounded border-gray-300"
                        />
                        <Label
                            htmlFor="father_no_whatsapp"
                            className="text-sm font-normal"
                        >
                            Tidak ada No. WhatsApp
                        </Label>
                    </div>
                </div>
            </div>

            {/* MOTHER SECTION */}
            <h3 className="mb-4 border-b border-pink-100 pb-2 text-lg font-bold text-pink-600 md:text-xl">
                Data Ibu Kandung
            </h3>
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <div className="md:col-span-2">
                    <div className="mb-2 block">
                        <Label htmlFor="mother_name">Nama Lengkap Ibu *</Label>
                    </div>
                    <TextInput
                        id="mother_name"
                        name="mother_name"
                        value={data.mother_name}
                        onChange={handleChange}
                        color={errors.mother_name ? 'failure' : 'gray'}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="mother_life_status">Status *</Label>
                    </div>
                    <Select
                        id="mother_life_status"
                        name="mother_life_status"
                        value={data.mother_life_status}
                        onChange={handleChange}
                    >
                        <option value="alive">Masih Hidup</option>
                        <option value="deceased">Sudah Meninggal</option>
                        <option value="unknown">Tidak Diketahui</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="mother_education">
                            Pendidikan Terakhir
                        </Label>
                    </div>
                    <Select
                        id="mother_education"
                        name="mother_education"
                        value={data.mother_education}
                        onChange={handleChange}
                    >
                        <option value="">-- Pilih Pendidikan --</option>
                        <option value="SD/Sederajat">SD / Sederajat</option>
                        <option value="SMP/Sederajat">SMP / Sederajat</option>
                        <option value="SMA/Sederajat">SMA / Sederajat</option>
                        <option value="D1/D2/D3">D1 / D2 / D3</option>
                        <option value="S1/D4">S1 / D4</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                        <option value="Tidak Sekolah">Tidak Sekolah</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="mother_job">Pekerjaan *</Label>
                    </div>
                    <Select
                        id="mother_job"
                        name="mother_job"
                        value={data.mother_job}
                        onChange={handleChange}
                    >
                        <option value="">-- Pilih Pekerjaan --</option>
                        <option value="Ibu Rumah Tangga">
                            Ibu Rumah Tangga
                        </option>
                        <option value="PNS">PNS / TNI / POLRI</option>
                        <option value="Karyawan Swasta">Karyawan Swasta</option>
                        <option value="Wiraswasta">
                            Wiraswasta / Pengusaha
                        </option>
                        <option value="Buruh">Buruh / Petani / Nelayan</option>
                        <option value="Lainnya">Lainnya...</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="mother_phone">No. HP / WhatsApp</Label>
                    </div>
                    <TextInput
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
                        disabled={data.mother_no_whatsapp}
                    />
                    <div className="mt-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="mother_no_whatsapp"
                            name="mother_no_whatsapp"
                            checked={data.mother_no_whatsapp}
                            onChange={handleChange}
                            className="text-dat-primary focus:ring-dat-primary rounded border-gray-300"
                        />
                        <Label
                            htmlFor="mother_no_whatsapp"
                            className="text-sm font-normal"
                        >
                            Tidak ada No. WhatsApp
                        </Label>
                    </div>
                </div>
            </div>

            {/* GUARDIAN SECTION */}
            <h3 className="mb-4 border-b border-amber-100 pb-2 text-lg font-bold text-amber-600 md:text-xl">
                Wali Calon Santri
            </h3>

            <div className="mb-6 rounded-lg border border-amber-100 bg-amber-50 p-4">
                <Label className="mb-3 block font-semibold">
                    Siapa yang menjadi wali calon santri?
                </Label>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex items-center gap-2">
                        <Radio
                            id="wali_ayah"
                            name="wali_type"
                            value="father"
                            checked={data.wali_type === 'father'}
                            onChange={() => handleRadio('wali_type', 'father')}
                        />
                        <Label htmlFor="wali_ayah">Ayah Kandung</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio
                            id="wali_ibu"
                            name="wali_type"
                            value="mother"
                            checked={data.wali_type === 'mother'}
                            onChange={() => handleRadio('wali_type', 'mother')}
                        />
                        <Label htmlFor="wali_ibu">Ibu Kandung</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio
                            id="wali_lainnya"
                            name="wali_type"
                            value="other"
                            checked={data.wali_type === 'other'}
                            onChange={() => handleRadio('wali_type', 'other')}
                        />
                        <Label htmlFor="wali_lainnya">Wali Lainnya</Label>
                    </div>
                </div>
            </div>

            {data.wali_type === 'other' && (
                <div className="grid grid-cols-1 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 md:grid-cols-2 md:gap-5">
                    <div className="md:col-span-2">
                        <div className="mb-2 block">
                            <Label htmlFor="guardian_name">
                                Nama Lengkap Wali *
                            </Label>
                        </div>
                        <TextInput
                            id="guardian_name"
                            name="guardian_name"
                            value={data.guardian_name}
                            onChange={handleChange}
                            color={errors.guardian_name ? 'failure' : 'gray'}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="guardian_job">
                                Pekerjaan Wali *
                            </Label>
                        </div>
                        <Select
                            id="guardian_job"
                            name="guardian_job"
                            value={data.guardian_job}
                            onChange={handleChange}
                        >
                            <option value="">-- Pilih Pekerjaan --</option>
                            <option value="PNS">PNS / TNI / POLRI</option>
                            <option value="Karyawan Swasta">
                                Karyawan Swasta
                            </option>
                            <option value="Wiraswasta">
                                Wiraswasta / Pengusaha
                            </option>
                            <option value="Buruh">
                                Buruh / Petani / Nelayan
                            </option>
                            <option value="Tidak Bekerja">Tidak Bekerja</option>
                            <option value="Lainnya">Lainnya...</option>
                        </Select>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="guardian_phone">
                                No. HP / WhatsApp Wali
                            </Label>
                        </div>
                        <TextInput
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
                            disabled={data.guardian_no_whatsapp}
                        />
                        <div className="mt-2 flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="guardian_no_whatsapp"
                                name="guardian_no_whatsapp"
                                checked={data.guardian_no_whatsapp}
                                onChange={handleChange}
                                className="text-dat-primary focus:ring-dat-primary rounded border-gray-300"
                            />
                            <Label
                                htmlFor="guardian_no_whatsapp"
                                className="text-sm font-normal"
                            >
                                Tidak ada No. WhatsApp
                            </Label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
