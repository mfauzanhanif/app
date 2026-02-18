export default function FrontPagePanel() {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-emerald-900 flex-col justify-between p-12 text-white">
            <div className="absolute inset-0 bg-linear-to-br from-green-600 via-emerald-800 to-green-950 opacity-90 z-0" />
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-yellow-400 opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green-400 opacity-10 blur-3xl" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <img src="/logo-pondok.png" alt="Logo Dar Al Tauhid" className="h-10 w-auto" />
                    <span className="text-xl font-bold tracking-wide text-yellow-300 uppercase">
                        Yayasan Dar Al Tauhid Pusat
                    </span>
                </div>

                <h1 className="text-5xl font-extrabold leading-tight mb-6">
                    Super App <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-500">
                        Dar Al Tauhid
                    </span>
                </h1>
                <p className="text-emerald-100 text-lg max-w-md leading-relaxed">
                    Platform digital terpadu untuk Pendidik, Tenaga Kependidikan, dan
                    Wali Santri dalam memantau perkembangan akademik dan administrasi.
                </p>
            </div>

            <div className="relative z-10 mt-12 text-sm text-emerald-200/80">
                <p>Jl. KH. A. Syathori, RT/RW 06/02, Desa Arjawinangun, Kec. Arjawinangun, Kab. Cirebon - 45162</p>
                <p className="mt-1">&copy; 2026 Yayasan Dar Al Tauhid Pusat | All Rights Reserved</p>
            </div>
        </div>
    );
}
