import AppointmentForm from '@components/forms/AppointmentForm'
import Layout from '@components/Layout'
import { getSiteSettings } from '@lib/queries/getSettings'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Fragment } from 'react'

export default function Contact ({
  settings,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Layout settings={settings}>
        <AppointmentForm />
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps ({
  preview = false
}: GetStaticPropsContext) {
  const settings = await getSiteSettings()
  return {
    props: { settings, preview }
  }
}
