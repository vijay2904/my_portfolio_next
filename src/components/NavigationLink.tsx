'use client';

import clsx from 'clsx';
import {ComponentProps} from 'react';
import {Link} from '@/i18n/navigation';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {

  return (
    <Link
      className={clsx(
        'inline-block px-2 py-3 transition-colors',
      )}
      href={href}
      {...rest}
    />
  );
}