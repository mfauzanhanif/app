export default function FrontPagePanel() {
    return (
        <div className="relative hidden flex-col justify-between overflow-hidden bg-emerald-900 p-12 text-white lg:flex lg:w-1/2">
            <div className="absolute inset-0 z-0 bg-linear-to-br from-green-600 via-emerald-800 to-green-950 opacity-90" />
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-yellow-400 opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-green-400 opacity-10 blur-3xl" />

            <div className="relative z-10">
                <div className="mb-8 flex items-center gap-3">
                    <img
                        src="/assets/images/logo/logo-pondok.svg"
                        alt="Logo Dar Al Tauhid"
                        className="h-10 w-auto"
                    />
                    <span className="text-xl font-bold tracking-wide text-yellow-300 uppercase">
                        Yayasan Dar Al Tauhid Pusat
                    </span>
                </div>

                <h1 className="mb-6 text-5xl leading-tight font-extrabold">
                    Super App <br />
                    <span className="bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                        Dar Al Tauhid
                    </span>
                </h1>
                <p className="max-w-md text-lg leading-relaxed text-emerald-100">
                    Platform digital terpadu untuk Pendidik, Tenaga
                    Kependidikan, dan Wali Santri dalam memantau perkembangan
                    akademik dan administrasi.
                </p>
            </div>

            <div className="relative z-10 mt-12 text-sm text-emerald-200/80">
                <p>
                    Jl. KH. A. Syathori, RT/RW 06/02, Desa Arjawinangun, Kec.
                    Arjawinangun, Kab. Cirebon - 45162
                </p>
                <p className="mt-1">
                    &copy; 2026 Yayasan Dar Al Tauhid Pusat | All Rights
                    Reserved
                </p>
            </div>
        </div>
    );
}
