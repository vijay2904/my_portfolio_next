import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'jp'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/posts': {
      jp: '/ブログ'
    },
    '/projects': {
      jp: '/projects'
    },
    '/contact': {
      jp: '/contact'
    },
    '/posts/[slug]': {
      jp: '/ブログ/[slug]'
    },
  }
});