import LandingPage, { LandingPageProps } from '@components/LandingPage'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getEmployees } from '@lib/queries/getEmployees'
import { getLatestPost } from '@lib/queries/getLatestPost'
import Layout from '@components/Layout'
import { getSiteSettings } from '@lib/queries/getSettings'
import MetaHead from '@components/MetaHead'
import { Fragment } from 'react'
import { getReviews } from '@lib/queries/getReviews'

export default function Home ({
  settings,
  latestPost,
  reviews,
  employees,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const mapStateToProps: LandingPageProps = {
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

export async function getStaticProps ({
  params,
  preview = false
}: GetStaticPropsContext) {
  const settings = await getSiteSettings()
  const latestPost = await getLatestPost(preview)
  const reviews = await getReviews(preview)
  const employees = await getEmployees(preview)
  return {
    props: {
      settings,
      latestPost,
      reviews,
      employees,
      preview
    },
    revalidate: 10
  }
}
