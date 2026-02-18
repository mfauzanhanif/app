import RegionSelectCity from './region-select-city';
import RegionSelectDistrict from './region-select-district';
import RegionSelectProvince from './region-select-province';
import RegionSelectVillage from './region-select-village';

interface RegionSelectProps {
    data: {
        province_code: string;
        city_code: string;
        district_code: string;
        village_code: string;
    };
    onDataChange: (key: string, value: string) => void;
    errors?: Partial<Record<keyof RegionSelectProps['data'], string>>;
}

export default function RegionSelect({ data, onDataChange, errors }: RegionSelectProps) {
    const handleProvinceChange = (value: string) => {
        onDataChange('province_code', value);
        onDataChange('city_code', '');
        onDataChange('district_code', '');
        onDataChange('village_code', '');
    };

    const handleCityChange = (value: string) => {
        onDataChange('city_code', value);
        onDataChange('district_code', '');
        onDataChange('village_code', '');
    };

    const handleDistrictChange = (value: string) => {
        onDataChange('district_code', value);
        onDataChange('village_code', '');
    };

    const handleVillageChange = (value: string) => {
        onDataChange('village_code', value);
    };

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <RegionSelectProvince
                value={data.province_code}
                onChange={handleProvinceChange}
                error={errors?.province_code}
            />

            <RegionSelectCity
                provinceCode={data.province_code}
                value={data.city_code}
                onChange={handleCityChange}
                error={errors?.city_code}
            />

            <RegionSelectDistrict
                cityCode={data.city_code}
                value={data.district_code}
                onChange={handleDistrictChange}
                error={errors?.district_code}
            />

            <RegionSelectVillage
                districtCode={data.district_code}
                value={data.village_code}
                onChange={handleVillageChange}
                error={errors?.village_code}
            />
        </div>
    );
}
