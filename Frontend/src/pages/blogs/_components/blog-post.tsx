import { Button } from '@/components/ui/button'
import type { blogDataTypes } from '@/data/blog-data'
import { BlogCard } from './blog-card'

interface BlogSectionProps {
    posts: blogDataTypes[]
    onLoadMore?: () => void
    showLoadMore?: boolean
    loadMoreLabel?: string
    columns?: number
}

export const BlogSection = ({
    posts,
    onLoadMore,
    showLoadMore = true,
    loadMoreLabel = 'Load More Articles',
    columns = 3,
}: BlogSectionProps) => {
    return (
        <section>
            <div className="container mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-${columns} gap-8`}>
                    {posts.map((post, index) => (
                        <BlogCard key={index} post={post} />
                    ))}
                </div>
                {showLoadMore && (
                    <div className="text-center mt-8">
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/5 cursor-pointer"
                            onClick={onLoadMore}
                        >
                            {loadMoreLabel}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
