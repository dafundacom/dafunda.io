import Link from "@/components/Link"

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:mt-24 md:space-x-6">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 md:border-r-2 md:leading-14 md:px-6 md:text-8xl dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn&#39;t find this page.
        </p>
        <p className="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow dark:hover:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  )
}
