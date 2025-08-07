import HeroSection from "@/components/hero-section"
import { BadgeInfo } from "lucide-react"
import LeadershipSection from "./_components/leadership-section"
import MissionVision from "./_components/mission-vision"
import ValuesSection from "./_components/values-section"
import WhoWeAre from "./_components/who-we-are"

const AboutUsPage = () => {
    return (
        <div className="relative w-full">
            <div className="container mx-auto py-16 lg:py-24 space-y-16 md:space-y-24">
                <HeroSection
                    icon={BadgeInfo}
                    title="About"
                    highlight="Us"
                    description="Ready to secure your dream property? Our expert advocates are here to guide you through every step of your property journey."
                />
                <WhoWeAre />
                <MissionVision />
                <ValuesSection />
                <LeadershipSection />
            </div>
        </div>
    )
}

export default AboutUsPage
