import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <section className='heroPost'>
      <div className="heroImage">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="heroText">
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
    </section>
  )
}
