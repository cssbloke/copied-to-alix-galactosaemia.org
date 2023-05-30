import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className='homepageContent'>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Articles (feed from wordpress)
      </h2>
      <div className="">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>

    </section>
  )
}
