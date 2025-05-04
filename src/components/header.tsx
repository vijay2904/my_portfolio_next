'use client';

import ThemeToggle from './theme-toggle';
import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';

export default function Header() {
  const t = useTranslations('NavLinks');
    return (
        <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
        <nav className='container flex max-w-3xl items-center justify-between mx-auto px-4'>
          <div>
            <NavigationLink href='/' className='font-serif text-2xl font-bold'>
              VK
            </NavigationLink>
          </div>
  
          <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>

            <li className='transition-colors hover:text-foreground'>
              <NavigationLink href='/posts'>{t('Blogs')}</NavigationLink>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <NavigationLink href='/projects'>{t('Projects')}</NavigationLink>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <NavigationLink href='/contact'>{t('Contact')}</NavigationLink>
            </li>
          </ul> 
  
          <div>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    )
}