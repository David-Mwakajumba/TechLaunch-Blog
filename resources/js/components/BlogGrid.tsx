import BlogPost from "./BlogPost";

interface BlogGridProps {
    className?: string;
    blogPosts: any;
}

export default function BlogGrid({ className = "", blogPosts }: BlogGridProps) {
    return (
        <section className={`container mx-auto px-8 py-12 ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <BlogPost post={post} key={post.id} {...post} />
                ))}
            </div>

            {blogPosts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No blog posts found.</p>
                </div>
            )}
        </section>
    );
}
