import { useTranslations } from 'next-intl';
import Image from 'next/image';
const authorImage = '/images/authors/author.jpg';

export default function Intro() {

  const t = useTranslations('Homepage');

    return (
        <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>{t('title')} <br/>{t('my_name')}</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          {t('about_me')}
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Vijay Rohit K'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
    )
}