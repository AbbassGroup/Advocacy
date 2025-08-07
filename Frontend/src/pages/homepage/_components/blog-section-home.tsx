import SectionHeader from '@/components/section-header'
import { blogPosts } from '@/data/blog-data'
import { BlogSection } from '@/pages/blogs/_components/blog-post'
import { useNavigate } from 'react-router-dom'

const HomeBlogSection = () => {
    const navigate = useNavigate()

    const handleLoadMore = () => {
        navigate('blogs') 
    }
    return (
        <div className='space-y-12'>
            <SectionHeader
                preText="Our"
                highlightText="Blogs"
                description='Smarter investment decisions with expert property insights'
            />
            <div>
                <BlogSection
                    posts={blogPosts.slice(3, 6)}
                    onLoadMore={handleLoadMore}
                />
            </div>
        </div>
    )
}

export default HomeBlogSection