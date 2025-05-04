import PostsWithSearch from '@/components/posts-with-search';
import { getPosts } from '@/lib/posts';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import React, { use } from 'react';

type Props = {
    params: Locale;
};

export default async function PostsPage({params}: Props) {
    const posts = await getPosts();

    const locale = params;

    // Enable static rendering
    setRequestLocale(locale);
  
    
    return (
        <section className='pb-24 pt-40'>
            <div className="container max-w-3xl mx-auto px-4">
                <div className="title mb-12">Blogs</div>

                <PostsWithSearch posts={posts} />
            </div>
        </section>
    )
}