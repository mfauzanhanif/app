import { useEffect, useState } from 'react';
import axios from 'axios';
import { HelperText, Label, Select } from 'flowbite-react';

interface RegionSelectVillageProps {
    districtCode: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function RegionSelectVillage({ districtCode, value, onChange, error }: RegionSelectVillageProps) {
    const [villages, setVillages] = useState<Record<string, string>>({});

    useEffect(() => {
        if (districtCode) {
            axios.get(`/api/location/villages?id_district=${districtCode}`)
                .then((res) => setVillages(res.data));
        } else {
            setVillages({});
        }
    }, [districtCode]);

    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor="village">Desa/Kelurahan</Label>
            </div>
            <Select
                id="village"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={!districtCode}
                color={error ? 'failure' : 'gray'}
            >
                <option value="">Pilih Desa/Kelurahan</option>
                {Object.entries(villages).map(([code, name]) => (
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
