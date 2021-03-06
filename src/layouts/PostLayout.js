import Link from "@/components/Link"
import PageTitle from "@/components/PageTitle"
import SectionContainer from "@/components/SectionContainer"
import { BlogSEO } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata"

const editUrl = (fileName) =>
  `${siteMetadata.siteRepo}/blob/main/src/data/blog/${fileName}`

const postDateTemplate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

export default function PostLayout({
  frontMatter,

  next,
  prev,
  children,
}) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      <article>
        <div className="xl:dark:divide-gray-700 xl:divide-gray-200 xl:divide-y">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="font-medium leading-6 text-base text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(
                        siteMetadata.locale,
                        postDateTemplate,
                      )}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-gray-200 divide-y pb-8 xl:divide-y-0 xl:gap-x-6 xl:grid xl:grid-cols-4 dark:divide-gray-700"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <dl></dl>
            <div className="divide-gray-200 divide-y xl:col-span-3 xl:pb-0 xl:row-span-2 dark:divide-gray-700">
              <div className="max-w-none pb-8 prose pt-10 dark:prose-dark">
                {children}
              </div>
              <div className="pb-6 pt-6 text-gray-700 text-sm dark:text-gray-300">
                <Link href={editUrl(fileName)}>{"View on GitHub"}</Link>
              </div>
            </div>
            <footer>
              <div className="divide-gray-200 font-medium leading-5 text-sm xl:col-start-1 xl:divide-y xl:row-start-2 dark:divide-gray-700">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-gray-500 text-xs tracking-wide uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:py-8 xl:space-y-8">
                    {prev && (
                      <div>
                        <h2 className="text-gray-500 text-xs tracking-wide uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 dark:hover:text-primary-400 hover:text-primary-600">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-gray-500 text-xs tracking-wide uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 dark:hover:text-primary-400 hover:text-primary-600">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 dark:hover:text-primary-400 hover:text-primary-600"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
