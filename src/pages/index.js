import Image from "@/components/Image"
import Link from "@/components/Link"
import { PageSEO } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata"
import { getAllFilesFrontMatter } from "@/lib/mdx"

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

export default function Home() {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <div className="relative mt-10 overflow-hidden bg-white md:mt-12 lg:mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:pb-28 lg:w-full xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Welcome to </span>
                  <span className="block text-teal-600 xl:inline">
                    Dafunda.io
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:max-w-xl sm:mt-5 sm:mx-auto sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  The technology you use impresses no one.
                </p>
                <p className="mt-1 text-base text-gray-500 sm:max-w-xl sm:mx-auto sm:text-lg md:text-xl lg:mx-0">
                  The experience you create with it is everything.
                </p>
                <div className="mt-5 sm:flex sm:justify-center sm:mt-8 lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/doc/getting-started">
                      <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md md:px-10 md:py-4 md:text-lg hover:bg-teal-700">
                        Getting started
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:ml-3 sm:mt-0">
                    <Link href="/blog">
                      <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-teal-700 bg-teal-100 border border-transparent rounded-md md:px-10 md:py-4 md:text-lg hover:bg-teal-200">
                        Blog
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:h-full lg:w-full"
            layout="fill"
            src="/static/images/hero.jpg"
            alt={siteMetadata.title}
          />
        </div>
      </div>
    </>
  )
}
