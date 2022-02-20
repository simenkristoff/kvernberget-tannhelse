import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import { getClient, usePreviewSubscription } from '@lib/sanity'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import SinglePage from '@components/SinglePage'
import { getSiteSettings } from '@lib/queries/getSettings'
import Layout from '@components/Layout'
import { Fragment } from 'react'
import Error from 'next/error'

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  ...
}`

type RouteParams = { slug: string };

function ProductPageContainer ({
  settings,
  page,
  preview,
  slug
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!settings || !page) return null

  const router = useRouter()
  if (!router.isFallback && !page) {
    return <Error statusCode={404} />
  }

  const previewData = usePreviewSubscription(query, {
    params: { slug },
    initialData: page,
    enabled: preview || router.query.preview !== null
  })

  return (
    <Fragment>
      <Layout settings={settings}>
        <SinglePage page={preview ? previewData : page} />
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps ({
  params,
  preview = false
}: GetStaticPropsContext<RouteParams>) {
  const slug = params?.slug || ''
  const settings = await getSiteSettings()
  const page = await getClient(preview).fetch(query, {
    slug
  })

  return {
    props: { preview, settings, page, slug },
    revalidate: 60
  }
}

export async function getStaticPaths () {
  const routes = await getClient()
    .fetch(`*[_type == "page" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`)

  return {
    paths: routes || null,
    fallback: false
  }
}

export default ProductPageContainer
