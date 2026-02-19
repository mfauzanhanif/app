<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Surat Keterangan Lulus Seleksi</title>
    <style>
        @page {
            margin: 2cm 2.5cm;
        }

        body {
            font-family: 'DejaVu Sans', sans-serif;
            font-size: 12px;
            color: #1a1a1a;
            line-height: 1.6;
        }

        .header {
            text-align: center;
            border-bottom: 3px double #166534;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }

        .header h1 {
            font-size: 18px;
            font-weight: bold;
            color: #166534;
            margin: 0 0 4px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .header h2 {
            font-size: 14px;
            font-weight: normal;
            color: #374151;
            margin: 0 0 4px 0;
        }

        .header p {
            font-size: 10px;
            color: #6b7280;
            margin: 0;
        }

        .title-box {
            text-align: center;
            margin: 25px 0;
        }

        .title-box h3 {
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-bottom: 2px solid #166534;
            display: inline-block;
            padding-bottom: 5px;
            color: #166534;
        }

        .title-box .nomor {
            font-size: 11px;
            color: #6b7280;
            margin-top: 8px;
        }

        .content {
            margin: 25px 0;
            text-align: justify;
        }

        .data-table {
            width: 100%;
            margin: 15px 0;
        }

        .data-table td {
            padding: 4px 0;
            vertical-align: top;
        }

        .data-table .label {
            width: 160px;
            font-weight: 600;
            color: #374151;
        }

        .data-table .colon {
            width: 15px;
            text-align: center;
        }

        .exam-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }

        .exam-table th,
        .exam-table td {
            border: 1px solid #d1d5db;
            padding: 8px 12px;
            text-align: left;
        }

        .exam-table th {
            background-color: #f0fdf4;
            font-weight: 600;
            color: #166534;
            font-size: 11px;
            text-transform: uppercase;
        }

        .exam-table td {
            font-size: 11px;
        }

        .exam-table .score {
            text-align: center;
            font-weight: bold;
        }

        .result-badge {
            display: inline-block;
            padding: 2px 10px;
            border-radius: 10px;
            font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
        }

        .result-lulus {
            background-color: #dcfce7;
            color: #166534;
        }

        .closing {
            margin-top: 30px;
            text-align: justify;
        }

        .signature {
            margin-top: 40px;
            float: right;
            text-align: center;
            width: 250px;
        }

        .signature .date {
            margin-bottom: 60px;
            font-size: 11px;
        }

        .signature .name {
            font-weight: bold;
            border-top: 1px solid #1a1a1a;
            padding-top: 5px;
            display: inline-block;
        }

        .signature .position {
            font-size: 10px;
            color: #6b7280;
        }

        .footer {
            clear: both;
            margin-top: 100px;
            text-align: center;
            font-size: 9px;
            color: #9ca3af;
            border-top: 1px solid #e5e7eb;
            padding-top: 10px;
        }
    </style>
</head>

<body>
    <!-- Header -->
    <div class="header">
        <h1>Pondok Pesantren Dar Al Tauhid</h1>
        <h2>{{ $institution->name }}</h2>
        <p>Mencetak Generasi Qur'ani yang Berakhlak Mulia</p>
    </div>

    <!-- Title -->
    <div class="title-box">
        <h3>Surat Keterangan Lulus Seleksi</h3>
        <p class="nomor">No: {{ $candidate->registration_number }}</p>
    </div>

    <!-- Content -->
    <div class="content">
        <p>Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
        <p>Yang bertanda tangan di bawah ini, Panitia Penerimaan Santri Baru (PSB) {{ $institution->name }},
            dengan ini menerangkan bahwa:</p>

        <table class="data-table">
            <tr>
                <td class="label">Nama Lengkap</td>
                <td class="colon">:</td>
                <td><strong>{{ $candidate->name }}</strong></td>
            </tr>
            <tr>
                <td class="label">No. Pendaftaran</td>
                <td class="colon">:</td>
                <td>{{ $candidate->registration_number }}</td>
            </tr>
            <tr>
                <td class="label">Gelombang</td>
                <td class="colon">:</td>
                <td>{{ $wave->name }}</td>
            </tr>
            <tr>
                <td class="label">Lembaga Tujuan</td>
                <td class="colon">:</td>
                <td>{{ $institution->name }}</td>
            </tr>
            <tr>
                <td class="label">Status</td>
                <td class="colon">:</td>
                <td><strong style="color: #166534;">LULUS / DITERIMA</strong></td>
            </tr>
        </table>

        @if ($exams->count() > 0)
            <p>Dengan rincian hasil seleksi sebagai berikut:</p>

            <table class="exam-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Jenis Tes</th>
                        <th style="text-align: center;">Nilai</th>
                        <th style="text-align: center;">Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($exams as $index => $exam)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ ucwords(str_replace('_', ' ', $exam->type)) }}</td>
                            <td class="score">{{ $exam->score ?? '-' }}</td>
                            <td style="text-align: center;">
                                @if ($exam->result)
                                    <span class="result-badge result-lulus">{{ ucfirst($exam->result) }}</span>
                                @else
                                    -
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @endif
    </div>

    <!-- Closing -->
    <div class="closing">
        <p>Demikian surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya.</p>
        <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
    </div>

    <!-- Signature -->
    <div class="signature">
        <p class="date">{{ $generatedAt->translatedFormat('d F Y') }}</p>
        <p class="name">Panitia PSB</p>
        <p class="position">{{ $institution->name }}</p>
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>Dokumen ini dicetak secara otomatis oleh sistem PSB Dar Al Tauhid pada
            {{ $generatedAt->translatedFormat('d F Y H:i') }} WIB</p>
    </div>
</body>

</html>
