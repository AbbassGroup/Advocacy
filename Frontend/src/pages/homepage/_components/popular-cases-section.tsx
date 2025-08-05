import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Award } from "lucide-react"

export default function PopularCases() {
    const cases = [
        {
            id: 1,
            title: "Corporate Merger Success",
            category: "Corporate Law",
            description:
                "Successfully facilitated a multi-million dollar merger between two major corporations, ensuring regulatory compliance and stakeholder satisfaction.",
            image: "/placeholder.svg?height=300&width=400",
            date: "December 2023",
            client: "Fortune 500 Company",
            outcome: "Successful Merger",
        },
        {
            id: 2,
            title: "Real Estate Development Victory",
            category: "Real Estate Law",
            description:
                "Secured zoning approvals and navigated complex regulatory requirements for a major commercial development project.",
            image: "/placeholder.svg?height=300&width=400",
            date: "November 2023",
            client: "Development Group",
            outcome: "Project Approved",
        },
        {
            id: 3,
            title: "Healthcare Compliance Resolution",
            category: "Healthcare Law",
            description:
                "Resolved complex healthcare compliance issues and established comprehensive regulatory framework for medical practice.",
            image: "/placeholder.svg?height=300&width=400",
            date: "October 2023",
            client: "Medical Center",
            outcome: "Full Compliance",
        },
    ]

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
                    <div>
                        <div className="inline-block px-6 py-2 bg-[#D8B588] text-white rounded-full text-sm font-medium mb-6">
                            Recent Cases
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">Recent Case Studies</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Explore our recent successful cases and see how we've helped clients achieve their legal objectives.
                        </p>
                    </div>
                    <Button size="lg" className="bg-[#D8B588] hover:bg-[#D8B588]/90 text-white mt-6 md:mt-0 group">
                        View All Cases
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Cases Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((caseItem) => (
                        <Card
                            key={caseItem.id}
                            className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={caseItem.image || "/placeholder.svg"}
                                    alt={caseItem.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#D8B588] text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {caseItem.category}
                                    </span>
                                </div>
                            </div>

                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#D8B588] transition-colors">
                                    {caseItem.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{caseItem.description}</p>

                                {/* Case Details */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar className="w-4 h-4 mr-2 text-[#D8B588]" />
                                        {caseItem.date}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <User className="w-4 h-4 mr-2 text-[#D8B588]" />
                                        {caseItem.client}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Award className="w-4 h-4 mr-2 text-[#D8B588]" />
                                        {caseItem.outcome}
                                    </div>
                                </div>

                                <Button
                                    variant="ghost"
                                    className="text-[#D8B588] hover:text-[#1C1C1C] hover:bg-[#D8B588]/10 p-0 h-auto font-semibold group/btn"
                                >
                                    Read Case Study
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
