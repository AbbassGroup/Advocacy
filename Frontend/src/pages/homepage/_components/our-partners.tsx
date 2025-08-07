import SectionHeader from "@/components/section-header"
import Marquee from "react-fast-marquee"

const partners = [
    { name: "ANZ", logo: "/advocacy/company_logo/anz.png" },
    { name: "Commonwealth Bank", logo: "/advocacy/company_logo/commbank.png" },
    { name: "Macquarie Bank", logo: "/advocacy/company_logo/macqarie.png" },
    { name: "NAB", logo: "/advocacy/company_logo/nab.png" },
    { name: "Westpac", logo: "/advocacy/company_logo/westpac.png" },
]

const newPartners = [
    { name: "Suncorp", logo: "/advocacy/company_logo/suncorp_bank_logo-removebg-preview.png" },
    { name: "Images", logo: "/advocacy/company_logo/images-removebg-preview.png" },
    { name: "Bank of Queensland", logo: "/advocacy/company_logo/Bank_of_Queensland_Limited.png" },
    { name: "IMB", logo: "/advocacy/company_logo/imb.png" },
    { name: "HSBC", logo: "/advocacy/company_logo/hsbc.svg" },
    { name: "Bendigo Bank", logo: "/advocacy/company_logo/Bendigo_Bank_logo.svg.png" },
]

const OurPartners = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto mb-12">
                <SectionHeader
                    preText="Our Trusted"
                    highlightText="Partners"
                    description="We collaborate with Australia's leading financial institutions to bring you comprehensive and competitive
                        financial solutions that put your interests first."
                />
            </div>

            <div className="space-y-8">
                <div className="relative">
                    <Marquee speed={40} gradient={false} className="py-4" autoFill>
                        {partners.map((partner, index) => (
                            <div key={`${partner.name}-${index}`} className="mx-8 flex items-center justify-center">
                                <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6 hover:shadow-md transition-all duration-300 hover:scale-105 group">
                                    <div className="relative w-32 h-16 flex items-center justify-center">
                                        <img
                                            src={partner.logo || "/placeholder.svg"}
                                            alt={`${partner.name} logo`}
                                            width={128}
                                            height={64}
                                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className="relative">
                    <Marquee speed={35} direction="right" gradient={false} className="py-4" autoFill>
                        {newPartners.map((partner, index) => (
                            <div key={`${partner.name}-${index}`} className="mx-8 flex items-center justify-center">
                                <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6 hover:shadow-md transition-all duration-300 hover:scale-105 group">
                                    <div className="relative w-32 h-16 flex items-center justify-center">
                                        <img
                                            src={partner.logo || "/placeholder.svg"}
                                            alt={`${partner.name} logo`}
                                            width={128}
                                            height={64}
                                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default OurPartners
