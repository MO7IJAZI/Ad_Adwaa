import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    BarChart3,
    Camera,
    ChevronDown,
    Clock,
    Headset,
    MapPin,
    Palette,
    PenLine,
    Quote,
    Search,
    Share2,
    ShieldCheck,
    Sparkles,
    Star,
    Target,
    Wallet,
} from 'lucide-react';
import { useState } from 'react';

import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { StatusBadge } from '@/components/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { create } from '@/routes/ad-requests';
import { cn } from '@/lib/utils';

const services = [
    {
        icon: Target,
        title: 'إدارة حملات ميتا',
        description:
            'إدارة احترافية لحملات فيسبوك وإنستغرام باستهداف دقيق يصل جمهورك في سوريا بأقل تكلفة ممكنة.',
        features: [
            'استهداف دقيق حسب المدينة والاهتمام',
            'تحسين يومي للنتائج',
            'تقارير أسبوعية واضحة',
        ],
    },
    {
        icon: Search,
        title: 'إعلانات جوجل',
        description:
            'تظهر أولاً عندما يبحث عملاؤك عن خدماتك، مع حملات بحث وعرض شبكية مصممة بعناية.',
        features: [
            'كلمات مفتاحية مدروسة',
            'تحسين مستمر للتكلفة',
            'صفحات هبوط فعالة',
        ],
    },
    {
        icon: Palette,
        title: 'الهوية الإعلانية والتصميم',
        description:
            'تصاميم إعلانية وأغلفة وهويات بصرية متكاملة تعكس شخصية علامتك التجارية وتلفت الأنظار.',
        features: [
            'تصاميم متوافقة مع الهوية',
            'نسخ متعددة للتجربة',
            'تسليم بجركات عالية',
        ],
    },
    {
        icon: Share2,
        title: 'إدارة صفحات التواصل',
        description:
            'ندير صفحاتك على فيسبوك وإنستغرام بتقويم نشر منتظم وردود سريعة على تفاعلات العملاء.',
        features: [
            'خطة محتوى شهرية',
            'ردود على الرسائل والتعليقات',
            'نمو تدريجي للمتابعين',
        ],
    },
    {
        icon: Camera,
        title: 'تصوير المنتجات',
        description:
            'جلسات تصوير احترافية لمنتجاتك في استوديو مجهز أو في موقعك، بإضاءة وتجهيزات عصرية.',
        features: [
            'تصوير استوديو وميداني',
            'معالجة وتحسين الصور',
            'فيديوهات قصيرة للإعلانات',
        ],
    },
    {
        icon: PenLine,
        title: 'كتابة المحتوى الإعلاني',
        description:
            'نصوص إعلانية بالعربية الفصحى والعامية السورية تلمس اهتمامات جمهورك وتدفعهم للتفاعل.',
        features: [
            'نصوص مصممة لكل منصة',
            'عناوين تجذب الانتباه',
            'مراجعة وتعديل مجاني',
        ],
    },
];

const steps = [
    {
        title: 'أنشئ طلبك',
        description:
            'املأ نموذج طلب الإعلان وحدد نوع الخدمة وجمهورك المستهدف وميزانيتك المتوقعة.',
    },
    {
        title: 'مراجعة وعرض سعر',
        description:
            'يتواصل فريقنا معك خلال 24 ساعة لمناقشة التفاصيل وتحديد الخطة والميزانية النهائية.',
    },
    {
        title: 'إطلاق الحملة',
        description:
            'نجهز التصاميم والنصوص ونطلق الحملة على المنصات المتفق عليها بموافقتك.',
    },
    {
        title: 'متابعة وتقارير',
        description:
            'تابع أداء حملتك من لوحة التحكم واستلم تقارير دورية بنتائج واضحة وأرقام حقيقية.',
    },
];

