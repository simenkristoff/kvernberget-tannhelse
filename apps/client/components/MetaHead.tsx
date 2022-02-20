import { SiteSettings } from '@lib/schema'
import Head from 'next/head'
/**
 * Source: https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/
 */

interface MetaHeadProps {
  pageTitle?: string;
  description?: string;
  twitterHandle?: string;
  settings: SiteSettings;
}

export default function MetaHead ({
  pageTitle,
  description,
  twitterHandle,
  settings
}: MetaHeadProps) {
  return (
    <Head>
      <title>{settings.siteTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="title" content={pageTitle || settings.siteTitle} />
      <meta
        name="description"
        content={description || settings.siteDescription}
      />
      {/* Twitter */}
      {twitterHandle && (
        <meta name="twitter:card" content="summary" key="twcard" />
      )}
      {twitterHandle && (
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
      )}

      {/* Open Graph */}
      {/* <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" /> */}
    </Head>
  )
}
