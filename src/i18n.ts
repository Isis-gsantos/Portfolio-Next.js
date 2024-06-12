import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'pt-BR'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages = {
    home: (await import(`../messages/${locale}/home.json`)).default,
  };

  return {
    messages
  };
});

