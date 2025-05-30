import PostsWithSearch from '@/components/posts-with-search';
import { getPosts } from '@/lib/posts';
import { getTranslations } from 'next-intl/server';
import React from 'react';

type Props = {
    params: { locale: string };
};

export default async function PostsPage({ params }: Props) {
    const {locale} = await　params;
    const posts = await getPosts(undefined, locale);
  
    const t = await getTranslations("PostsPage");
    
    return (
        <section className='pb-24 pt-40'>
            <div className="container max-w-3xl mx-auto px-4">
                <div className="title mb-12">{t("title")}</div>

                <PostsWithSearch posts={posts}/>
            </div>
        </section>
    )
}