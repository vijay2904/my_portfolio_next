import { JSX, SVGProps } from 'react';

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vijay-rohit-kanchusthambham-63ba481b0',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/vijay2904',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    )
  },
  {
    name: 'Qiita',
    href: 'https://qiita.com/vijay2904',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox="0 0 62 24"{...props} className='h-5 w-12'>
          <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7666 0.700195C17.3187 0.700195 21.2117 5.72871 21.2119 10.623C21.2119 13.1987 20.3227 15.5127 18.7617 17.3232L21.1348 19.6133L21.5078 19.9736L21.1348 20.333L19.8633 21.5596L19.5166 21.8945L19.1689 21.5596L16.582 19.0645C14.8922 20.1296 12.9195 20.6943 10.9453 20.6943C4.39299 20.6943 0.5 15.665 0.5 10.7705C0.500132 4.4299 5.73901 0.700319 10.7666 0.700195ZM54.9971 5.73047C56.4971 5.73047 57.7836 6.1216 58.8213 6.87891V6.19727H61.5V20.3262H58.8213V19.5176C57.8369 20.2491 56.582 20.6201 55.1758 20.6201C50.3061 20.6201 47.376 16.8961 47.376 13.249C47.3761 8.53158 51.2628 5.73066 54.9971 5.73047ZM41.2539 2.56543V6.19727H47.1807V8.81641H41.2539V15.5068C41.2539 16.7123 42.2348 18.0254 44.0352 18.0254C44.5076 18.0254 44.9694 17.901 45.3623 17.6416L45.3896 17.623L45.4199 17.6084L45.5732 17.5352L45.9951 17.3311L46.2256 17.7402L47.0146 19.1387L47.2764 19.6025L46.7959 19.835L46.6436 19.9082L46.6426 19.9072C45.8651 20.3065 44.9278 20.5469 44.0352 20.5469C40.6203 20.5469 38.5754 18.0059 38.5752 15.4092V2.56543H41.2539ZM27.6211 6.19727V20.3262H24.9424V6.19727H27.6211ZM34.4375 6.19727V20.3262H31.7588V6.19727H34.4375ZM10.7666 3.41797C7.07066 3.41809 3.25508 6.1666 3.25488 10.7949C3.25488 14.3439 6.10421 18.0252 10.8428 18.0254C15.5749 18.0254 18.4316 14.2533 18.4316 10.7217C18.4316 6.60339 15.092 3.41797 10.7666 3.41797ZM54.7891 8.35547C52.3799 8.46604 50.0802 10.2792 50.0801 13.249C50.0801 15.609 51.9522 18.001 55.2012 18.001C56.6088 18.0009 58.0067 17.4184 58.9482 16.373V9.96484C57.9311 8.92758 56.5013 8.3291 55.0303 8.35059H55.0225L54.7891 8.35547ZM26.2314 1.65723C27.2729 1.65744 28.1805 2.47226 28.1807 3.55566C28.1807 4.58459 27.3043 5.43045 26.2314 5.43066C25.1956 5.43066 24.2812 4.62047 24.2812 3.55566C24.2814 2.50785 25.1528 1.65723 26.2314 1.65723ZM33.0479 1.65723C34.0893 1.65742 34.9969 2.47224 34.9971 3.55566C34.9971 4.58461 34.1207 5.43047 33.0479 5.43066C32.012 5.43066 31.0977 4.62047 31.0977 3.55566C31.0979 2.50785 31.9692 1.65723 33.0479 1.65723Z"
          />
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className='pb-6'>
      <div className='container max-w-3xl mx-auto sm:px-4'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Vijay Rohit K. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}