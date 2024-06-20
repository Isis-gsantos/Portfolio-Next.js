import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'pt-BR'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages = {
    home: (await import(`../messages/${locale}/home.json`)).default,
    about: (await import(`../messages/${locale}/about.json`)).default,
    projects: (await import(`../messages/${locale}/projects.json`)).default,
    contact: (await import(`../messages/${locale}/contact.json`)).default
  };

  return {
    messages
  };
});