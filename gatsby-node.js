const path = require(`path`)

const languages = [
  {
    path: "/",
    code: "ru_UA",
  },
  {
    path: "/uk/",
    code: "uk_UA",
  },
  {
    path: "/en/",
    code: "en_UA",
  },
]

exports.createPages = async ({ actions: { createPage } }) => {
  languages.forEach(lang => {
    createPage({
      path: lang.path,
      component: path.resolve("./src/templates/Homepage.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}about/`,
      component: path.resolve("./src/templates/About.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })
}