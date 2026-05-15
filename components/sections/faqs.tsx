import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimator } from '@/components/scroll-animator';

export interface Faq {
    _id: string;
    question: string;
    answer: string;
}

export function FaqsSection({ faqs }: { faqs?: Faq[] }) {
    if (!faqs || faqs.length === 0) return null;

    return (
        <section id="faqs" className="w-full bg-slate-50 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimator variant="fade-down" duration={700}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-playfair tracking-tight mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-600 font-inter max-w-2xl mx-auto">
                            Got questions? We've got answers. If you have some other questions, feel free to contact us.
                        </p>
                    </div>
                </ScrollAnimator>

                <ScrollAnimator variant="slide-up" duration={700} delay={200}>
                    <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 px-6 sm:px-8 py-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={faq._id || index} value={`item-${index}`} className="border-b-slate-100 last:border-0 py-2">
                                <AccordionTrigger className="text-left font-bold text-slate-900 transition-colors text-base sm:text-lg">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed text-sm sm:text-base font-inter pb-4 whitespace-pre-wrap">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </ScrollAnimator>
            </div>
        </section>
    );
}
