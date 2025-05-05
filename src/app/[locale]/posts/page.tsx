import PostsWithSearch from '@/components/posts-with-search';
import { getPosts } from '@/lib/posts';
import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';

type Props = {
    params: Locale;
};

export default async function PostsPage({params}: Props) {
    const posts = await getPosts();

    const locale = params;

    setRequestLocale(locale);
  
    const t = await getTranslations("PostsPage");
    
    return (
        <section className='pb-24 pt-40'>
            <div className="container max-w-3xl mx-auto px-4">
                <div className="title mb-12">{t("title")}</div>

                <PostsWithSearch posts={posts} />
            </div>
        </section>
    )
}