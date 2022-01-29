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
    <>
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
                <div className="divide-gray-200 font-medium leading-5 text-sm xl:col-start-1 xl:divide-y xl:row-start-2 dark:divide-gray-700"></div>
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
    </>
  )
}
