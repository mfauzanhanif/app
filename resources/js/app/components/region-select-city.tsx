import { useEffect, useState } from 'react';
import axios from 'axios';
import { HelperText, Label, Select } from 'flowbite-react';

interface RegionSelectCityProps {
    provinceCode: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function RegionSelectCity({ provinceCode, value, onChange, error }: RegionSelectCityProps) {
    const [cities, setCities] = useState<Record<string, string>>({});

    useEffect(() => {
        if (provinceCode) {
            axios.get(`/api/location/cities?id_province=${provinceCode}`)
                .then((res) => setCities(res.data));
        } else {
            setCities({});
        }
    }, [provinceCode]);

    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor="city">Kabupaten/Kota</Label>
            </div>
            <Select
                id="city"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={!provinceCode}
                color={error ? 'failure' : 'gray'}
            >
                <option value="">Pilih Kabupaten/Kota</option>
                {Object.entries(cities).map(([code, name]) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </Select>
            {error && (
                <HelperText className="mt-2" color="failure">
                    {error}
                </HelperText>
            )}
        </div>
    );
}
