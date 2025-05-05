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
      jp: '/プロジェクト'
    },
    '/contact': {
      jp: '/連絡先'
    },
    '/posts/[slug]': {
      jp: '/ブログ/[slug]'
    },
    '/projects/[slug]': {
      jp: '/プロジェクト/[slug]'
    },
  }
});