import { footerConfig } from '@/data/footer-data'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'


export default function Footer() {
    const { brand, sections, contact, copyright } = footerConfig

    return (
        <footer className="bg-primary/10">
            <div className="container mx-auto py-16 px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={brand.logo} alt="abbas-advocacy" className='h-20' />
                        </div>
                        <p className="text-secondary/50 text-sm leading-relaxed mb-8 max-w-xs">
                            {brand.description}
                        </p>
                    </div>

                    {sections.map((section, index) => (
                        <div key={index} className="lg:col-span-1">
                            <h3 className="text-lg font-semibold text-secondary mb-6">
                                {section.title}
                            </h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.url}
                                            className="text-secondary/60 hover:text-primary transition-colors text-sm flex items-center group"
                                        >
                                            <span className="w-2 h-2 bg-secondary/30 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-secondary mb-6">
                            {contact.title}
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-secondary/60 mb-3">{contact.phone.label}</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Phone size={14} className="text-primary" />
                                        <span className="text-sm text-secondary font-medium">{contact.phone.number}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail size={14} className="text-primary" />
                                        <Link
                                            to={`mailto:${contact.phone.email}`}
                                            className="text-sm text-secondary font-medium hover:text-primary transition-colors"
                                        >
                                            {contact.phone.email}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-secondary/60 mb-3">{contact.location.label}</p>
                                <div className="flex items-start gap-3">
                                    <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                                    <span className="text-sm text-secondary/90 font-medium">{contact.location.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary py-4">
                <div className="container mx-auto">
                    <p className="text-center text-secondary text-sm">
                        &copy; {copyright.text}
                    </p>
                </div>
            </div>
        </footer>
    )
}
