import SectionHeaderDescription from "@/components/section-header-description"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { practiceAreas } from "@/data/practice-areas"
import { ArrowRight } from "lucide-react"

export default function PracticeAreas() {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-left mb-16">
                    <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-6">
                        Our Trusted{" "}
                        <span className="text-primary relative">
                            Partners
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                                viewBox="0 0 100 12"
                                fill="currentColor"
                            >
                                <path d="M0 8c30-4 70-4 100 0v4H0z" />
                            </svg>
                        </span>
                    </h2>

                    <div className="max-w-3xl">
                        <SectionHeaderDescription title="We provide comprehensive legal services across multiple practice areas, delivering expert counsel and
                        dedicated advocacy for our clients."/>
                    </div>
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
                                    <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
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
