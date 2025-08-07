import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const contactItems = [
    {
        icon: MapPin,
        title: 'Visit Us',
        details: ['101 Moray St', 'South Melbourne, VIC 3205'],
    },
    {
        icon: Phone,
        title: 'Call Us',
        details: ['(03) 9103 1317'],
    },
    {
        icon: Mail,
        title: 'Email Us',
        details: ['info@abbass.group'],
    },
    {
        icon: Clock,
        title: 'Office Hours',
        details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    },
]

const ContactInfo = () => {
    return (
        <div className="bg-white rounded-2xl border border-border/50 shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>

            <div className="space-y-6">
                {contactItems.map(({ icon: Icon, title, details }, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                            {details.map((line, i) => (
                                <p key={i} className="text-muted-foreground">{line}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-muted-foreground leading-relaxed text-sm">
                    At Abbass Advocacy, we make your property journey smooth and stress-free. Whether you're a first-home buyer, investor, or relocating, our expert team is here to guide you. Have questions? Contact us by form, phone, or email—we're here to help.
                </p>
            </div>
        </div>
    )
}

export default ContactInfo
