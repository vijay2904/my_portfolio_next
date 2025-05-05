'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'
import { ProjectMetadata } from '@/lib/projects';
import Projects from './projects';
import { useTranslations } from 'next-intl';

export default function ProjectsWithSearch({ projects }: { projects: ProjectMetadata[] }) {
  const [query, setQuery] = useState('');
  const filtered = projects.filter(project =>
    project.title?.toLowerCase().includes(query.toLowerCase())
  )

  const t = useTranslations("ProjectsPage");

  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }

  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input
          type='text'
          placeholder={t("placeholder")}
          className='h-9 w-full sm:w-1/2'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>

      <Projects projects={filtered} />
    </div>
  )
}