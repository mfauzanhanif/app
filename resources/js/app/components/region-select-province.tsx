import { useEffect, useState } from 'react';
import axios from 'axios';
import { HelperText, Label, Select } from 'flowbite-react';

interface RegionSelectProvinceProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function RegionSelectProvince({ value, onChange, error }: RegionSelectProvinceProps) {
    const [provinces, setProvinces] = useState<Record<string, string>>({});

    useEffect(() => {
        axios.get('/api/location/provinces').then((res) => setProvinces(res.data));
    }, []);

    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor="province">Provinsi</Label>
            </div>
            <Select
                id="province"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                color={error ? 'failure' : 'gray'}
            >
                <option value="">Pilih Provinsi</option>
                {Object.entries(provinces).map(([code, name]) => (
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
