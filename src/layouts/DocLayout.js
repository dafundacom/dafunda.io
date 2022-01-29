import Link from "@/components/Link"
import PageTitle from "@/components/PageTitle"
import SectionContainer from "@/components/SectionContainer"
import { BlogSEO } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata"

const editUrl = (fileName) =>
  `${siteMetadata.siteRepo}/blob/master/src/data/doc/${fileName}`

export default function DocLayout({ frontMatter, children }) {
  const { slug, fileName, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/doc/${slug}`} {...frontMatter} />
      <article>
        <div className="xl:dark:divide-gray-700 xl:divide-gray-200 xl:divide-y">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 xl:gap-x-6 xl:grid xl:grid-cols-4 dark:divide-gray-700"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <dl></dl>
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:pb-0 xl:row-span-2 dark:divide-gray-700">
              <div className="pt-10 pb-8 prose max-w-none dark:prose-dark">
                {children}
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(fileName)}>{"View on GitHub"}</Link>
              </div>
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:col-start-1 xl:divide-y xl:row-start-2 dark:divide-gray-700"></div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/doc"
                  className="text-primary-500 dark:hover:text-primary-400 hover:text-primary-600"
                >
                  &larr; Back to Documentation
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
