import { Head } from '@inertiajs/react';
import {
    Camera,
    Megaphone,
    MousePointerClick,
    Palette,
    PenLine,
    Share2,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { dashboard } from '@/routes';
import { create } from '@/routes/ad-requests';

const serviceOptions = [
    { value: 'meta-ads', title: 'إدارة حملات ميتا', icon: Megaphone },
    { value: 'google-ads', title: 'إعلانات جوجل', icon: MousePointerClick },
    {
        value: 'branding',
        title: 'الهوية الإعلانية والتصميم',
        icon: Palette,
    },
    {
        value: 'social-media',
        title: 'إدارة صفحات التواصل',
        icon: Share2,
    },
    { value: 'photography', title: 'تصوير المنتجات', icon: Camera },
    { value: 'copywriting', title: 'كتابة المحتوى الإعلاني', icon: PenLine },
];

const platformOptions = ['فيسبوك', 'إنستغرام', 'جوجل', 'تيك توك'];

const cityOptions = [
    'دمشق',
    'ريف دمشق',
    'حلب',
    'اللاذقية',
    'حمص',
    'حماة',
    'طرطوس',
    'السويداء',
    'كل سوريا',
];

const budgetOptions = [
    { value: 'under-500k', title: 'أقل من 500,000 ل.س' },
    { value: '500k-1m', title: '500,000 – 1,000,000 ل.س' },
    { value: '1m-3m', title: '1 – 3 ملايين ل.س' },
    { value: 'over-3m', title: 'أكثر من 3 ملايين ل.س' },
];

export default function AdRequestCreate() {
    const [selectedService, setSelectedService] = useState('meta-ads');
    const [selectedCity, setSelectedCity] = useState('كل سوريا');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast.info('إنشاء الطلبات سيُفعّل في المرحلة القادمة من المشروع');
    };

    return (
        <>
            <Head title="طلب إعلان جديد" />

            <div className="mx-auto flex h-full w-full max-w-3xl flex-col gap-6 p-4 lg:p-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold tracking-tight">
                        طلب إعلان جديد
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        املأ التفاصيل التالية وسيتواصل معك فريقنا خلال 24 ساعة
                        بخطة عمل وعرض سعر واضح.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">
                                نوع الخدمة
                            </CardTitle>
                            <CardDescription>
                                اختر الخدمة التي تحتاجها
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-3 sm:grid-cols-2">
                            {serviceOptions.map((service) => (
                                <label
                                    key={service.value}
                                    className={cn(
                                        'flex cursor-pointer items-center gap-3 rounded-lg border p-3.5 transition-colors',
                                        selectedService === service.value
                                            ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                            : 'hover:border-primary/40',
                                    )}
                                >
                                    <input
                                        type="radio"
                                        name="service"
                                        value={service.value}
                                        checked={
                                            selectedService === service.value
                                        }
                                        onChange={() =>
                                            setSelectedService(service.value)
                                        }
                                        className="sr-only"
                                    />
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                        <service.icon className="size-4" />
                                    </span>
                                    <span className="text-sm font-medium">
                                        {service.title}
                                    </span>
                                </label>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">
                                تفاصيل الطلب
                            </CardTitle>
                            <CardDescription>
                                أخبرنا أكثر عن مشروعك حتى نقدم لك أفضل خطة
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-5">
                            <div className="grid gap-2">
                                <Label htmlFor="title">عنوان الطلب</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="مثال: حملة إعلانية لمتجر الملابس"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">
                                    وصف المشروع أو الهدف
                                </Label>
                                <Textarea
                                    id="description"
                                    rows={4}
                                    placeholder="اكتب تفاصيل عن نشاطك، جمهورك المستهدف، وما الذي تريد تحقيقه من الحملة..."
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>المنصات المطلوبة</Label>
                                <div className="flex flex-wrap gap-2">
                                    {platformOptions.map((platform) => (
                                        <label
                                            key={platform}
                                            className="flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors has-[input:checked]:border-primary has-[input:checked]:bg-primary/5 has-[input:checked]:text-primary"
                                        >
                                            <input
                                                type="checkbox"
                                                className="sr-only"
                                                defaultChecked={
                                                    platform === 'فيسبوك'
                                                }
                                            />
                                            {platform}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="budget">
                                        الميزانية المتوقعة
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="اختر نطاق الميزانية" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {budgetOptions.map((option) => (
                                                <SelectItem
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.title}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">رقم الواتساب</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        dir="ltr"
                                        placeholder="[PII_PHONE_358]"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label>الاستهداف الجغرافي</Label>
                                <div className="flex flex-wrap gap-2">
                                    {cityOptions.map((city) => (
                                        <button
                                            key={city}
                                            type="button"
                                            onClick={() =>
                                                setSelectedCity(city)
                                            }
                                            className={cn(
                                                'cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors',
                                                selectedCity === city
                                                    ? 'border-primary bg-primary/5 text-primary'
                                                    : 'border-border text-muted-foreground hover:bg-accent hover:text-foreground',
                                            )}
                                        >
                                            {city}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col gap-3">
                        <Button type="submit" size="lg" className="sm:w-fit">
                            إرسال الطلب
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            بالإرسال أنت توافق على أن يتواصل معك فريقنا لمناقشة
                            الطلب قبل أي خطوة تالية.
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

AdRequestCreate.layout = {
    breadcrumbs: [
        {
            title: 'لوحة التحكم',
            href: dashboard(),
        },
        {
            title: 'طلب إعلان جديد',
            href: create(),
        },
    ],
};
