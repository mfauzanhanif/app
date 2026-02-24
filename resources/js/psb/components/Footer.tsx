export default function Footer() {
    return (
        <footer className="border-t border-emerald-100/80 bg-white/60 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/60">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    <div className="text-center sm:text-left">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Pondok Pesantren Dar Al Tauhid
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Mencetak Generasi Qur'ani yang Berakhlak Mulia
                        </p>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-600">
                        &copy; {new Date().getFullYear()} Dar Al Tauhid. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