const features = [
    {
        icon: MapPin,
        title: 'فهم عميق للسوق السوري',
        description:
            'نرسم الاستهداف حسب المدن والأحياء وسلوك المستخدم السوري الفعلي.',
    },
    {
        icon: ShieldCheck,
        title: 'شفافية كاملة',
        description:
            'تعرف أين تذهب كل ليرة من ميزانيتك، مع تقارير مفصلة دون التباس.',
    },
    {
        icon: Clock,
        title: 'انطلاق سريع',
        description: 'معظم الحملات تنطلق خلال 72 ساعة من الموافقة على الطلب.',
    },
    {
        icon: Wallet,
        title: 'ميزانيات مرنة',
        description:
            'نقبل ميزانيات صغيرة ونكبّرها تدريجياً حسب النتائج، بالليرة السورية أو الدولار.',
    },
    {
        icon: BarChart3,
        title: 'تقارير مبسطة وواضحة',
        description:
            'لوحة تحكم تعرض أرقام حملاتك بلغة بسيطة: الوصول، التفاعل، والنتائج.',
    },
    {
        icon: Headset,
        title: 'دعم قريب منك',
        description:
            'فريق دعم يرد عليك عبر واتساب وأوقات العمل الرسمية، باللهجة التي تحبها.',
    },
];

const stats = [
    { value: '+250', label: 'حملة إعلانية منفذة' },
    { value: '+120', label: 'عميل من مختلف المدن' },
    { value: '4', label: 'منصات إعلانية' },
    { value: '98%', label: 'رضا العملاء' },
];

const testimonials = [
    {
        name: 'ريم الحلبي',
        business: 'بوتيك شام – دمشق',
        content:
            'خلال شهرين فقط تضاعفت مبيعات المتجر تقريباً. فريق أضواء فهم المتجر ونصحنا قبل ما نصرّف أي مبلغ على الإعلانات.',
    },
    {
        name: 'أحمد سويدان',
        business: 'مطعم الياسمين – اللاذقية',
        content:
            'التقارير الأسبوعية واضحة وبأرقام مفهومة، وصار عندنا أرقام حقيقية نعتمد عليها بدل التخمين.',
    },
    {
        name: 'لينا قصاب',
        business: 'عيادة النور لطب الأسنان – حلب',
        content:
            'طلبت حملة للمواعيد الجديدة ووصلتنا حجوزات من أول أسبوع. التنسيق معهم سهل والرد سريع.',
    },
];

const faqs = [
    {
        question: 'كم تكلفة الحملة الإعلانية؟',
        answer: 'التكلفة تعتمد على نوع الخدمة وجمهورك المستهدف ومدة الحملة. بعد إنشاء طلبك نراجعه ونرسل لك عرض سعر واضح خلال 24 ساعة، ولا يوجد أي التزام قبل موافقتك.',
    },
    {
        question: 'هل يمكنني إيقاف الحملة أو تعديلها؟',
        answer: 'نعم، يمكنك طلب إيقاف أو تعديل الحملة في أي وقت من لوحة التحكم أو بالتواصل مع مدير حسابك، ونطبق التغيير خلال 24 ساعة.',
    },
    {
        question: 'كيف تتم عملية الدفع؟',
        answer: 'حالياً يتم تنسيق الدفع مع فريق خدمة العملاء بعد الموافقة على عرض السعر، ونوفر طرق دفع محلية وعالمية مع مراعاة الوضع في سوريا.',
    },
    {
        question: 'كم يستغرق إطلاق الحملة؟',
        answer: 'بعد اعتماد التصاميم والنصوص، تنطلق معظم الحملات خلال 72 ساعة كحد أقصى، وتظهر النتائج الأولى خلال الأيام الأولى من الإطلاق.',
    },
    {
        question: 'هل تخدمون مدن سوريا كلها؟',
        answer: 'نعم، نخدم عملاء في دمشق وريفها وحلب واللاذقية وحمص وحماة وطرطوس والسويداء ودير الزور والحسكة، إضافة إلى السوريين في الخارج.',
    },
];

function Section({
    id,
    className,
    children,
}: {
    id?: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className={cn('scroll-mt-20 py-16 sm:py-20', className)}
        >
            {children}
        </section>
    );
}

