export interface SantriData {
    name: string;
    nik: string;
    nisn: string;
    pob: string;
    dob: string;
    gender: string;
    address: string;
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
            <h3 className="mb-6 border-b border-gray-100 pb-2 text-lg font-bold text-gray-800 md:text-xl">
                Data Calon Santri
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {/* Nama Lengkap */}
                <div className="md:col-span-2">
                    <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-emerald-500 ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500'}`}
                    />
                    {errors.name && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* NIK */}
                <div>
                    <label
                        htmlFor="nik"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        NIK <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="nik"
                        name="nik"
                        type="text"
                        maxLength={16}
                        value={data.nik}
                        onChange={(e) =>
                            setData(
                                'nik',
                                e.target.value
                                    .replace(/[^0-9]/g, '')
                                    .slice(0, 16),
                            )
                        }
                        placeholder="16 digit NIK"
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-emerald-500 ${errors.nik ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500'}`}
                    />
                    {errors.nik && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.nik}
                        </p>
                    )}
                </div>

                {/* NISN */}
                <div>
                    <label
                        htmlFor="nisn"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        NISN
                    </label>
                    <input
                        id="nisn"
                        name="nisn"
                        type="text"
                        maxLength={10}
                        value={data.nisn}
                        onChange={(e) =>
                            setData(
                                'nisn',
                                e.target.value
                                    .replace(/[^0-9]/g, '')
                                    .slice(0, 10),
                            )
                        }
                        placeholder="10 digit NISN (opsional)"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                </div>

                {/* Tempat Lahir */}
                <div>
                    <label
                        htmlFor="pob"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        Tempat Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="pob"
                        name="pob"
                        type="text"
                        value={data.pob}
                        onChange={handleChange}
                        placeholder="contoh: Bandung"
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-emerald-500 ${errors.pob ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500'}`}
                    />
                    {errors.pob && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.pob}
                        </p>
                    )}
                </div>

                {/* Tanggal Lahir */}
                <div>
                    <label
                        htmlFor="dob"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        Tanggal Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={data.dob}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-emerald-500 ${errors.dob ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500'}`}
                    />
                    {errors.dob && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.dob}
                        </p>
                    )}
                </div>

                {/* Jenis Kelamin */}
                <div>
                    <label
                        htmlFor="gender"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        Jenis Kelamin <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-emerald-500 ${errors.gender ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500'}`}
                    >
                        <option value="">-- Pilih Jenis Kelamin --</option>
                        <option value="l">Laki-laki</option>
                        <option value="p">Perempuan</option>
                    </select>
                    {errors.gender && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.gender}
                        </p>
                    )}
                </div>

                {/* Alamat Lengkap */}
                <div className="md:col-span-2">
                    <label
                        htmlFor="address"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        Alamat Lengkap <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        rows={3}
                        value={data.address}
                        onChange={handleChange}
                        placeholder="Contoh: Jl. Merdeka No. 10 RT 01/RW 02, Desa Ciriung, Kec. Cibinong, Kab. Bogor, Jawa Barat"
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-emerald-500 ${errors.address ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500'}`}
                    />
                    {errors.address && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.address}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
