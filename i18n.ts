import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
export const locales: ['en', 'ka'] = ['en', 'ka'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});