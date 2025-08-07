import SectionHeader from "@/components/section-header"
import { Car, FileText, Gavel, Scale, Shield, Users } from "lucide-react"

export default function AboutSection() {
    const services = [
        { icon: Scale, name: "Buyer-Only Focus" },
        { icon: Car, name: "Local Expertise" },
        { icon: FileText, name: "Negotiation Support" },
        { icon: Users, name: "End-to-End Guidance" },
        { icon: Shield, name: "Time-Saving Process" },
        { icon: Gavel, name: "Proven Success" },
    ]

    return (
        <section className="relative overflow-hidden">
            <div className="relative container mx-auto py-20">
                <div className="grid lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-7 space-y-8 relative">
                        <SectionHeader
                            preText="Why Choose"
                            highlightText="Us"
                            description="Abbass Advocacy provides expert, unbiased support for property buyers across Australia. Our buyer-only approach ensures your interests come first. From search to settlement, we reduce stress, save time, and deliver great outcomes. Backed by experience and results, we help you buy smart and confidently in any market."
                        />
                        <div className="grid grid-cols-2 gap-6">
                            {services.map((service, index) => {
                                const Icon = service.icon
                                return (
                                    <div
                                        key={service.name}
                                        className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${index % 2 === 0
                                            ? "bg-primary/5 hover:bg-primary/10 border border-primary/20"
                                            : "bg-secondary/5 hover:bg-secondary/10 border border-secondary/20"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${index % 2 === 0 ? "bg-primary/20" : "bg-secondary/20"}`}>
                                                <Icon className={`w-5 h-5 ${index % 2 === 0 ? "text-primary" : "text-secondary"}`} />
                                            </div>
                                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                                {service.name}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative  pr-4">
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl  ring-2 ring-primary ring-offset-8">
                                <img
                                    src="/advocacy/lawyer-consulting.jpg"
                                    alt="Professional lawyers consulting with clients"
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
