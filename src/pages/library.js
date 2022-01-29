import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
import LibraryListLayout from "@/layouts/LibraryListLayout"
import { PageSEO } from "@/components/SEO"

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("library")
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Library({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`Library - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <LibraryListLayout
        posts={posts}
        basePath="library"
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Library"
      />
    </>
  )
}
