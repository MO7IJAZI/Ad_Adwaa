import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

import AppLogoIcon from '@/components/app-logo-icon';
import { Container } from '@/components/container';
import { toUrl } from '@/lib/utils';
import { home } from '@/routes';

const quickLinks = [
    { title: 'الرئيسية', href: home() },
    { title: 'الخدمات', href: '#services' },
    { title: 'كيف نعمل', href: '#how-it-works' },
    { title: 'الأسئلة الشائعة', href: '#faq' },
];

const services = [
    'إدارة حملات ميتا',
    'إعلانات جوجل',
    'الهوية الإعلانية والتصميم',
    'إدارة صفحات التواصل',
    'تصوير المنتجات',
    'كتابة المحتوى الإعلاني',
];

export function SiteFooter() {
    return (
        <footer className="border-t bg-muted/40">
            <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <AppLogoIcon className="size-5 fill-current" />
                        </div>
                        <span className="text-lg font-extrabold">أضواء</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        منصة سورية متخصصة في تصميم وإدارة الحملات الإعلانية الرقمية
                        للشركات والمتاجر في سوريا والعالم العربي.
                    </p>
                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            aria-label="فيسبوك"
                            className="flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                            <Facebook className="size-4" />
                        </a>
                        <a
                            href="#"
                            aria-label="إنستغرام"
                            className="flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                            <Instagram className="size-4" />
                        </a>
                        <a
                            href="mailto:hello@adwa.sy"
                            aria-label="البريد الإلكتروني"
                            className="flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                            <Mail className="size-4" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold">روابط سريعة</h3>
                    <ul className="flex flex-col gap-2.5">
                        {quickLinks.map((link) => (
                            <li key={link.title}>
                                <a
                                    href={toUrl(link.href)}
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold">خدماتنا</h3>
                    <ul className="flex flex-col gap-2.5">
                        {services.map((service) => (
                            <li key={service}>
                                <a
                                    href="#services"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold">تواصل معنا</h3>
                    <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>دمشق – شارع بغداد، مقابل السراي الكبير</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span dir="ltr">+963 11 123 4567</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span dir="ltr">hello@adwa.sy</span>
                        </li>
                    </ul>
                </div>
            </Container>

            <div className="border-t">
                <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} أضواء – جميع الحقوق محفوظة
                    </p>
                    <p>صُنع بعناية في سوريا</p>
                </Container>
            </div>
        </footer>
    );
}
