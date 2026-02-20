import { PropsWithChildren } from 'react';
import FrontPagePanel from '@/app/components/front-page-panel';

interface AuthLayoutProps extends PropsWithChildren {
    title?: string;
    subtitle?: string;
}

export default function AuthLayout({
    children,
    title,
    subtitle,
}: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen w-full bg-gray-50 font-sans text-gray-800">
            <FrontPagePanel />

            {/* RIGHT — Content */}
            <div className="relative flex w-full flex-col items-center justify-center bg-white p-6 md:p-12 lg:w-1/2 lg:p-24">
                {/* Mobile header */}
                <div className="mb-8 flex w-full flex-col items-center text-center lg:hidden">
                    <img
                        src="/assets/images/logo/logo-pondok.svg"
                        alt="Logo"
                        className="mb-4 h-20 w-auto drop-shadow-md"
                    />
                    <h2 className="text-2xl font-bold text-emerald-800">
                        Super App
                    </h2>
                    <p className="text-sm font-medium text-gray-500">
                        Dar Al Tauhid
                    </p>
                </div>

                <div className="w-full max-w-md space-y-8">
                    {(title || subtitle) && (
                        <div className="text-center lg:text-left">
                            {title && (
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                    {title}
                                </h2>
                            )}
                            {subtitle && (
                                <p className="mt-2 text-sm text-gray-600">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    )}

                    {children}
                </div>
            </div>
        </div>
    );
}
