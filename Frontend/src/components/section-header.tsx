import React from "react";

interface SectionHeaderProps {
    preText?: string;
    highlightText: string;
    headingSize?: string;
    className?: string;
    underlineColor?: string;
    description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    preText = "Our Trusted",
    highlightText,
    headingSize = "text-3xl sm:text-6xl",
    className = "",
    underlineColor = "text-primary/20",
    description = ''
}) => {
    return (
        <div>
            <h2 className={`${headingSize} font-bold text-secondary mb-6 ${className}`}>
                {preText}{" "}
                <span className="text-primary relative inline-block">
                    {highlightText}
                    <svg
                        className={`absolute -bottom-2 left-0 w-full h-3 ${underlineColor}`}
                        viewBox="0 0 100 12"
                        fill="currentColor"
                    >
                        <path d="M0 8c30-4 70-4 100 0v4H0z" />
                    </svg>
                </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;
