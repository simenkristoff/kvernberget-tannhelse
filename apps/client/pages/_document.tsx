import { Html, Head, Main } from 'next/document'

import DeferNextScript from '../utils/DeferNextScript'

export default function Document() {
  return (
    <Html lang="no">
      <Head />
      <body className="relative m-0 mx-auto h-screen w-screen overflow-x-hidden p-0">
        <Main />
        <DeferNextScript />
      </body>
    </Html>
  )
}
