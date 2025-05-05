import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'
import NavigationLink from './NavigationLink';
import { getTranslations } from 'next-intl/server';

export default async function RecentPosts() {
  const posts = await getPosts(4);

//   const t = useTranslations('RecentPosts');
  const t = await getTranslations("RecentPosts");

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>{t('title')}</h2>
        <Posts posts={posts} />

        <NavigationLink
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>{t('all_posts')}</span>
        </NavigationLink>
      </div>
    </section>
  )
}