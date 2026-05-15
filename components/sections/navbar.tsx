"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';

const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Mission', href: '#mission' },
    { name: 'About', href: '#about' },
    { name: 'Openings', href: '#current-openings' },
    { name: 'Values', href: '#values' },
    { name: 'Story', href: '#story' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'FAQs', href: '#faqs' },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on window resize (if screen becomes desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileMenuOpen]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'py-2 shadow-lg border-b border-primary/10' : 'py-3 shadow-md border-b border-primary/5'
                }`}
        >
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <div className="flex items-center justify-between">

                    {/* Logo - Responsive sizing */}
                    <div className="shrink-0">
                        <ScrollAnimator variant="fade" duration={600} threshold={0} once={true}>
                            <a
                                href="#home"
                                onClick={(e) => scrollToSection(e, '#home')}
                                className="flex items-center"
                            >
                                <Image
                                    src="/logo2.png"
                                    alt="Melange Rwanda Logo"
                                    width={800}
                                    height={150}
                                    className="transition-all duration-300 object-contain w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto"
                                    priority
                                />
                            </a>
                        </ScrollAnimator>
                    </div>

                    {/* Desktop Navigation - Only visible on lg (1024px) and above */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
                        {NAV_LINKS.map((link, i) => (
                            <ScrollAnimator
                                key={link.name}
                                variant="fade-down"
                                delay={i * 50}
                                duration={500}
                                threshold={0}
                                once={true}
                            >
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="relative text-sm xl:text-base font-medium text-[#333333] hover:text-primary transition-colors group whitespace-nowrap"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                                </a>
                            </ScrollAnimator>
                        ))}
                    </nav>

                    {/* Desktop Button - Only visible on lg (1024px) and above */}
                    <div className="hidden lg:flex items-center">
                        <ScrollAnimator variant="fade" delay={400} duration={600} threshold={0} once={true}>
                            <Button
                                className={`rounded-full font-montserrat font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg transition-all hover:scale-105 hover:shadow-primary/30 hover:shadow-xl whitespace-nowrap ${scrolled ? 'px-4 md:px-5 lg:px-6 py-2 text-xs md:text-sm lg:text-base' : 'px-5 md:px-6 lg:px-7 py-2.5 text-sm md:text-base'
                                    }`}
                                onClick={() => {
                                    document
                                        .getElementById('current-openings')
                                        ?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                APPLY NOW
                            </Button>
                        </ScrollAnimator>
                    </div>

                    {/* Mobile & Tablet Toggle - Only visible below lg (under 1024px) */}
                    <div className="lg:hidden flex items-center">
                        <button
                            type="button"
                            className="p-2 -mr-2 rounded-md text-[#333333] hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6 sm:h-7 sm:w-7" />
                            ) : (
                                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet Menu - Only visible below lg (under 1024px) */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
                        ? 'max-h-[600px] opacity-100'
                        : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-primary/10 shadow-xl z-50">
                    <div className="px-4 sm:px-6 md:px-8 pt-2 pb-6 space-y-1">
                        {NAV_LINKS.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="flex items-center justify-between px-3 py-4 sm:py-5 text-base sm:text-lg font-medium text-[#333333] hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                {link.name}
                                <span className="text-primary/30 text-sm">→</span>
                            </a>
                        ))}

                        <div className="pt-4 sm:pt-6 px-3">
                            <Button
                                className="w-full rounded-full font-montserrat font-semibold bg-primary hover:bg-primary/90 text-white shadow-md hover:scale-[1.02] transition-transform py-5 sm:py-6 text-base sm:text-lg"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    document
                                        .getElementById('current-openings')
                                        ?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                APPLY NOW
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}