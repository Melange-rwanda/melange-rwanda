import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { ScrollAnimator } from '@/components/scroll-animator';

export function Footer({ data }: { data?: any }) {
  const companyTitle = data?.companyTitle || 'Mélange Rwanda';
  const companyDescription = data?.companyDescription || "Empowering Rwanda's youth through quality education, skills development, and meaningful career opportunities.";
  const location = data?.contactInfo?.location || 'Kigali, Rwanda';
  const email = data?.contactInfo?.email || 'hello@melangerwanda.org';
  const phone2 = data?.contactInfo?.phone2 || '+250 (0) 727 666 338';
  const phone1 = data?.contactInfo?.phone1 || '+250 (0) 792 948 848';
  const whatsapp = data?.contactInfo?.whatsapp || '+250 (0) 788 123 456';

  const socialLinks = [
    { href: data?.socialLinks?.linkedin || 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn' },
    { href: data?.socialLinks?.twitter || 'https://twitter.com', Icon: Twitter, label: 'Twitter' },
    { href: data?.socialLinks?.facebook || 'https://facebook.com', Icon: Facebook, label: 'Facebook' },
  ];

  // Quick links as an array with proper anchors
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Current Openings', href: '#current-openings' },
  ];

  // Helper function to clean phone numbers for tel: links
  const cleanPhoneNumber = (phone: string) => {
    return phone.replace(/[^0-9+]/g, '');
  };

  return (
    <footer className="w-full bg-[#0a2540] text-slate-300 relative overflow-hidden pt-1">
      {/* Rwandan Flag top bar – 3 side-by-side bands */}
      <div className="absolute top-0 left-0 w-full h-[4px] flex">
        <div className="flex-5 bg-primary" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-5 bg-accent" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Company Info */}
            <ScrollAnimator variant="fade-right" duration={700}>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{companyTitle}</h3>
                <p className="text-sm leading-relaxed mb-4">
                  {companyDescription}
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(({ href, Icon, label }) => (
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
                    <MapPin className="w-5 h-5 shrink-0 text-primary" />
                    <span>{location}</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 shrink-0 text-primary" />
                    <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                      {email}
                    </a>
                  </li>
                  {/* Phone Number 1 */}
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-primary" />
                    <a href={`tel:${cleanPhoneNumber(phone1)}`} className="hover:text-white transition-colors">
                      {phone1}
                    </a>
                  </li>
                  {/* Phone Number 2 */}
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-primary" />
                    <a href={`tel:${cleanPhoneNumber(phone2)}`} className="hover:text-white transition-colors">
                      {phone2}
                    </a>
                  </li>
                  {/* WhatsApp Number */}
                  <li className="flex gap-3">
                    <MessageCircle className="w-5 h-5 shrink-0 text-primary" />
                    <a 
                      href={`https://wa.me/${cleanPhoneNumber(whatsapp)}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {whatsapp} (WhatsApp)
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
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="hover:text-white hover:pl-1 transition-all duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  {/* <li>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer"
                      href={`${process.env.NEXT_PUBLIC_SITEURL}/studio`} 
                      className="hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      Sanity Studio
                    </a>
                  </li> */}
                </ul>
              </div>
            </ScrollAnimator>

          </div>

          {/* Divider + copyright */}
          <ScrollAnimator variant="fade-up" duration={600} delay={300}>
            <div className="border-t border-slate-700 pt-8">
              <div className=" text-slate-400">
                <p className="text-center">&copy; {new Date().getFullYear()} Mélange Rwanda. All rights reserved.</p>
              </div>
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </footer>
  );
}