export default function Welcome() {
    return (
        <>
            <Head title="أضواء | منصة الإعلانات الرقمية في سوريا" />

            <div className="flex min-h-svh flex-col">
                <SiteHeader />

                <main className="flex-1">
                    <HeroSection />
                    <ServicesSection />
                    <HowItWorksSection />
                    <WhyUsSection />
                    <StatsSection />
                    <TestimonialsSection />
                    <FaqSection />
                    <CtaSection />
                </main>

                <SiteFooter />
            </div>
        </>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/[0.06] via-background to-background">
            <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
                <div className="flex flex-col items-start gap-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        منصة سورية لإدارة الحملات الإعلانية
                    </span>
                    <h1 className="text-3xl leading-[1.2] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                        أطلق حملتك الإعلانية باحتراف،
                        <span className="text-primary">
                            {' '}
                            من دمشق إلى العالم
                        </span>
                    </h1>
                    <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                        أضواء منصة سورية تحوّل فكرتك إلى حملة إعلانية ناجحة على
                        ميتا وجوجل ومنصات التواصل — تصميم، إدارة، وتقارير واضحة
                        بكل خطوة.
                    </p>
                    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                        <Button
                            size="lg"
                            asChild
                            className="h-12 px-8 text-base"
                        >
                            <Link href={create()}>
                                أنشئ طلب إعلان
                                <ArrowLeft className="size-4" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="h-11 text-base"
                        >
                            <a href="#services">استكشف خدماتنا</a>
                        </Button>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="size-4 text-primary" />
                            بدون أي التزام مسبق
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="size-4 text-primary" />
                            إطلاق الحملة خلال 72 ساعة
                        </span>
                    </div>
                </div>

                <CampaignPreview />
            </Container>
        </section>
    );
}

