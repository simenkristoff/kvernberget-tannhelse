import PropTypes from 'prop-types'
// import Cta from '../Cta'
import Image from 'next/image'
import client, { PortableText } from '@lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { ImageSection as ImageSectionProps } from '@lib/schema'

function ImageSection(props: ImageSectionProps) {
  // const { heading, label, text, image, cta } = props
  const { heading, label, text, image } = props

  if (!image) {
    return null
  }

  return (
    <div>
      <div className="container mx-auto mt-12 px-6">
        <div className="flex items-center">
          <div>
            <figure>
              <div className="relative mx-auto w-full rounded-md object-cover">
                <Image
                  src={useNextSanityImage(client, image?.asset)}
                  alt={image?.alt}
                  layout="responsive"
                  objectFit="contain"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
              <figcaption>
                <div>
                  <div>{label}</div>
                  <h2>{heading}</h2>
                  {text && <PortableText blocks={text} />}
                  {/* {cta && cta.route && <Cta {...cta} />} */}
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default ImageSection
