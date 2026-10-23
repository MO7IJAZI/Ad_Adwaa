import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const adRequestStatuses = [
    'pending',
    'in_progress',
    'completed',
] as const;

export type AdRequestStatus = (typeof adRequestStatuses)[number];

const statusLabels: Record<AdRequestStatus, string> = {
    pending: 'قيد المراجعة',
    in_progress: 'قيد التنفيذ',
    completed: 'مكتمل',
};

const statusVariants = cva('', {
    variants: {
        status: {
            pending:
                'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400',
            in_progress:
                'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400',
            completed:
                'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400',
        },
    },
    defaultVariants: {
        status: 'pending',
    },
});

type Props = {
    status: AdRequestStatus;
    className?: string;
};

export function StatusBadge({ status, className }: Props) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap',
                statusVariants({ status }),
                className,
            )}
        >
            <span className="size-1.5 rounded-full bg-current" />
            {statusLabels[status]}
        </span>
    );
}
