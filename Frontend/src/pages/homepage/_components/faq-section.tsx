"use client"
import SectionHeaderDescription from "@/components/section-header-description"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqData } from "@/data/faq-data"

const FAQSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
            <div className="container mx-auto">
                <div className="text-left mb-16">
                    <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-6">
                        Frequently Asked{" "}
                        <span className="text-primary relative">
                            Questions
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                                viewBox="0 0 100 12"
                                fill="currentColor"
                            >
                                <path d="M0 8c30-4 70-4 100 0v4H0z" />
                            </svg>
                        </span>
                    </h2>
                    <div className="max-w-3xl">
                        <SectionHeaderDescription title=" Get answers to the most common questions about our property advocacy services and how we can help you secure
                        your dream property."/>
                    </div>
                </div>

                {/* FAQ Grid Layout */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Left Column - Stats */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Success Rate</span>
                                        <span className="text-2xl font-bold text-primary">98%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Avg. Savings</span>
                                        <span className="text-2xl font-bold text-primary">$47K</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Properties Secured</span>
                                        <span className="text-2xl font-bold text-primary">2,500+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-6">
                                <h4 className="font-semibold text-foreground mb-3">Still have questions?</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Our team is here to help you understand how property advocacy can benefit your next purchase.
                                </p>
                                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden">
                            <Accordion type="single" collapsible className="w-full">
                                {faqData.map((faq, index) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className={`border-b border-border/50 ${index === faqData.length - 1 ? "border-b-0" : ""}`}
                                    >
                                        <AccordionTrigger className="px-6 py-5 hover:bg-muted/30 transition-colors group hover:no-underline">
                                            <div className="flex items-center justify-start gap-4 text-left">
                                                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors">
                                                    <span className="text-sm font-semibold text-primary">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                                                        {faq.question}
                                                    </h3>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-5">
                                            <div className="ml-12 pt-2">
                                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