function CampaignPreview() {
    const bars = [38, 52, 44, 68, 58, 82, 74, 92];

    return (
        <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-bl from-primary/15 via-transparent to-amber-400/20 blur-2xl" />
            <Card className="relative shadow-xl">
                <CardContent className="flex flex-col gap-5 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                أداء الحملة الحالية
                            </p>
                            <p className="text-lg font-bold">
                                حملة مطعم الشام – دمشق
                            </p>
                        </div>
                        <StatusBadge status="in_progress" />
                    </div>
                    <div
                        className="flex items-end justify-between gap-2"
                        dir="ltr"
                    >
                        {bars.map((bar, index) => (
                            <div
                                key={bar}
                                className="flex w-full flex-col items-center gap-1.5"
                            >
                                <div
                                    className={cn(
                                        'w-full rounded-t-md',
                                        index === bars.length - 1
                                            ? 'bg-amber-400'
                                            : 'bg-primary/80',
                                    )}
                                    style={{ height: `${bar}%` }}
                                />
                                <span className="text-[10px] text-muted-foreground tabular-nums">
                                    {index + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3 border-t pt-4">
                        {[
                            { label: 'الوصول', value: '48.2 ألف' },
                            { label: 'التفاعل', value: '3,164' },
                            { label: 'العملاء الجدد', value: '+216' },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col gap-0.5 text-center"
                            >
                                <span className="text-xs text-muted-foreground">
                                    {item.label}
                                </span>
                                <span className="text-sm font-bold tabular-nums">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function ServicesSection() {
    return (
        <Section id="services" className="bg-muted/30">
            <Container className="flex flex-col gap-12">
                <SectionHeading
                    eyebrow="خدماتنا"
                    title="كل ما تحتاجه علامتك التجارية في مكان واحد"
                    description="من الفكرة إلى النتائج، فريق متخصص يدير إعلانك من البداية للنهاية."
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}

function HowItWorksSection() {
    return (
        <Section id="how-it-works">
            <Container className="flex flex-col gap-12">
                <SectionHeading
                    eyebrow="كيف نعمل"
                    title="من طلبك إلى حملة ناجحة في 4 خطوات"
                    description="عملية واضحة وشفافة من لحظة إنشاء الطلب حتى استلام تقارير النتائج."
                />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="relative flex flex-col items-center gap-4 text-center"
                        >
                            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                                {index + 1}
                            </div>
                            <h3 className="font-semibold">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

function WhyUsSection() {
    return (
        <Section id="why-us" className="bg-muted/30">
            <Container className="flex flex-col gap-12">
                <SectionHeading
                    eyebrow="لماذا أضواء"
                    title="شريك إعلاني يفهم سوقك ويحترم ميزانيتك"
                    description="اجمعنا خبرة تسويق رقمي مع فهم حقيقي للواقع السوري، لنقدم نتائج تناسب عملك."
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex items-start gap-4 rounded-xl border bg-card p-5"
                        >
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <feature.icon className="size-5" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-semibold">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

function StatsSection() {
    return (
        <section className="bg-primary py-14 text-primary-foreground">
            <Container className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col items-center gap-1 text-center"
                    >
                        <span className="text-3xl font-extrabold sm:text-4xl">
                            {stat.value}
                        </span>
                        <span className="text-sm text-primary-foreground/80">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </Container>
        </section>
    );
}

function TestimonialsSection() {
    return (
        <Section>
            <Container className="flex flex-col gap-12">
                <SectionHeading
                    eyebrow="قالوا عنا"
                    title="عملاء حقيقيون، نتائج حقيقية"
                    description="آراء أصحاب المتاجر والمشاريع الذين أطلقوا حملاتهم معنا."
                />
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <Card key={item.business}>
                            <CardContent className="flex h-full flex-col gap-4 p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-0.5 text-amber-500">
                                        {Array.from({ length: 5 }).map(
                                            (_, index) => (
                                                <Star
                                                    key={index}
                                                    className="size-4 fill-current"
                                                />
                                            ),
                                        )}
                                    </div>
                                    <Quote className="size-5 text-muted-foreground/40" />
                                </div>
                                <p className="text-sm leading-relaxed">
                                    {item.content}
                                </p>
                                <div className="mt-auto border-t pt-4">
                                    <p className="text-sm font-semibold">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {item.business}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section id="faq" className="bg-muted/30">
            <Container className="flex flex-col gap-10">
                <SectionHeading
                    eyebrow="الأسئلة الشائعة"
                    title="كل ما تريد معرفته قبل إطلاق حملتك"
                />
                <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
                    {faqs.map((faq, index) => {
                        return (
                            <div
                                key={faq.question}
                                className="rounded-xl border bg-card"
                            >
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between gap-4 p-5 text-start"
                                    onClick={() =>
                                        setOpenIndex(
                                            openIndex === index ? null : index,
                                        )
                                    }
                                >
                                    <span className="text-sm font-semibold sm:text-base">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={cn(
                                            'size-4 shrink-0 text-muted-foreground transition-transform',
                                            openIndex === index && 'rotate-180',
                                        )}
                                    />
                                </button>
                                {openIndex === index && (
                                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}

function CtaSection() {
    return (
        <Section>
            <Container>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-primary to-primary/80 px-6 py-14 text-center text-primary-foreground sm:px-12">
                    <div className="absolute start-8 -top-16 size-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute end-10 -bottom-20 size-48 rounded-full bg-amber-400/20 blur-2xl" />
                    <div className="relative flex flex-col items-center gap-5">
                        <h2 className="max-w-2xl text-2xl font-extrabold text-balance sm:text-3xl">
                            جاهز تطلق حملتك الإعلانية القادمة؟
                        </h2>
                        <p className="max-w-xl text-sm leading-relaxed text-pretty text-primary-foreground/85 sm:text-base">
                            أنشئ طلبك الآن، وفريقنا يراجعه ويتواصل معك خلال 24
                            ساعة بخطة عمل وميزانية واضحة.
                        </p>
                        <Button
                            size="lg"
                            variant="secondary"
                            asChild
                            className="h-12 bg-white px-8 text-base font-bold text-primary hover:bg-white/90"
                        >
                            <Link href={create()}>أنشئ طلب إعلان الآن</Link>
                        </Button>
                        <p className="text-xs text-primary-foreground/70">
                            لا يتطلب بطاقة مصرفية – تجربة مجانية تماماً
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
