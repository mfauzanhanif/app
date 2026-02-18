import { useEffect, useState } from 'react';
import axios from 'axios';
import { HelperText, Label, Select } from 'flowbite-react';

interface RegionSelectDistrictProps {
    cityCode: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function RegionSelectDistrict({ cityCode, value, onChange, error }: RegionSelectDistrictProps) {
    const [districts, setDistricts] = useState<Record<string, string>>({});

    useEffect(() => {
        if (cityCode) {
            axios.get(`/api/location/districts?id_city=${cityCode}`)
                .then((res) => setDistricts(res.data));
        } else {
            setDistricts({});
        }
    }, [cityCode]);

    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor="district">Kecamatan</Label>
            </div>
            <Select
                id="district"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={!cityCode}
                color={error ? 'failure' : 'gray'}
            >
                <option value="">Pilih Kecamatan</option>
                {Object.entries(districts).map(([code, name]) => (
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
