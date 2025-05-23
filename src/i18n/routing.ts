import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'jp'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/posts': {
      jp: '/posts'
    },
    '/projects': {
      jp: '/projects'
    },
    '/contact': {
      jp: '/contact'
    },
    '/posts/[slug]': {
      jp: '/posts/[slug]'
    },
    '/projects/[slug]': {
      jp: '/projects/[slug]'
    }
  }
});