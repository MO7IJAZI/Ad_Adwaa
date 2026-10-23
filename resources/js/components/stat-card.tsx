import type { LucideIcon } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Props = {
    label: string;
    value: string;
    hint?: string;
    icon: LucideIcon;
    className?: string;
};

export function StatCard({ label, value, hint, icon: Icon, className }: Props) {
    return (
        <Card className={cn('py-5', className)}>
            <CardContent className="flex items-center gap-4 px-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                </div>
                <div className="flex min-w-0 flex-col gap-0.5">
                    <span className="truncate text-sm text-muted-foreground">
                        {label}
                    </span>
                    <span className="truncate text-xl font-bold tabular-nums">
                        {value}
                    </span>
                    {hint && (
                        <span className="truncate text-xs text-muted-foreground">
                            {hint}
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
