import Footer from '@components/Footer'
import AppointmentForm from '@components/forms/AppointmentForm'
import Header from '@components/Header'
import { useSettings } from 'context/SettingsContext'
import Head from 'next/head'

export default function Contact () {
  const settings = useSettings()
  // const router = useRouter()
  // console.log(siteSettings[0])
  // const { data: posts } = usePreviewSubscription<any>(query, {
  //   initialData: postdata,
  //   enabled: preview || router.query.preview !== undefined
  // })

  return (
      <div className='m-0 p-0'>
        <Head>
          <title>{settings.siteTitle}</title>
          <meta name="description" content={settings.siteDescription} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>
        <main>
            <AppointmentForm/>
        </main>

        <Footer/>
      </div>
  )
}
