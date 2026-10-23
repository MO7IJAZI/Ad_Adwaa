import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Camera,
    CheckCircle2,
    ClipboardList,
    Eye,
    Megaphone,
    MousePointerClick,
    Palette,
    Wallet,
} from 'lucide-react';

import { StatCard } from '@/components/stat-card';
import { StatusBadge } from '@/components/status-badge';
import type { AdRequestStatus } from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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

const summary = [
    {
        label: 'طلبات قيد المراجعة',
        value: '2',
        hint: 'بانتظار مراجعة الفريق',
        icon: ClipboardList,
    },
    {
        label: 'حملات نشطة',
        value: '3',
        hint: 'تنتهي خلال 12 يوماً',
        icon: Eye,
    },
    {
        label: 'طلبات مكتملة',
        value: '12',
        hint: 'هذا العام',
        icon: CheckCircle2,
    },
    {
        label: 'الميزانية المستهلكة',
        value: '4.85M ل.س',
        hint: 'من أصل 7 ملايين هذا الشهر',
        icon: Wallet,
    },
];

const recentRequests: AdRequest[] = [
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
        budget: '750,000 ل.س',
        service: 'تصوير المنتجات',
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
];

export default function Dashboard() {
    return (
        <>
            <Head title="لوحة التحكم" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4 lg:gap-6 lg:p-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold tracking-tight">
                            مرحباً بك في لوحة التحكم
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            تابع طلباتك الإعلانية وحملاتك النشطة من مكان واحد.
                        </p>
                    </div>
                    <Button asChild className="sm:w-auto">
                        <Link href={create()}>
                            <ClipboardList className="size-4" />
                            طلب إعلان جديد
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {summary.map((item) => (
                        <StatCard
                            key={item.label}
                            label={item.label}
                            value={item.value}
                            hint={item.hint}
                            icon={item.icon}
                        />
                    ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-base">
                                أحدث طلباتك الإعلانية
                            </CardTitle>
                            <CardDescription>
                                آخر الطلبات المقدمة من حسابك وحالتها الحالية
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="divide-y">
                                {recentRequests.map((request) => (
                                    <li
                                        key={request.id}
                                        className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="flex min-w-0 flex-col gap-1">
                                            <span className="truncate text-sm font-semibold">
                                                {request.title}
                                            </span>
                                            <span className="truncate text-xs text-muted-foreground">
                                                {request.service} ·{' '}
                                                {request.createdAt}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                                            <StatusBadge
                                                status={request.status}
                                            />
                                            <span className="text-xs text-muted-foreground tabular-nums">
                                                {request.budget}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant="outline"
                                className="mt-2 w-full"
                                asChild
                            >
                                <Link href={index()}>
                                    عرض كل الطلبات
                                    <ArrowLeft className="size-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle className="text-base">
                                خدماتنا المتاحة
                            </CardTitle>
                            <CardDescription>
                                اختر الخدمة المناسبة وابدأ طلبك الآن
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            {[
                                {
                                    title: 'إدارة حملات ميتا',
                                    icon: Megaphone,
                                },
                                {
                                    title: 'إعلانات جوجل',
                                    icon: MousePointerClick,
                                },
                                {
                                    title: 'تصميم الهوية الإعلانية',
                                    icon: Palette,
                                },
                                {
                                    title: 'تصوير المنتجات',
                                    icon: Camera,
                                },
                            ].map((service) => (
                                <Link
                                    key={service.title}
                                    href={create()}
                                    className="group flex items-center justify-between gap-3 rounded-lg border p-3 transition-colors hover:border-primary/40 hover:bg-accent"
                                >
                                    <span className="flex items-center gap-2.5 text-sm font-medium">
                                        <span className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                                            <service.icon className="size-4" />
                                        </span>
                                        {service.title}
                                    </span>
                                    <ArrowLeft className="size-4 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
                                </Link>
                            ))}
                            <p className="mt-2 text-center text-xs text-muted-foreground">
                                هل تبحث عن خدمة أخرى؟ تواصل معنا وسنوفرها لك.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'لوحة التحكم',
            href: dashboard(),
        },
    ],
};
