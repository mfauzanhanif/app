import React from 'react';
import { TextInput, Label, Select } from 'flowbite-react';

export interface SchoolData {
    previous_school_level: string;
    previous_school_name: string;
    target_school: string;
    target_class: string;
}

interface Step3SchoolProps {
    data: SchoolData;
    setData: (field: string, value: string) => void;
    errors?: Record<string, string>;
}

export default function Step3School({
    data,
    setData,
    errors = {},
}: Step3SchoolProps) {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <div>
            <h3 className="text-dat-text mb-6 border-b border-gray-100 pb-2 text-lg font-bold md:text-xl">
                Data Pendidikan
            </h3>

            <div className="mb-8 rounded-xl border border-purple-100 bg-purple-50 p-5">
                <h4 className="mb-4 font-semibold text-purple-800">
                    Sekolah Asal
                </h4>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="previous_school_level">Jenjang Sekolah Asal *</Label>
                        </div>
                        <Select
                            id="previous_school_level"
                            name="previous_school_level"
                            value={data.previous_school_level}
                            onChange={handleChange}
                            color={
                                errors.previous_school_level
                                    ? 'failure'
                                    : 'gray'
                            }
                        >
                            <option value="">-- Pilih Jenjang --</option>
                            <option value="SD/MI">SD/MI Sederajat</option>
                            <option value="SMP/MTs">SMP/MTs Sederajat</option>
                        </Select>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="previous_school_name">Nama Sekolah Asal *</Label>
                        </div>
                        <TextInput
                            id="previous_school_name"
                            name="previous_school_name"
                            value={data.previous_school_name}
                            onChange={handleChange}
                            placeholder="Contoh: SD Negeri 1 Bogor"
                            color={
                                errors.previous_school_name ? 'failure' : 'gray'
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="mb-4 rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <h4 className="mb-4 font-semibold text-emerald-800">
                    Tujuan Pendaftaran
                </h4>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="target_school">Pilihan Sekolah / Jenjang *</Label>
                        </div>
                        <Select
                            id="target_school"
                            name="target_school"
                            value={data.target_school}
                            onChange={handleChange}
                            color={errors.target_school ? 'failure' : 'gray'}
                        >
                            <option value="">-- Pilih Sekolah Tujuan --</option>
                            <option value="SMP">SMP Dar Al Tauhid</option>
                            <option value="MA">
                                Madrasah Aliyah Dar Al Tauhid
                            </option>
                            <option value="Pondok Saja">
                                Pondok Pesantren (Tanpa Sekolah)
                            </option>
                        </Select>
                    </div>

                    {(data.target_school === 'SMP' ||
                        data.target_school === 'MA') && (
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="target_class">Kelas *</Label>
                            </div>
                            <Select
                                id="target_class"
                                name="target_class"
                                value={data.target_class}
                                onChange={handleChange}
                                color={errors.target_class ? 'failure' : 'gray'}
                            >
                                <option value="">-- Pilih Kelas --</option>
                                {data.target_school === 'SMP' ? (
                                    <>
                                        <option value="7">Kelas 7</option>
                                        <option value="8">
                                            Kelas 8 (Pindahan)
                                        </option>
                                        <option value="9">
                                            Kelas 9 (Pindahan)
                                        </option>
                                    </>
                                ) : (
                                    <>
                                        <option value="10">Kelas 10</option>
                                        <option value="11">
                                            Kelas 11 (Pindahan)
                                        </option>
                                        <option value="12">
                                            Kelas 12 (Pindahan)
                                        </option>
                                    </>
                                )}
                            </Select>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
