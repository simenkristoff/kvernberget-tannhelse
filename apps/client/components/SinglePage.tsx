import RenderSections from './sections/RenderSections'

function SinglePage({ page }: any) {
  const { content = [] } = page
  return <RenderSections sections={content} title={page.title} />
}

export default SinglePage
