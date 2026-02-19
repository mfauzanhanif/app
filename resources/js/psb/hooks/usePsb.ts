/**
 * PSB-specific hooks
 */

import { usePage } from '@inertiajs/react';

/**
 * Get shared PSB data from Inertia page props.
 */
export function usePsb() {
    const { props } = usePage<{
        auth?: {
            user: {
                id: number;
                name: string;
                email: string;
            } | null;
        };
        flash?: {
            success?: string;
            error?: string;
        };
    }>();

    return {
        user: props.auth?.user ?? null,
        isAuthenticated: !!props.auth?.user,
        flash: props.flash ?? {},
    };
}
