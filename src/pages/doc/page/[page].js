import { PageSEO } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import DocListLayout from "@/layouts/DocListLayout"
import { POSTS_PER_PAGE } from "../../doc"

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter("doc")
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
  const posts = await getAllFilesFrontMatter("doc")
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

export default function DocPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
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
