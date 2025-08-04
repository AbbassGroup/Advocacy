"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function ClientTestimonials() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const testimonials = [
        {
            id: 1,
            content:
                "The legal team provided exceptional service throughout my case. Their expertise in corporate law and attention to detail made all the difference. I couldn't have asked for better representation.",
            name: "Sarah Johnson",
            title: "CEO, Tech Innovations",
            image: "/placeholder.svg?height=80&width=80",
            rating: 5,
        },
        {
            id: 2,
            content:
                "Professional, knowledgeable, and always available when I needed them. They handled my real estate transaction flawlessly and kept me informed every step of the way.",
            name: "Michael Chen",
            title: "Real Estate Developer",
            image: "/placeholder.svg?height=80&width=80",
            rating: 5,
        },
        {
            id: 3,
            content:
                "Outstanding legal counsel that went above and beyond. Their strategic approach to my case and dedication to achieving the best outcome was truly impressive.",
            name: "Emily Rodriguez",
            title: "Business Owner",
            image: "/placeholder.svg?height=80&width=80",
            rating: 5,
        },
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-20 px-4 bg-[#F9F4EF]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 bg-[#D8B588] text-white rounded-full text-sm font-medium mb-6">
                        Client Testimonials
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">What Clients Say About Us</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about our legal services.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                    <Card className="bg-white border-0 shadow-xl">
                                        <CardContent className="p-12 text-center">
                                            <div className="w-16 h-16 bg-[#D8B588] rounded-full flex items-center justify-center mx-auto mb-8">
                                                <Quote className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Star Rating */}
                                            <div className="flex justify-center mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-[#D8B588] fill-current" />
                                                ))}
                                            </div>

                                            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                                                "{testimonial.content}"
                                            </blockquote>

                                            <div className="flex items-center justify-center space-x-4">
                                                <img
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full object-cover border-4 border-[#D8B588]"
                                                />
                                                <div className="text-left">
                                                    <h4 className="text-lg font-bold text-[#1C1C1C]">{testimonial.name}</h4>
                                                    <p className="text-[#D8B588] font-medium">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-[#D8B588] text-[#D8B588] hover:bg-[#D8B588] hover:text-white"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-[#D8B588] text-[#D8B588] hover:bg-[#D8B588] hover:text-white"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-[#D8B588]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
