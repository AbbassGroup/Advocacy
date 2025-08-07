import SectionHeader from "@/components/section-header"
import { Award, Clock, Users } from "lucide-react"

export default function AboutAttorneySection() {
    const stats = [
        {
            icon: Award,
            number: "25+",
            label: "Years Experience",
        },
        {
            icon: Users,
            number: "50+",
            label: "Expert Attorneys",
        },
        {
            icon: Clock,
            number: "24/7",
            label: "Client Support",
        },
    ]

    return (
        <section className="py-16 lg:py-24 ">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="relative w-full h-[600px] ring-2 ring-primary ring-offset-8 rounded-2xl">
                            <img src={`/advocacy/about-us.png`} className="w-full h-full rounded-2xl object-cover" />
                        </div>
                    </div>
                    <div>
                        <SectionHeader
                            preText="Your Property Buying"
                            highlightText="Partner"
                            description="At Abbass Advocacy, we specialise in helping buyers find, assess, and secure the right property across Australia. Whether you're a first-home buyer, investor, or relocating family, our expert team offers unbiased guidance and personalised support from search to settlement."
                        />
                        <br/>
                        <p className="text-lg text-secondary/60 leading-relaxed mb-10">
                            We work exclusively for you—not sellers or agents—ensuring your interests always come first.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-10">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon
                                return (
                                    <div key={index} className="text-center">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-[#1C1C1C] mb-1">{stat.number}</div>
                                        <div className="text-sm text-secondary/60">{stat.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
