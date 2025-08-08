import BooksSection from "@/components/business-books-section"
import HeroSection from "@/components/hero-section-2"
import AboutAttorneySection from "./_components/about-attorney"
import AboutSection from "./_components/about-section"
import HomeBlogSection from "./_components/blog-section-home"
import FAQSection from "./_components/faq-section"
import OurPartners from "./_components/our-partners"
import FeaturesSection from "./_components/platform-features"

const Homepage = () => {

    return (
        <div>
            <HeroSection />
            <div className="container mx-auto px-4 md:px-12 mt-20">
                <FeaturesSection />
                <AboutSection />
                <AboutAttorneySection />
                <FAQSection />
                <BooksSection />
                <HomeBlogSection />
                <OurPartners />
            </div>
        </div>
    )
}

export default Homepage