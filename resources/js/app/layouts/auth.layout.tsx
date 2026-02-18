import { PropsWithChildren } from 'react';
import FrontPagePanel from '@/app/components/front-page-panel';

interface AuthLayoutProps extends PropsWithChildren {
    title?: string;
    subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
    return (
        <div className="min-h-screen w-full flex bg-gray-50 font-sans text-gray-800">

            <FrontPagePanel />

            {/* RIGHT — Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 bg-white relative">

                {/* Mobile header */}
                <div className="lg:hidden w-full flex flex-col items-center mb-8 text-center">
                    <img src="/logo-pondok.png" alt="Logo" className="h-20 w-auto mb-4 drop-shadow-md" />
                    <h2 className="text-2xl font-bold text-emerald-800">Super App</h2>
                    <p className="text-sm text-gray-500 font-medium">Dar Al Tauhid</p>
                </div>

                <div className="w-full max-w-md space-y-8">
                    {(title || subtitle) && (
                        <div className="text-center lg:text-left">
                            {title && <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>}
                            {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
                        </div>
                    )}

                    {children}
                </div>
            </div>
        </div>
    );
}
