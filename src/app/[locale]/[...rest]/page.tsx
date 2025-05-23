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

export default function ShowNotFound() {
    notFound();

    return (
        <></>
    )
}