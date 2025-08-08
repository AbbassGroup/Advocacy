import HeroSection from "@/components/hero-section"
import { blogPosts } from "@/data/blog-data"
import { Rss } from "lucide-react"
import { BlogSection } from "./_components/blog-post"

const BlogsPage = () => {
    const handleLoadMore = () => {
        console.log('Load more clicked')
    }
    return (
        <div className="min-h-screen container mx-auto px-4 md:px-12 ">
            <section className="py-16 lg:py-24 space-y-8 md:space-y-24">
                <div className="container mx-auto">
                    <HeroSection
                        icon={Rss}
                        title="Our"
                        highlight="Blogs"
                        description="Ready to secure your dream property? Our expert advocates are here to guide you through every step of your property journey."
                    />
                </div>
                <BlogSection
                    posts={blogPosts}
                    onLoadMore={handleLoadMore}
                    showLoadMore={true}
                    loadMoreLabel="Read More Posts"
                    columns={3}
                />
            </section>
        </div>
    )
}

export default BlogsPage
