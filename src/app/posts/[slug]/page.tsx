import { getPostBySlug, getPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { format } from "path";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import MDXContent from "@/components/mdx-component";

export async function generateStaticParams() {
    const posts = await getPosts();
    const slugs = posts.map(post => ({ slug: post.slug}));
    return slugs;
}

export default async function Post({ params }: { params: { slug: string } }) {

    const {slug} = await params;
    const post = await getPostBySlug(slug);

    if(!post) {
        notFound();
    }

    const { metadata, content } = post;
    const { title, image, author, publishedAt } = metadata;

    const img = await import(`@/public/images/posts/${image}`);

    return (
        <section className='pb-24 pt-32'>
            <div className='container max-w-3xl mx-auto px-4'>
                <Link
                href='/posts'
                className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
                >
                <ArrowLeftIcon className='h-5 w-5' />
                <span>Back to posts</span>
                </Link>

                {img && (
                <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
                    <Image
                    src={img}
                    alt={title || ''}
                    className='object-cover'
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