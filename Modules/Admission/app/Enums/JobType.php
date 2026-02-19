<?php

namespace Modules\Admission\Enums;

enum JobType: string
{
    case AKUNTAN = 'Akuntan';
    case APOTEKER = 'Apoteker';
    case ARSITEK = 'Arsitek';
    case BIDAN = 'Bidan';
    case BURUH = 'Buruh';
    case BURUH_HARIAN_LEPAS = 'Buruh Harian Lepas';
    case DOKTER = 'Dokter';
    case DOSEN = 'Dosen';
    case GURU = 'Guru';
    case IRT = 'IRT';
    case KARYAWAN_BUMN = 'Karyawan BUMN/BUMD';
    case KARYAWAN_SWASTA = 'Karyawan Swasta';
    case PERANGKAT_DESA = 'Kepala/Perangkat Desa';
    case NELAYAN = 'Nelayan';
    case PEDAGANG = 'Pedagang';
    case PELAUT = 'Pelaut';
    case PENSIUNAN = 'Pensiunan';
    case PERAWAT = 'Perawat';
    case PETANI = 'Petani';
    case PETERNAK = 'Peternak';
    case PNS = 'PNS';
    case POLRI = 'Polri';
    case SENIMAN = 'Seniman';
    case SOPIR = 'Sopir';
    case TNI = 'TNI';
    case WARTAWAN = 'Wartawan';
    case WIRASWASTA = 'Wiraswasta';
    case TIDAK_BEKERJA = 'Tidak Bekerja';
    case LAINNYA = 'Lainnya';
}
