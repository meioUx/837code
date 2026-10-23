import { useEffect } from 'react';

export function usePageMeta(
  title: string,
  description: string,
  imagePath = '/images/837code-logo.png',
) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, value: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);

    const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
    setMeta('meta[property="og:image"]', siteUrl ? `${siteUrl}${imagePath}` : imagePath);
    if (!siteUrl) return;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = `${siteUrl}${window.location.pathname}`;
  }, [title, description, imagePath]);
}
