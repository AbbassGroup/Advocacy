import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const BlogCard = ({ post }: { post: any }) => {
    return (
        <Card className={`border-border/50 shadow-none hover:shadow-xs transition-all p-0 duration-300 hover:scale-105 group overflow-hidden`}>
            <div className="relative">
                <div className={`aspect-video relative overflow-hidden`}>
                    <img
                        src={post.img || "/placeholder.svg"}
                        alt={post.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>

            <CardContent className="px-6 pb-6">
                <h3 className={`font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors text-lg`}>
                    {post.title}
                </h3>
                <p className={`text-muted-foreground mb-4 line-clamp-3 text-sm`}>
                    {post.short_description}
                </p>

                <div className="flex gap-1 items-center p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </CardContent>
        </Card>
    )
}