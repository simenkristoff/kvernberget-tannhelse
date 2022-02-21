import AppointmentForm from '@components/forms/AppointmentForm'
import Layout from '@components/Layout'
import MetaHead from '@components/MetaHead'
import { getSiteSettings } from '@lib/queries/getSettings'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Fragment } from 'react'

export default function Contact({
  settings,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <MetaHead settings={settings} />
      <Layout settings={settings}>
        <div className="content-section flex justify-center">
          <AppointmentForm />
        </div>
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps({
  preview = false
}: GetStaticPropsContext) {
  const settings = await getSiteSettings()
  return {
    props: { settings, preview },
    revalidate: 60
  }
}
