// import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

// import { groq } from 'next-sanity'
// import { getClient, usePreviewSubscription } from '@lib/sanity'
// import { useRouter } from 'next/router'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Frontpage from '@components/Frontpage'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { useSettings } from 'context/SettingsContext'
import { getEmployees } from '@lib/queries/getEmployees'
import { useWindow } from 'context/WindowContext'
import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import { getLatestPost } from '@lib/queries/getLatestPost'

export default function Home ({ employees, latestPost, preview }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { fixed } = useWindow()
  const settings = useSettings()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
      <Frontpage employees={employees} latestPost={latestPost}/>
      <div className='py-10'></div>
      {/* {posts &&
        posts.map((post: any, idx:any) => (
          <article key={idx}>
            <h3 className="text-lg"> {post.title} </h3>
            <p className="mt-3">{post.excerpt}</p>
          </article>
        ))} */}
      </main>

      {fixed && (
        <button className='btn btn-primary fixed bottom-2 right-2 z-50 p-2 drop-shadow-lg hover:bottom-4 active:bottom-4 transition-all duration-300' onClick={scrollToTop}>
          <ChevronDoubleUpIcon className='w-6 h-6'/>
        </button>
      )}

      <Footer/>
    </div>
  )
}

export async function getStaticProps ({ params, preview = false }: GetStaticPropsContext) {
  const employees = await getEmployees(preview)
  const latestPost = await getLatestPost(preview)
  return {
    props: {
      employees,
      latestPost,
      preview
    },
    revalidate: 10
  }
}
