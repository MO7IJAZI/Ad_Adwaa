import { cn } from '@/lib/utils';

type Props = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'start' | 'center';
    className?: string;
};

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'center',
    className,
}: Props) {
    return (
        <div
            className={cn(
                'flex flex-col gap-3',
                align === 'center'
                    ? 'items-center text-center'
                    : 'items-start text-start',
                className,
            )}
        >
            {eyebrow && (
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    {eyebrow}
                </span>
            )}
            <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
                    {description}
                </p>
            )}
        </div>
    );
}
