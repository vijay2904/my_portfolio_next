'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from './ui/button';
const authorImage = '/images/authors/author.jpg';

export default function Intro() {

  const t = useTranslations('Homepage');

  const resumeLink = 'https://drive.google.com/file/d/19jaeVl6f0n0odaJCDl-1oqxis0xlPQrF/view?usp=sharing';

  function openResume() {
    window.open(resumeLink, '_blank');
  }

    return (
      <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0 flex flex-col items-center md:block'>
        <h1 className='title no-underline text-center md:text-left'>{t('title')} <br/>{t('my_name')}</h1>
        <p className='mt-3 font-light text-muted-foreground text-justify'>
          {t('about_me')}
        </p>
        <Button className='bg-foreground cursor-pointer w-30 rounded-full px-5 py-2.5 mt-8 mb-2 scale-95 transition-transform duration-300 ease-in-out hover:scale-105 font-md' onClick={openResume}>
          <span>Resume</span>
        </Button>
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