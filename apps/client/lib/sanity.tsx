import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import {
  createClient,
  createPortableTextComponent,
  createImageUrlBuilder,
  createPreviewSubscriptionHook
} from 'next-sanity'

import { config } from './config'

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.')
}
export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source)

export const imageBuilder = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

const color = (props: any) => {
  return <span style={{ color: props.mark.hex }}>{props.children}</span>
}

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {
    marks: { color },
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }
})

export const client = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: true
})

export const getClient = (usePreview?: boolean) =>
  usePreview ? previewClient : client
export default client
