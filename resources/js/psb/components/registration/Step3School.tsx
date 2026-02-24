export interface SchoolData {
    previous_school: string;
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
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <div>
            <h3 className="mb-6 border-b border-gray-100 pb-2 text-lg font-bold text-gray-800 md:text-xl">
                Data Pendidikan
            </h3>

            <div className="rounded-xl border border-purple-100 bg-purple-50 p-5">
                <h4 className="mb-4 font-semibold text-purple-800">
                    Sekolah Asal
                </h4>

                <div>
                    <label
                        htmlFor="previous_school"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                    >
                        Nama Sekolah Asal
                    </label>
                    <input
                        id="previous_school"
                        name="previous_school"
                        type="text"
                        value={data.previous_school}
                        onChange={handleChange}
                        placeholder="Contoh: SD Negeri 1 Bogor"
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-emerald-500 ${errors.previous_school ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500'}`}
                    />
                    {errors.previous_school && (
                        <p className="mt-1 text-xs text-red-600">
                            {errors.previous_school}
                        </p>
                    )}
                    <p className="mt-1.5 text-xs text-gray-500">
                        Isi nama sekolah terakhir beserta kelasnya (contoh: SD
                        Negeri 1 Bogor - Kelas 6)
                    </p>
                </div>
            </div>
        </div>
    );
}
