import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { dashboard, login } from '@/routes';
import { create } from '@/routes/ad-requests';

const navLinks = [
    { title: 'الخدمات', href: '#services' },
    { title: 'كيف نعمل', href: '#how-it-works' },
    { title: 'لماذا أضواء', href: '#why-us' },
    { title: 'الأسئلة الشائعة', href: '#faq' },
];

export function SiteHeader() {
    const { auth } = usePage().props;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <AppLogoIcon className="size-5 fill-current" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg font-extrabold">
                                أضواء
                            </span>
                            <span className="hidden text-[10px] text-muted-foreground sm:block">
                                إعلانات رقمية احترافية
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-2 md:flex">
                        {auth.user ? (
                            <Button variant="ghost" asChild>
                                <Link href={dashboard()}>لوحة التحكم</Link>
                            </Button>
                        ) : (
                            <Button variant="ghost" asChild>
                                <Link href={login()}>تسجيل الدخول</Link>
                            </Button>
                        )}
                        <Button asChild>
                            <Link href={create()}>أنشئ طلب إعلان</Link>
                        </Button>
                    </div>

                    <button
                        type="button"
                        className="flex size-9 items-center justify-center rounded-md border md:hidden"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                    >
                        {menuOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </button>
                </div>
            </Container>

            {menuOpen && (
                <div className="border-t border-border/60 bg-background md:hidden">
                    <Container className="flex flex-col gap-1 py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.title}
                            </a>
                        ))}
                        <div className="mt-2 flex flex-col gap-2 border-t pt-3">
                            {auth.user ? (
                                <Button variant="outline" asChild>
                                    <Link href={dashboard()}>لوحة التحكم</Link>
                                </Button>
                            ) : (
                                <Button variant="outline" asChild>
                                    <Link href={login()}>تسجيل الدخول</Link>
                                </Button>
                            )}
                            <Button asChild>
                                <Link href={create()}>أنشئ طلب إعلان</Link>
                            </Button>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
