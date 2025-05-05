import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function Home({params}: Props) {

  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <section className='pb-15 pt-40'>
      <div className='container max-w-3xl mx-auto px-4'>
        <Intro />

        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  )
}