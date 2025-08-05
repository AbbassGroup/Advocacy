import ContactForm from "./_components/contact-form"
import ContactInfo from "./_components/contact-info"
import ContactMap from "./_components/contact-map"

const ContactPage = () => {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Get In{" "}
                        <span className="text-primary relative">
                            Touch
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                                viewBox="0 0 100 12"
                                fill="currentColor"
                            >
                                <path d="M0 8c30-4 70-4 100 0v4H0z" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Ready to secure your dream property? Our expert advocates are here to guide you through every step of your
                        property journey.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-8">
                        <ContactInfo />
                    </div>
                    <ContactForm />
                    <div className="col-span-2">
                        <ContactMap />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage
