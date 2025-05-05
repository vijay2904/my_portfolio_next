import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'
import NavigationLink from './NavigationLink'
import { getTranslations } from 'next-intl/server';

export default async function RecentProjects() {
  const projects = await getProjects(2);

  const t = await getTranslations("RecentProjects");


  return (
    <section className='pb-20'>
      <div>
        <h2 className='title mb-12'>{t('title')}</h2>
        <Projects projects={projects} />

        <NavigationLink
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>{t('all_projects')}</span>
        </NavigationLink>
      </div>
    </section>
  )
}