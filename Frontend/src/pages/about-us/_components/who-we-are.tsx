const WhoWeAre = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            Who We Are
                        </h2>
                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p className="text-lg">
                                At ABBASS Advocacy, we're not just another property services company - we're a dynamic startup revolutionizing the way people approach their property future.
                            </p>
                            <p>
                                With our innovative solutions and forward-thinking approach, we're making sophisticated property strategies accessible to everyone. Our team of young, passionate property experts combines traditional wisdom with cutting-edge technology to deliver exceptional results.
                            </p>
                            <p>
                                We pride ourselves on our agility, creativity, and commitment to client success. Every decision we make is focused on one thing: helping you achieve your property goals faster and more efficiently than ever before.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <img src="about-us-hero.png" alt="about-us-hero.png" className="h-96 mx-auto"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre