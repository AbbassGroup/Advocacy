import type { LucideIcon } from "lucide-react";
import React from "react";

interface HeroSectionProps {
    icon: LucideIcon;
    title: string;
    highlight: string;
    description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    icon: Icon,
    title,
    highlight,
    description,
}) => {
    return (
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Icon className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {title}{" "}
                <span className="text-primary relative">
                    {highlight}
                    <svg
                        className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                        viewBox="0 0 100 12"
                        fill="currentColor"
                    >
                        <path d="M0 8c30-4 70-4 100 0v4H0z" />
                    </svg>
                </span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default HeroSection;
