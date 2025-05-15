/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPostBySlug, getPosts, PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";
import Image from 'next/image';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import MDXContent from "@/components/mdx-component";
import { setRequestLocale } from "next-intl/server";
import NavigationLink from "@/components/NavigationLink";
import { Locale } from "next-intl";

export async function generateStaticParams() {
    const posts = await getPosts();
    const slugs = posts.map(post => ({ slug: post.slug}));
    return slugs;
}

type Props = {
    params: { slug: string, locale: string };
};

export default async function Post({ params }: Props) {
    const {slug, locale} = await　params;
    const post = await getPostBySlug(slug, locale);

    if(!post) {
        notFound();
    }

    const { metadata, content } = post;
    const { title, image, author, publishedAt } = metadata;

    return (
        <section className='pb-24 pt-32'>
            <div className='container max-w-3xl mx-auto px-4'>
                <NavigationLink
                href='/posts'
                className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
                >
                <ArrowLeftIcon className='h-5 w-5' />
                <span>Back to blogs</span>
                </NavigationLink>

                {image && (
                <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
                    <Image
                    src={image}
                    alt={title || ''}
                    className='object-contain'
                    fill
                    />
                </div>
                )}

                <header>
                <h1 className='title'>{title}</h1>
                <p className='mt-3 text-xs text-muted-foreground'>
                    {author} / {formatDate(publishedAt ?? '')}
                </p>
                </header>

                <main className='prose mt-16 dark:prose-invert'>
                    <MDXContent source={content} />
                </main>
            </div>
        </section>
    )
}