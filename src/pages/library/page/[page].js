import { PageSEO } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import LibraryListLayout from "@/layouts/LibraryListLayout"
import { POSTS_PER_PAGE } from "../../library"

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter("library")
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter("library")
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber,
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function LibraryPage({
  posts,
  initialDisplayPosts,
  pagination,
}) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
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
