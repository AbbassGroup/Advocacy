import { Eye, Target } from "lucide-react";

const MissionVisionItem = ({
    icon: Icon,
    title,
    paragraphs,
}: {
    icon: React.ElementType;
    title: string;
    paragraphs: string[];
}) => (
    <div>
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        </div>
        {paragraphs.map((text, idx) => (
            <p
                key={idx}
                className={`text-muted-foreground leading-relaxed ${idx !== paragraphs.length - 1 ? "mb-6" : ""
                    }`}
            >
                {text}
            </p>
        ))}
    </div>
);

const MissionVision = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    {items.map((item, idx) => (
                        <MissionVisionItem key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;

const items = [
    {
        icon: Target,
        title: "Our Mission",
        paragraphs: [
            "To democratize access to premium property advocacy services and empower individuals and businesses with innovative solutions that drive growth and prosperity.",
            "We're committed to breaking down barriers and making sophisticated property strategies accessible to everyone, regardless of their background or experience level.",
        ],
    },
    {
        icon: Eye,
        title: "Our Vision",
        paragraphs: [
            "To become the most trusted and innovative property advocacy firm, transforming how people approach property management and investment.",
            "We envision a future where property success is accessible, transparent, and achievable for everyone through our cutting-edge solutions and expert guidance.",
        ],
    },
];