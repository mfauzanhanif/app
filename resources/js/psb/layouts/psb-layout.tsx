import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import Navbar from '@/psb/components/Navbar';
import Footer from '@/psb/components/Footer';

interface PsbLayoutProps {
    children: ReactNode;
    title?: string;
    hideFooter?: boolean;
}

export default function PsbLayout({
    children,
    title,
    hideFooter,
}: PsbLayoutProps) {
    return (
        <>
            <Head title={title} />
            <div className="flex min-h-screen flex-col bg-linear-to-br from-emerald-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
                <Navbar />
                <main className="flex-1">{children}</main>
                {!hideFooter && <Footer />}
            </div>
        </>
    );
}
