import HeroSection from "@/components/hero-section"
import { Mail } from "lucide-react"
import ContactForm from "./_components/contact-form"
import ContactInfo from "./_components/contact-info"
import ContactMap from "./_components/contact-map"

const ContactPage = () => {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSection
                    icon={Mail}
                    title="Get In"
                    highlight="Touch"
                    description="Ready to secure your dream property? Our expert advocates are here to guide you through every step of your property journey."
                />
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
