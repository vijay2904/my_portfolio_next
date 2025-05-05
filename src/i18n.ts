import { notFound } from "next/navigation";
import { getRequestConfig, RequestConfig } from "next-intl/server";


export const locales = ['en', 'jp'];

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as string)) {
        notFound();
    }

    return {
        messages: (await import(`../../messages/${locale}.json`)).default,
    } as RequestConfig;
});