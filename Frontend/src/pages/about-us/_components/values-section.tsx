import { Award, BookOpen, Heart, Shield, Zap } from 'lucide-react';

const ValuesSection = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        These fundamental principles guide every decision we make and every service we provide.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <ValueItem key={index} {...value} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;

const ValueItem = ({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) => (
    <div className="bg-primary/5 rounded-xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/20 group">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
            </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
);

const values = [
    {
        icon: Shield,
        title: 'Trust',
        description: 'Building lasting relationships through transparency, integrity, and reliable service.',
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'Delivering exceptional results through continuous improvement and attention to detail.',
    },
    {
        icon: Heart,
        title: 'Commitment',
        description: 'Dedicated to your success with unwavering support throughout your journey.',
    },
    {
        icon: Zap,
        title: 'Convenience',
        description: 'Streamlined processes and innovative solutions that make advocacy accessible.',
    },
    {
        icon: BookOpen,
        title: 'Expertise',
        description: 'Deep industry knowledge and proven strategies from experienced professionals.',
    },
];