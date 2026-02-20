import React from 'react';
import { TextInput, Label, Select, Textarea } from 'flowbite-react';

export interface SantriData {
    full_name: string;
    nik: string;
    nisn: string;
    place_of_birth: string;
    date_of_birth: string;
    gender: string;
    child_number: string;
    total_siblings: string;
    province_id: string;
    regency_id: string;
    district_id: string;
    village_id: string;
    address_street: string;
}

interface Step1SantriProps {
    data: SantriData;
    setData: (field: string, value: string) => void;
    errors?: Record<string, string>;
}

export default function Step1Santri({
    data,
    setData,
    errors = {},
}: Step1SantriProps) {
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <div>
            <h3 className="text-dat-text mb-6 border-b border-gray-100 pb-2 text-lg font-bold md:text-xl">
                Data Calon Santri
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <div className="md:col-span-2">
                    <div className="mb-2 block">
                        <Label htmlFor="full_name">Nama Lengkap *</Label>
                    </div>
                    <TextInput
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={data.full_name}
                        onChange={handleChange}
                        color={errors.full_name ? 'failure' : 'gray'}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="nik">NIK *</Label>
                    </div>
                    <TextInput
                        id="nik"
                        name="nik"
                        type="text"
                        maxLength={16}
                        value={data.nik}
                        onChange={(e) => {
                            const val = e.target.value
                                .replace(/[^0-9]/g, '')
                                .slice(0, 16);
                            setData('nik', val);
                        }}
                        placeholder="16 digit NIK"
                        color={errors.nik ? 'failure' : 'gray'}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="nisn">NISN</Label>
                    </div>
                    <TextInput
                        id="nisn"
                        name="nisn"
                        type="text"
                        maxLength={10}
                        value={data.nisn}
                        onChange={(e) => {
                            const val = e.target.value
                                .replace(/[^0-9]/g, '')
                                .slice(0, 10);
                            setData('nisn', val);
                        }}
                        placeholder="10 digit NISN"
                        color={errors.nisn ? 'failure' : 'gray'}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="place_of_birth">Tempat Lahir *</Label>
                    </div>
                    <TextInput
                        id="place_of_birth"
                        name="place_of_birth"
                        type="text"
                        value={data.place_of_birth}
                        onChange={handleChange}
                        color={errors.place_of_birth ? 'failure' : 'gray'}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="date_of_birth">Tanggal Lahir *</Label>
                    </div>
                    <TextInput
                        id="date_of_birth"
                        name="date_of_birth"
                        type="date"
                        value={data.date_of_birth}
                        onChange={handleChange}
                        color={errors.date_of_birth ? 'failure' : 'gray'}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="gender">Jenis Kelamin *</Label>
                    </div>
                    <Select
                        id="gender"
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                        color={errors.gender ? 'failure' : 'gray'}
                    >
                        <option value="">-- Pilih Jenis Kelamin --</option>
                        <option value="male">Laki-laki</option>
                        <option value="female">Perempuan</option>
                    </Select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="child_number">Anak Ke- *</Label>
                        </div>
                        <TextInput
                            id="child_number"
                            name="child_number"
                            type="number"
                            min="1"
                            value={data.child_number}
                            onChange={handleChange}
                            color={errors.child_number ? 'failure' : 'gray'}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="total_siblings">Dari ... Bersaudara *</Label>
                        </div>
                        <TextInput
                            id="total_siblings"
                            name="total_siblings"
                            type="number"
                            min="1"
                            value={data.total_siblings}
                            onChange={handleChange}
                            color={errors.total_siblings ? 'failure' : 'gray'}
                        />
                    </div>
                </div>

                <div className="mt-4 md:col-span-2">
                    <h4 className="text-dat-primary mb-3 font-semibold">
                        Alamat Lengkap
                    </h4>
                </div>

                {/* For mock purposes we simplify region selection, in reality they'd fetch from API */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="province_id">Provinsi *</Label>
                    </div>
                    <Select
                        id="province_id"
                        name="province_id"
                        value={data.province_id}
                        onChange={handleChange}
                        color={errors.province_id ? 'failure' : 'gray'}
                    >
                        <option value="">-- Pilih Provinsi --</option>
                        <option value="32">Jawa Barat</option>
                        {/* More options here */}
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="regency_id">Kabupaten / Kota *</Label>
                    </div>
                    <Select
                        id="regency_id"
                        name="regency_id"
                        value={data.regency_id}
                        onChange={handleChange}
                        color={errors.regency_id ? 'failure' : 'gray'}
                        disabled={!data.province_id}
                    >
                        <option value="">-- Pilih Kabupaten/Kota --</option>
                        <option value="3201">Kab. Bogor</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="district_id">Kecamatan *</Label>
                    </div>
                    <Select
                        id="district_id"
                        name="district_id"
                        value={data.district_id}
                        onChange={handleChange}
                        color={errors.district_id ? 'failure' : 'gray'}
                        disabled={!data.regency_id}
                    >
                        <option value="">-- Pilih Kecamatan --</option>
                        <option value="320101">Cibinong</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="village_id">Desa / Kelurahan *</Label>
                    </div>
                    <Select
                        id="village_id"
                        name="village_id"
                        value={data.village_id}
                        onChange={handleChange}
                        color={errors.village_id ? 'failure' : 'gray'}
                        disabled={!data.district_id}
                    >
                        <option value="">-- Pilih Desa/Kelurahan --</option>
                        <option value="32010101">Ciriung</option>
                    </Select>
                </div>

                <div className="md:col-span-2">
                    <div className="mb-2 block">
                        <Label htmlFor="address_street">Jalan / Blok / RT / RW *</Label>
                    </div>
                    <Textarea
                        id="address_street"
                        name="address_street"
                        rows={2}
                        value={data.address_street}
                        onChange={handleChange}
                        placeholder="Contoh: Jl. Merdeka No. 10 RT 01/RW 02"
                        color={errors.address_street ? 'failure' : 'gray'}
                    />
                </div>
            </div>
        </div>
    );
}
