import ApplicationLogo from '@/Components_old/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (

            <div className="space-y-16">
                {children}
            </div>
    );
}
