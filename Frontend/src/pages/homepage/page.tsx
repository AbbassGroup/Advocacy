import BooksSection from "@/components/business-books-section"
import AboutAttorneySection from "./_components/about-attorney"
import AboutSection from "./_components/about-section"
import HomeBlogSection from "./_components/blog-section-home"
import FAQSection from "./_components/faq-section"
import HeroSection from "./_components/hero-section"
import OurPartners from "./_components/our-partners"
import FeaturesSection from "./_components/platform-features"

const Homepage = () => {
    
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <AboutAttorneySection />
            {/* <PracticeAreas /> */}
            <FAQSection />
            <BooksSection />
            <HomeBlogSection />
            <OurPartners />
        </div>
    )
}

export default Homepage