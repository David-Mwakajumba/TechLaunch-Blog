
import BlogPost from "@/components/BlogPost";
import Guest from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

export default function BlogPostPage({post,relatedPosts}) {

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-pulse text-gray-500">Loading...</div>
  //     </div>
  //   );
  // }


  const { imagePath } = usePage().props;

  return (
    <Guest>
      <article className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative">
        <img
          src={imagePath + post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Metadata Sidebar */}
          <div className="col-span-3 space-y-8">
            <div>
              <div className="text-sm text-gray-500 mb-2">Author</div>
              <div className="font-medium text-lg">{post.user.name}</div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Date</div>
              <div className="font-medium">
              {format(post.created_at,'dd-MM-yyyy')}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Category</div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  {post.category.name}
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className=" rounded-xl p-8">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: post.description }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <h3 className="text-center">Related Posts</h3>
        {relatedPosts.map((post) => (
          <BlogPost
            post={post}
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </Guest>
  );
}
