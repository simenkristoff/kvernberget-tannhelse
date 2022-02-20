import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import { getClient, usePreviewSubscription } from '@lib/sanity'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import SinglePage from '@components/SinglePage'
import { getSiteSettings } from '@lib/queries/getSettings'
import Layout from '@components/Layout'
import { Fragment } from 'react'
import MetaHead from '@components/MetaHead'
import ErrorNotFound from './ErrorNotFound'

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
  const router = useRouter()
  if (!router.isFallback && !page) {
    return <ErrorNotFound />
  }

  console.log(preview)
  const previewData = usePreviewSubscription(query, {
    params: { slug },
    initialData: page,
    enabled: preview || router.query.preview !== null
  })

  console.log(previewData)
  return (
    <Fragment>
      <MetaHead settings={settings} />
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
    props: { preview, settings, page, slug }
  }
}

export async function getStaticPaths () {
  const routes = await getClient()
    .fetch(`*[_type == "page" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`)

  return {
    paths: routes || null,
    fallback: true
  }
}

export default ProductPageContainer
