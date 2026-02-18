<?php

namespace Database\Seeders;

use Modules\Institution\Models\Institution;
use Illuminate\Database\Seeder;

class InstitutionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $address = 'Jl. KH. A. Syathori, RT/RW 02/06, Desa Arjawinangun, Kec. Arjawinangun, Kab. Cirebon, Jawa Barat - 45162';

        // 1. Yayasan Dar Al Tauhid Pusat (Root)
        $yayasan = Institution::updateOrCreate(
            ['code' => 'ydtp'],
            [
                'slug' => 'yayasan-dar-al-tauhid-pusat',
                'name' => 'Yayasan Dar Al Tauhid Pusat',
                'category' => 'yayasan',
                'type' => 'yayasan',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => null,
                'domain' => 'yayasan.daraltauhid.com',
                'email' => 'yayasan@daraltauhid.com',
                'address' => $address,
            ]
        );

        // 2. Pondok Pesantren Dar Al Tauhid
        Institution::updateOrCreate(
            ['code' => 'ppdt'],
            [
                'slug' => 'pondok-pesantren-dar-al-tauhid',
                'name' => 'Pondok Pesantren Dar Al Tauhid',
                'category' => 'pondok',
                'type' => 'pondok',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'daraltauhid.com',
                'email' => 'pondok@daraltauhid.com',
                'address' => $address,
            ]
        );

        // 3. SMP Plus Dar Al Tauhid
        Institution::updateOrCreate(
            ['code' => 'smp'],
            [
                'slug' => 'smp-plus-dar-al-tauhid',
                'name' => 'SMP Plus Dar Al Tauhid',
                'category' => 'formal',
                'type' => 'smp',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'smp-plus.daraltauhid.com',
                'email' => 'smp@daraltauhid.com',
                'address' => $address,
            ]
        );

        // 4. MA Nusantara Cirebon
        Institution::updateOrCreate(
            ['code' => 'ma'],
            [
                'slug' => 'ma-nusantara-cirebon',
                'name' => 'MA Nusantara Cirebon',
                'category' => 'formal',
                'type' => 'ma',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'manuscirebon.com',
                'email' => 'ma@daraltauhid.com',
                'address' => $address,
            ]
        );

        // 5. MI Dar Al Tauhid
        Institution::updateOrCreate(
            ['code' => 'mi'],
            [
                'slug' => 'mi-dar-al-tauhid',
                'name' => 'MI Dar Al Tauhid',
                'category' => 'formal',
                'type' => 'mi',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'mis.daraltauhid.com',
                'email' => 'mi@daraltauhid.com',
                'address' => $address,
            ]
        );

        // 6. Madrasah Dar Al Tauhid (Madrasah Diniyah)
        Institution::updateOrCreate(
            ['code' => 'mdt'],
            [
                'slug' => 'madrasah-dar-al-tauhid',
                'name' => 'Madrasah Dar Al Tauhid',
                'category' => 'non_formal',
                'type' => 'madrasah',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'madrasah.daraltauhid.com',
                'email' => 'madrasah@daraltauhid.com',
                'address' => $address,
            ]
        );

        // 7. TK Islam Wathaniyah
        Institution::updateOrCreate(
            ['code' => 'tk'],
            [
                'slug' => 'tk-islam-wathaniyah',
                'name' => 'TK Islam Wathaniyah',
                'category' => 'formal',
                'type' => 'tk',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'tk-islam.wathaniyah.sch.id',
                'email' => 'tk@wathaniyah.sch.id',
                'address' => $address,
            ]
        );

        // 8. SLB ABC Wathaniyah
        Institution::updateOrCreate(
            ['code' => 'slb'],
            [
                'slug' => 'slb-abc-wathaniyah',
                'name' => 'SLB ABC Wathaniyah',
                'category' => 'formal',
                'type' => 'slb',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'slb-abc.wathaniyah.sch.id',
                'email' => 'slb@wathaniyah.sch.id',
                'address' => $address,
            ]
        );

        // 9. TPQ Dar Al Tauhid
        Institution::updateOrCreate(
            ['code' => 'tpq'],
            [
                'slug' => 'tpq-dar-al-tauhid',
                'name' => 'TPQ Dar Al Tauhid',
                'category' => 'non_formal',
                'type' => 'tpq',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'tpq.daraltauhid.com',
                'email' => 'tpq@daraltauhid.com',
                'address' => $address,
            ]
        );

        // 10. MDTA Dar Al Tauhid
        Institution::updateOrCreate(
            ['code' => 'mdta'],
            [
                'slug' => 'mdta-dar-al-tauhid',
                'name' => 'MDTA Dar Al Tauhid',
                'category' => 'non_formal',
                'type' => 'mdta',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'mdta.daraltauhid.com',
                'email' => 'mdta@daraltauhid.com',
                'address' => $address,
            ]
        );

        // 11. LKSA Dar Al Tauhid
        Institution::updateOrCreate(
            ['code' => 'lksa'],
            [
                'slug' => 'lksa-dar-al-tauhid',
                'name' => 'LKSA Dar Al Tauhid',
                'category' => 'sosial',
                'type' => 'lksa',
                'is_internal' => true,
                'is_active' => true,
                'parent_id' => $yayasan->id,
                'domain' => 'lksa.daraltauhid.com',
                'email' => 'lksa@daraltauhid.com',
                'address' => $address,
            ]
        );
    }
}
