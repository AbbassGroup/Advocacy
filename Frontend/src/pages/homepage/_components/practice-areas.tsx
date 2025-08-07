import SectionHeader from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { practiceAreas } from "@/data/practice-areas"
import { ArrowRight } from "lucide-react"

export default function PracticeAreas() {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto">
                <div className="text-left mb-16">
                    <SectionHeader
                        preText="Our Trusted"
                        highlightText="Partners"
                        description="We provide comprehensive legal services across multiple practice areas, delivering expert counsel and
                        dedicated advocacy for our clients."
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {practiceAreas.map((area) => {
                        const IconComponent = area.icon
                        return (
                            <Card
                                key={area.id}
                                className="group transition-all rounded-2xl duration-300 border-1 p-0 bg-white overflow-hidden shadow-none hover:shadow-none"
                            >
                                <div className="relative overflow-hidden rounded-t-2xl ">
                                    <img
                                        src={`/advocacy/${area.image || "placeholder.svg"}`}
                                        alt={area.title}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-[#D8B588] rounded-full flex items-center justify-center">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4 group-hover:text-[#D8B588] transition-colors">
                                        {area.title}
                                    </h3>
                                    <p className="text-secondary/60 leading-relaxed mb-6">{area.description}</p>
                                    <Button
                                        variant="ghost"
                                        className="text-[#D8B588] hover:text-[#1C1C1C] hover:bg-[#D8B588]/10 p-0 h-auto font-semibold group/btn"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
