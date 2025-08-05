import { Button } from "@/components/ui/button"
import { Scale, Users, FileText, Shield, Gavel, Car } from "lucide-react"

export default function AboutSection() {
    const services = [
        { icon: Scale, name: "Immigration Laws" },
        { icon: Car, name: "Traffic Violence" },
        { icon: FileText, name: "Litigation & Arbitration" },
        { icon: Users, name: "Domestic Violence Family" },
        { icon: Shield, name: "Dui Defense" },
        { icon: Gavel, name: "Crimes" },
    ]

    return (
        <section className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
            <div className="relative container mx-auto py-20">
                <div className="grid lg:grid-cols-12 gap-20 items-center">
                    {/* Content Side - Asymmetrical Layout */}
                    <div className="lg:col-span-7 space-y-8 relative">
                        {/* Main Heading with Creative Typography */}
                        <div className="space-y-4">
                            <h2 className="text-5xl lg:text-6xl font-bold leading-normal">
                                <span className="text-foreground">We Have</span>
                                {/* <br /> */}
                                <span className="text-primary relative">
                                    &nbsp;Experienced
                                    <div className="absolute -bottom-2 left-2 w-full h-1 bg-secondary rounded-full"></div>
                                </span>
                                <br />
                                <span className="text-foreground">Lawyers</span>
                            </h2>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="w-16 h-1 bg-primary rounded-full"></div>
                                <p className="text-xl text-secondary font-medium">Always Ready To Help You</p>
                            </div>
                        </div>

                        {/* Description with Modern Styling */}
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat. Massa massa ultricies mi
                            quis hendrerit dolor. Quis commodo odio aenean.
                        </p>

                        {/* Services Grid - Innovative Layout */}
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

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-8 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                    {/* Image Side - Creative Positioning */}
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
