import RenderSections from './RenderSections'

function SinglePage({ page }: any) {
  const { content = [] } = page
  return <RenderSections sections={content} />
}

export default SinglePage
