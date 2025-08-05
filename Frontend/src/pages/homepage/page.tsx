import AboutAttorneySection from "./_components/about-attorney"
import AboutSection from "./_components/about-section"
import FAQSection from "./_components/faq-section"
import HeroSection from "./_components/hero-section"
import OurPartners from "./_components/our-partners"
import FeaturesSection from "./_components/platform-features"
import PracticeAreas from "./_components/practice-areas"

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <AboutAttorneySection />
            <PracticeAreas />
            {/* <PopularCases /> */}
            <FAQSection />
            <OurPartners />
            {/* <ClientTestimonials /> */}
        </div>
    )
}

export default Homepage