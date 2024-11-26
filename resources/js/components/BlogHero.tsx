import React from "react";
import { Scissors } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function BlogHero() {
    return (
        <div className="relative">
            {/* Hero Content */}
            <div className="container mx-auto px-8 py-16">
                <div className="max-w-2xl relative z-10">
                    <h1 className="text-6xl font-bold mb-8 leading-tight">
                        The Bearded
                        <br />
                        Blogger
                    </h1>
                    <div className="flex items-center gap-4 text-gray-500 uppercase tracking-wider text-sm mb-6">
                        <span>Creativity</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>Culture</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>Collaboration</span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Get a behind-the-scenes look at the day-to-day life of
                        our creative team! From inspiring projects and
                        team-building moments to the latest company news, our
                        blog shares the stories, insights, and fun that fuel our
                        creative agency.
                    </p>
                </div>
            </div>
        </div>
    );
}
