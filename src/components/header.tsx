'use client';

import ThemeToggle from './theme-toggle';
import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('NavLinks');
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

    return (
        <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
        <nav className='container flex max-w-3xl items-center justify-between mx-auto px-4'>
          <div>
            <NavigationLink href='/' className='font-serif text-2xl font-bold' onClick={() => setIsOpen(false)}>
              VK
            </NavigationLink>
          </div>

          <ul className='hidden lg:flex lg:items-center lg:gap-6 lg:text-sm lg:font-light lg:text-muted-foreground'>

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
  
          <div onClick={() => setIsOpen(false)}>
            <ThemeToggle />
          </div>

          <section className="flex lg:hidden">
          <div
            className="flex flex-col justify-center items-center"
            onClick={handleClick}>

            <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
            </span>
            <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                            'opacity-0' : 'opacity-100'
                            }`} >
            </span>
            <span className={`bg-gray-500 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${isOpen ? 
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                            }`} >
            </span>    
          </div>

          <div className={isOpen ? 'absolute top-full left-0 w-full bg-background/75 backdrop-blur-sm' : 'hidden'}>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className='transition-colors hover:text-foreground'>
                <NavigationLink href='/posts' onClick={handleClick}>{t('Blogs')}</NavigationLink>
              </li>
              <li className='transition-colors hover:text-foreground'>
                <NavigationLink href='/projects' onClick={handleClick}>{t('Projects')}</NavigationLink>
              </li>
              <li className='transition-colors hover:text-foreground'>
                <NavigationLink href='/contact' onClick={handleClick}>{t('Contact')}</NavigationLink>
              </li>
            </ul>
          </div>
        </section>
        </nav>
      </header>
    )
}