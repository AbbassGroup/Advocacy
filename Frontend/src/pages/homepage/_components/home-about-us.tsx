import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

const practiceAreas = [
    "Immigration Laws",
    "Traffic Violations",
    "Litigation & Arbitration",
    "Domestic Violence & Family Law",
    "DUI Defense",
    "Criminal Defense",
]

const HomeAboutUs = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                        src="/advocacy/placeholder.svg?height=600&width=500"
                        alt="Legal consultation"
                        className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent" />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-xl shadow-xl">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                </div>
            </div>

            {/* Content Side */}
            <div>
                <div className="inline-block px-6 py-2 bg-primary text-white rounded-full text-sm font-medium mb-6">
                    About Us
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                    We Have Experienced <span className="text-primary">Lawyers.</span>
                    <br />
                    They Are <span className="text-primary">Always Ready</span> To Help You.
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    With over two decades of legal excellence, our firm has built a reputation for delivering exceptional
                    results and unwavering advocacy. We combine deep legal expertise with personalized attention to ensure
                    every client receives the dedicated representation they deserve.
                </p>

                {/* Practice Areas List */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {practiceAreas.map((area, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{area}</span>
                        </div>
                    ))}
                </div>

                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold group"
                >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    )
}

export default HomeAboutUs