import LandingPage, { LandingPageProps } from '@components/LandingPage'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getEmployees } from '@lib/queries/getEmployees'
import { getLatestPost } from '@lib/queries/getLatestPost'
import Layout from '@components/Layout'
import { getSiteSettings } from '@lib/queries/getSettings'
import { Fragment } from 'react'
import { getReviews } from '@lib/queries/getReviews'
import MetaHead from '@components/MetaHead'
import { getFrontpage } from '@lib/queries/getLandingPage'

export default function Home({
  settings,
  frontpage,
  latestPost,
  reviews,
  employees,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const mapStateToProps: LandingPageProps = {
    frontpage,
    settings,
    latestPost,
    reviews,
    employees
  }

  return (
    <Fragment>
      <MetaHead settings={settings} />
      <Layout settings={settings}>
        <LandingPage {...mapStateToProps} />
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps({
  params,
  preview = false
}: GetStaticPropsContext) {
  const settings = await getSiteSettings()
  const frontpage = await getFrontpage(preview)
  const latestPost = await getLatestPost(preview)
  const reviews = await getReviews(preview)
  const employees = await getEmployees(preview)
  return {
    props: {
      settings,
      frontpage,
      latestPost,
      reviews,
      employees,
      preview
    },
    revalidate: 60
  }
}
