import SectionHeaderDescription from "@/components/section-header-description"
import SectionHeaderTitle from "@/components/section-header-title"
import { ArrowRight, Building, Hammer, Scale } from "lucide-react"

export default function FeaturesSection() {
    const features = [
        {
            icon: Scale,
            title: "Best Client Support",
            description:
                "24/7 dedicated support with personalized attention to every case, ensuring you're never alone in your legal journey.",
            color: "primary",
            stats: "24/7",
            highlight: "Always Available",
        },
        {
            icon: Hammer,
            title: "Expert Legal Team",
            description:
                "Seasoned attorneys with decades of combined experience across multiple practice areas and proven track records.",
            color: "secondary",
            stats: "25+",
            highlight: "Years Experience",
        },
        {
            icon: Building,
            title: "Comprehensive Solutions",
            description: "Full-service legal representation from initial consultation through case resolution and beyond records.",
            color: "primary",
            stats: "500+",
            highlight: "Cases Solved",
        },
    ]

    return (
        <section className="relative py-24">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-left mb-20">
                    <SectionHeaderTitle title="Excellence in Legal Services" />
                    <SectionHeaderDescription title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                </div>

                {/* Diagonal Flow Layout */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={feature.title}
                                className={`lg:col-span-4 ${index === 0 ? "lg:col-start-1" : index === 1 ? "lg:col-start-5 " : "lg:col-start-9"
                                    }`}
                            >
                                {/* Feature Card */}
                                <div className="group relative">
                                    {/* Main Card */}
                                    <div
                                        className={`relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${feature.color === "primary"
                                            ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40"
                                            : "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border border-secondary/20 hover:border-secondary/40"
                                            } shadow-lg hover:shadow-2xl backdrop-blur-sm`}
                                    >
                                        {/* Icon and Stats Row */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div
                                                className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 ${feature.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                                                    }`}
                                            >
                                                <Icon
                                                    className={`w-8 h-8 ${feature.color === "primary" ? "text-primary" : "text-secondary"}`}
                                                />
                                            </div>

                                            {/* Stats Badge */}
                                            <div className={`text-right ${feature.color === "primary" ? "text-primary" : "text-secondary"}`}>
                                                <div className="text-3xl font-bold">{feature.stats}</div>
                                                <div className="text-xs font-medium opacity-80">{feature.highlight}</div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                        </div>

                                        {/* Action Arrow */}
                                        <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                            <span className={feature.color === "primary" ? "text-primary" : "text-secondary"}>
                                                Learn More
                                            </span>
                                            <ArrowRight
                                                className={`w-4 h-4 ${feature.color === "primary" ? "text-primary" : "text-secondary"}`}
                                            />
                                        </div>

                                        {/* Decorative Corner */}
                                        <div
                                            className={`absolute top-0 right-0 w-20 h-20 ${feature.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                                                } rounded-bl-3xl rounded-tr-3xl opacity-50`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
