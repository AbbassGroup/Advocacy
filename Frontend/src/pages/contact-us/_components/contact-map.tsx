
const ContactMap = () => {
    return (
        <div className="rounded-2xl border border-border/50 shadow-sm overflow-hidden h-80 ring-2 ring-primary/10 ring-offset-8 bg-primary/50">
            <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.2916628073284!2d144.97034987616652!3d-37.832439472037504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642a814af8833%3A0xfc0f0b8e1d8f4a9b!2s101%20Moray%20St%2C%20South%20Melbourne%20VIC%203205!5e0!3m2!1sen!2sau!4v1746160838419!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default ContactMap