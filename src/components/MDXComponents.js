/* eslint-disable react/display-name */
import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import Image from "./Image"
import CustomLink from "./Link"
import TOCInline from "./TOCInline"
// import Tip from "./Tip"
import Pre from "./Pre"

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  // Tip,
  // eslint-disable-next-line no-unused-vars
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
