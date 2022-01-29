import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
import DocListLayout from "@/layouts/DocListLayout"
import { PageSEO } from "@/components/SEO"

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("doc")
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Doc({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`Documentation - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <DocListLayout
        posts={posts}
        basePath="doc"
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Documentation"
      />
    </>
  )
}
