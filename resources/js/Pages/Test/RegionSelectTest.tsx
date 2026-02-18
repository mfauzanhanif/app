import RegionSelect from '@/app/components/region-select';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function RegionSelectTest() {
    const { data, setData, post, processing, errors } = useForm({
        province_code: '',
        city_code: '',
        district_code: '',
        village_code: '',
    });

    const handleDataChange = (key: string, value: string) => {
        setData(key as any, value);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-gray-800">
                    Region Select Component Test
                </h1>

                <form onSubmit={submit} className="space-y-6">
                    <RegionSelect
                        data={data}
                        onDataChange={handleDataChange}
                        errors={errors}
                    />

                    <div className="rounded-md bg-gray-50 p-4">
                        <h3 className="mb-2 font-semibold text-gray-700">
                            Current Selections:
                        </h3>
                        <pre className="overflow-auto text-sm text-gray-600">
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            disabled={processing}
                        >
                            Verify Submission
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
