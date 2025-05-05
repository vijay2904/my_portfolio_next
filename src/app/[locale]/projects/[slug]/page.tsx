import { getProjectBySlug, getProjects } from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import MDXContent from "@/components/mdx-component";
import NavigationLink from "@/components/NavigationLink";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
    const projects = await getProjects();
    const slugs = projects.map(project => ({ slug: project.slug}));
    return slugs;
}

type Props = {
    params: { slug: string };
    paramsLocale: Locale;
};

export default async function Project({ params, paramsLocale }: Props) {

    const {slug} = await params;
    const project = await getProjectBySlug(slug);

    const locale = paramsLocale;
    
    // Enable static rendering
    setRequestLocale(locale);

    if(!project) {
        notFound();
    }

    const { metadata, content } = project;
    const { title, image, author, publishedAt } = metadata;

    return (
        <section className='pb-24 pt-32'>
            <div className='container max-w-3xl mx-auto px-4'>
                <NavigationLink
                href='/projects'
                className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
                >
                <ArrowLeftIcon className='h-5 w-5' />
                <span>Back to projects</span>
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