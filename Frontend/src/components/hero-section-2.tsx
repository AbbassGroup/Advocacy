import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
    const [email, setEmail] = useState("")
    const [currentSlide, setCurrentSlide] = useState(0)

    const backgroundImages = [
        "/advocacy/hero-1.webp",
        "/advocacy/hero-2.webp",
        "/advocacy/hero-3.webp",
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [backgroundImages.length])

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log("Email submitted:", email)
    }

    return (
        <main className="relative py-12 sm:py-16">
            <div className="absolute inset-0 -z-10">
                <div className="bg-black w-full h-full absolute inset-0 z-10 opacity-50"></div>
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                ))}
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? "bg-white scale-110"
                                : "bg-white/50 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>

            <div className="relative z-10 min-h-[80vh] flex items-center justify-center text-center container mx-auto px-4 sm:px-6 lg:px-12 py-8">
                <div className="w-full max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white mb-4 sm:mb-6">
                        Your Property Advocate in Australia
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Helping you buy the right property with confidence, expert insights, and
                        end-to-end support—saving you time, stress, and money.
                    </p>
                    <form onSubmit={onSubmit} className="mb-8 sm:mb-12">
                        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <div className="relative flex-1">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="pl-12 h-12 sm:h-14 text-sm sm:text-base bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:ring-2 focus:ring-white/50"
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="h-12 sm:h-14 px-6 sm:px-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-200"
                            >
                                Book Consultation
                            </Button>
                        </div>
                    </form>
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto">
                        <div className="space-y-1">
                            <div className="text-3xl sm:text-4xl font-bold text-white">
                                500+
                            </div>
                            <div className="text-xs sm:text-sm text-white/70 leading-tight">
                                <div>Clients</div>
                                <div>Represented</div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl sm:text-4xl font-bold text-white">
                                98%
                            </div>
                            <div className="text-xs sm:text-sm text-white/70 leading-tight">
                                <div>Client</div>
                                <div>Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
