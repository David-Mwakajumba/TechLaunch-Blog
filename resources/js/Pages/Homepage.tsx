import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BlogHero from '@/components/BlogHero';
import BlogGrid from '@/components/BlogGrid';
import Layout from '@/components/Layout';

export default function Homepage({ auth, laravelVersion, phpVersion, blogPosts }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <Layout>
            <div className="space-y-16">
            <BlogHero />
            <BlogGrid blogPosts={blogPosts} />
            </div>
            </Layout>
        </>
    );
}
