import { Head, Link } from '@inertiajs/react';
import { ClipboardList, Plus, Search } from 'lucide-react';

import { StatusBadge } from '@/components/status-badge';
import type { AdRequestStatus } from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { dashboard } from '@/routes';
import { create, index } from '@/routes/ad-requests';

type AdRequest = {
    id: number;
    title: string;
    service: string;
    budget: string;
    createdAt: string;
    status: AdRequestStatus;
};

const filters = [
    { label: 'الكل', value: 'all' },
    { label: 'قيد المراجعة', value: 'pending' },
    { label: 'قيد التنفيذ', value: 'in_progress' },
    { label: 'مكتمل', value: 'completed' },
] as const;

const requests: AdRequest[] = [
    {
        id: 1,
        title: 'حملة إطلاق تشكيلة الخريف',
        service: 'إدارة حملات ميتا',
        budget: '1,500,000 ل.س',
        createdAt: '21 تشرين الأول 2026',
        status: 'pending',
    },
    {
        id: 2,
        title: 'إعلان مواعيد العيادة',
        service: 'إعلانات جوجل',
        budget: '900,000 ل.س',
        createdAt: '19 تشرين الأول 2026',
        status: 'in_progress',
    },
    {
        id: 3,
        title: 'تصوير منتجات العطور',
        service: 'تصوير المنتجات',
        budget: '750,000 ل.س',
        createdAt: '14 تشرين الأول 2026',
        status: 'completed',
    },
    {
        id: 4,
        title: 'إدارة صفحة المتجر لشهر تشرين الثاني',
        service: 'إدارة صفحات التواصل',
        budget: '600,000 ل.س',
        createdAt: '18 تشرين الأول 2026',
        status: 'pending',
    },
    {
        id: 5,
        title: 'حملة خصومات الجمعة البيضاء',
        service: 'إدارة حملات ميتا',
        budget: '2,200,000 ل.س',
        createdAt: '14 تشرين الأول 2026',
        status: 'in_progress',
    },
    {
        id: 6,
        title: 'هوية إعلانية لمشروع الحلويات',
        service: 'الهوية الإعلانية والتصميم',
        budget: '500,000 ل.س',
        createdAt: '02 تشرين الأول 2026',
        status: 'completed',
    },
];

export default function AdRequestsIndex() {
    return (
        <>
            <Head title="طلباتي الإعلانية" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:gap-6 lg:p-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold tracking-tight">
                            طلباتي الإعلانية
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            جميع الطلبات المقدمة من حسابك مع حالتها وميزانيتها.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={create()}>
                            <Plus className="size-4" />
                            طلب إعلان جديد
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                        {filters.map((filter, filterIndex) => (
                            <button
                                key={filter.value}
                                type="button"
                                className={cn(
                                    'rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors',
                                    filterIndex === 0
                                        ? 'border-primary bg-primary text-primary-foreground'
                                        : 'border-border text-muted-foreground hover:bg-accent hover:text-foreground',
                                )}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full sm:max-w-xs">
                        <Search className="pointer-events-none absolute inset-y-0 start-3 my-auto size-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="ابحث في طلباتك..."
                            className="ps-9"
                        />
                    </div>
                </div>

                <Card>
                    <CardContent className="p-0">
                        <ul className="divide-y">
                            {requests.map((request) => (
                                <li
                                    key={request.id}
                                    className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <ClipboardList className="size-5" />
                                        </div>
                                        <div className="flex min-w-0 flex-col gap-0.5">
                                            <span className="truncate text-sm font-semibold">
                                                {request.title}
                                            </span>
                                            <span className="truncate text-xs text-muted-foreground">
                                                {request.service} ·{' '}
                                                {request.createdAt}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 sm:justify-end">
                                        <span className="text-sm text-muted-foreground tabular-nums">
                                            {request.budget}
                                        </span>
                                        <StatusBadge status={request.status} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <p className="text-center text-xs text-muted-foreground">
                    بيانات تجريبية للعرض فقط – سيتم ربطها بقاعدة البيانات في
                    المراحل القادمة.
                </p>
            </div>
        </>
    );
}

AdRequestsIndex.layout = {
    breadcrumbs: [
        {
            title: 'لوحة التحكم',
            href: dashboard(),
        },
        {
            title: 'طلباتي الإعلانية',
            href: index(),
        },
    ],
};
