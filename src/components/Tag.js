import Link from "next/link"
import kebabCase from "@/lib/utils/kebabCase"

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="font-medium mr-3 text-primary-500 text-sm uppercase dark:hover:text-primary-400 hover:text-primary-600">
        {text.split(" ").join("-")}
      </a>
    </Link>
  )
}

export default Tag
