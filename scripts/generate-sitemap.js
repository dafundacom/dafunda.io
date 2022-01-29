const fs = require("fs")
const globby = require("globby")
const prettier = require("prettier")
const siteMetadata = require("@/data/siteMetadata")

;(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js")
  const pages = await globby([
    "src/pages/*.js",
    "src/data/blog/**/*.mdx",
    "src/data/blog/**/*.md",
    "public/tags/**/*.xml",
    "!src/pages/_*.js",
    "!src/pages/api",
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("src/pages/", "/")
                  .replace("src/data/blog", "/blog")
                  .replace("public/", "/")
                  .replace(".js", "")
                  .replace(".mdx", "")
                  .replace(".md", "")
                  .replace("feed.xml", "")
                const route = path === "/index" ? "" : path
                if (
                  page === `src/pages/404.js` ||
                  page === `src/pages/blog/[...slug].js`
                ) {
                  return
                }
                return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${route}</loc>
                        </url>
                    `
              })
              .join("")}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", formatted)
})()
