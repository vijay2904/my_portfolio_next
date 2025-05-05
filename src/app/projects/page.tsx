import ProjectsWithSearch from '@/components/projects-using-search';
import React from 'react';
import { getProjects } from '@/lib/projects';

export default async function ProjectsPage() {
    const projects = await getProjects();
    
    return (
        <section className='pb-24 pt-40'>
            <div className="container max-w-3xl mx-auto px-4">
                <div className="title mb-12">Projects</div>

                <ProjectsWithSearch projects={projects} />
            </div>
        </section>
    )
}