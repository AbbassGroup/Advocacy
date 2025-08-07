import { Button } from '@/components/ui/button';

const leader = {
    image: 'ceo.jpg',
    name: 'Sadeq Abbass',
    title: 'Managing Director',
    subtitle: 'Visionary & Strategic Leader',
};

const LeaderProfileCard = ({
    image
}: {
    image: string;

}) => (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 border border-primary/20 text-center h-[400px] w-full overflow-hidden">
        <img src={image} alt="Abbass CEO" className='rounded-lg h-full object-cover w-full' />
    </div>
);

const LeadershipSection = () => {
    return (
        <section className="p-4 md:p-8 bg-muted/30 rounded-2xl border border-primary/20">
            <div className="container mx-auto h-full w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center h-full w-full">
                    <div className="lg:col-span-4">
                        <LeaderProfileCard {...leader} />
                    </div>
                    <div className="lg:col-span-8 h-full w-full">
                        <div className='flex flex-col items-start gap-5 justify-center h-full w-full'>
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                    {leader.name}
                                </h2>
                                <p className="text-primary font-medium mb-1">{leader.title}</p>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Sadeq Abbass is a dynamic property and investment expert with a proven track record in global property markets. As the founder of ABBASS Advocacy, Sadeq brings a fresh perspective to property management, combining traditional property wisdom with innovative approaches.
                                </p>
                                <p>
                                    With extensive experience in property, investment, and business strategy, Sadeq has built a reputation for delivering exceptional results. His global network and deep market insights position ABBASS Advocacy as a trusted partner for individuals and businesses seeking property success.
                                </p>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Connect with Sadeq
                                </Button>
                                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                                    View Full Profile
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
