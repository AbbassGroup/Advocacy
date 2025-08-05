import ActionButton from "@/components/action-button"
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
                            <img src={`/advocacy/meet-team.png`} className="w-full h-full rounded-2xl object-cover"/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6 leading-tight">
                            Meet Our <span className="text-[#D8B588]">Expert</span> Legal Team
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Our diverse team of experienced attorneys brings together decades of legal expertise across multiple
                            practice areas. Each member of our team is committed to providing exceptional legal representation and
                            personalized service to our clients.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-10">
                            From complex corporate transactions to individual legal matters, our attorneys have the knowledge and
                            experience to handle your case with the utmost professionalism and dedication.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-10">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon
                                return (
                                    <div key={index} className="text-center">
                                        <div className="w-12 h-12 bg-[#D8B588] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-[#1C1C1C] mb-1">{stat.number}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <ActionButton title="Meet all attorney" />
                    </div>
                </div>
            </div>
        </section>
    )
}
