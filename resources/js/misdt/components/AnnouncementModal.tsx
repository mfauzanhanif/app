import { useState, useEffect } from 'react';

export default function AnnouncementModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const dismissed = sessionStorage.getItem('ppdb-announcement-dismissed');
        if (!dismissed) {
            const timer = setTimeout(() => setIsOpen(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('ppdb-announcement-dismissed', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="animate-fade-in-up relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            <h2 className="font-heading text-lg font-bold">PENGUMUMAN PENTING</h2>
                        </div>
                        <button onClick={handleClose} className="rounded-full p-1 hover:bg-white/20" aria-label="Tutup">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="mt-1 text-sm text-red-100">PPDB T.A. 2026/2027</p>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                    <div className="mb-4 rounded-xl border border-red-100 bg-red-50 p-4">
                        <p className="mb-2 text-center text-lg font-bold text-red-700">🚫 MOHON MAAF, KUOTA SUDAH TERPENUHI</p>
                        <p className="text-center text-sm text-red-600">PENDAFTARAN GELOMBANG 2 (15 Februari - 8 Mei 2026) RESMI DITIADAKAN</p>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        Sehubungan dengan tingginya antusiasme masyarakat dan terpenuhinya kuota <strong>50 siswa</strong> pada Gelombang 1, maka
                        pendaftaran gelombang 2 resmi ditiadakan.
                    </p>

                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        Kami mengucapkan terima kasih yang sebesar-besarnya atas kepercayaan Ayah/Bunda kepada MI Dar Al Tauhid. Bagi calon siswa yang
                        mendaftar dan melaksanakan psikotes, informasi terkait hasil psikotes, wawancara, dan daftar ulang akan kami sampaikan melalui
                        WhatsApp resmi.
                    </p>

                    <p className="text-right text-xs font-medium text-gray-400">— Panitia PPDB MISDT</p>
                </div>

                {/* Footer */}
                <div className="border-t bg-gray-50 px-6 py-3">
                    <button
                        onClick={handleClose}
                        className="w-full rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                    >
                        Saya Mengerti
                    </button>
                </div>
            </div>
        </div>
    );
}
