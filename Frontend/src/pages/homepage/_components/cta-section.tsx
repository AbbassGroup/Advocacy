
const CtaSection = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Ready to find your perfect financial solution?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Our advocacy approach ensures you get unbiased advice and access to the best products from our trusted
                    partner network.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        Get Started Today
                    </button>
                    <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CtaSection