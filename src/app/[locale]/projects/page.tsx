import ProjectsWithSearch from '@/components/projects-using-search';
import React from 'react';
import { getProjects } from '@/lib/projects';
import { getTranslations } from 'next-intl/server';

export default async function ProjectsPage() {
    const projects = await getProjects();


    const t = await getTranslations("ProjectsPage");
    
    return (
        <section className='pb-24 pt-40'>
            <div className="container max-w-3xl mx-auto px-4">
                <div className="title mb-12">{t("title")}</div>

                <ProjectsWithSearch projects={projects} />
            </div>
        </section>
    )
}