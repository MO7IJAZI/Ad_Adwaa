import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Props = {
    icon: LucideIcon;
    title: string;
    description: string;
    features?: string[];
    className?: string;
};

export function ServiceCard({
    icon: Icon,
    title,
    description,
    features = [],
    className,
}: Props) {
    return (
        <Card
            className={cn(
                'group relative flex h-full flex-col gap-4 p-6 transition-all hover:border-primary/30 hover:shadow-md',
                className,
            )}
        >
            <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            </div>
            {features.length > 0 && (
                <ul className="mt-auto flex flex-col gap-2 border-t pt-4">
                    {features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
}
