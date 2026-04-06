import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { ScrollAnimator } from '@/components/scroll-animator';

export function Footer() {
  return (
    <footer className="w-full bg-[#0a2540] text-slate-300 relative overflow-hidden pt-1">
      {/* Rwandan Flag top bar – 3 side-by-side bands */}
      <div className="absolute top-0 left-0 w-full h-[4px] flex">
        <div className="flex-[5] bg-primary" />
        <div className="flex-[1] bg-secondary" />
        <div className="flex-[5] bg-accent" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Company Info */}
            <ScrollAnimator variant="fade-right" duration={700}>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Mélange Rwanda</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Empowering Rwanda&rsquo;s youth through quality education, skills development, and
                  meaningful career opportunities.
                </p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn' },
                    { href: 'https://twitter.com', Icon: Twitter, label: 'Twitter' },
                    { href: 'https://facebook.com', Icon: Facebook, label: 'Facebook' },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:-translate-y-1 transition-all duration-200"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            {/* Contact Info */}
            <ScrollAnimator variant="fade-up" duration={700} delay={100}>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span>Kigali, Rwanda</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                    <a href="mailto:hello@melangerwanda.org" className="hover:text-white transition-colors">
                      hello@melangerwanda.org
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                    <a href="tel:+250788123456" className="hover:text-white transition-colors">
                      +250 (0) 788 123 456
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollAnimator>

            {/* Quick Links */}
            <ScrollAnimator variant="fade-left" duration={700} delay={200}>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  
                  {['Current Openings', 'About Us', 'Community', 'Contact'].map((link, i) => (
                    <li key={i}>
                      <a
                        href={link === 'Current Openings' ? '#current-openings' : '#'}
                        className="hover:text-white hover:pl-1 transition-all duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                  <li><a target="_blank" href={`${process.env.NEXT_PUBLIC_SITEURL}/studio`} className="hover:text-white hover:pl-1 transition-all duration-200"
                     >Sanity Studio</a></li>
                </ul>
              </div>
            </ScrollAnimator>

          </div>

          {/* Divider + copyright */}
          <ScrollAnimator variant="fade-up" duration={600} delay={300}>
            <div className="border-t border-slate-700 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                <p>&copy; {new Date().getFullYear()} Mélange Rwanda. All rights reserved.</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </footer>
  );
}
