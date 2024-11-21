import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

export default function BlogPostPage() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      // TODO: Replace with actual API call
      return {
        title: "With the recent daylight savings change...",
        content: `Hi Team,

With the recent daylight savings change, our European Beards are now 2 hours behind South Africa (instead of the usual 1 hour). This affects all of us working across regions, so let's keep a few things in mind to help everyone stay aligned:

1. Double-Check Meeting Times:
   Some calendar invites may show the incorrect time, so please double-check any cross-regional meetings.

2. Respect Beards' Personal Time:
   With Europe starting 2 hours earlier, please be mindful of personal time on both sides when sending requests or awaiting responses. A bit of flexibility will go a long way. E.g. Please don't set up calls at 6am for Europe or 7pm in SA.

3. Specify Both Time Zones:
   For any new meetings or appointments, noting both time zones in the invite can help avoid any confusion. You can display multiple time zones in your Outlook calendar to help you keep track.

Thanks for your attention to these small adjustments, which make a big difference. Let's keep things running smoothly!`,
        author: "John Doe",
        date: new Date("2024/11/14"),
        category: "NOTICE",
        image:
          "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80",
      };
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative">
        <img
          src={post.image}
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
              <div className="font-medium text-lg">{post.author}</div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Date</div>
              <div className="font-medium">
                {format(post.date, "dd/MM/yyyy")}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Category</div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  {post.category}
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className=" rounded-xl p-8">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap">{post.content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
