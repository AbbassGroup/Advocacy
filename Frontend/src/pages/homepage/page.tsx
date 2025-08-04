import AboutAttorneySection from "./_components/about-attorney"
import AboutSection from "./_components/about-section"
import HeroSection from "./_components/hero-section"
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
            {/* <ClientTestimonials /> */}
        </div>
    )
}

export default Homepage