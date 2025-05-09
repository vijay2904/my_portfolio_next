import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {routing} from '@/i18n/routing';
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import Chatbot from "@/components/chatbot";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;

  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function RootLayout({
  children,
  params
}: Props) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  
  return (
      <html lang={locale} suppressHydrationWarning>
        <body
          className={cn(
            'flex min-h-screen flex-col font-sans antialiased',
            inter.variable,
            playfair.variable
          )}
        >
        <NextIntlClientProvider>
            <Providers>
              <Header />
                <main className='grow'>{children}</main>
              <Footer />
              <Chatbot />
            </Providers>
        </NextIntlClientProvider>
        
        </body>
      </html>
  );
}
