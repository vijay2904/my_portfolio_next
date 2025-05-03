import Posts from '@/components/posts';
import PostsWithSearch from '@/components/posts-with-search';
import { getPosts } from '@/lib/posts';
import React from 'react';

export default async function PostsPage() {
    const posts = await getPosts();
    
    return (
        <section className='pb-24 pt-40'>
            <div className="container max-w-3xl mx-auto px-4">
                <div className="title mb-12">Posts</div>

                <PostsWithSearch posts={posts} />
            </div>
        </section>
    )
}