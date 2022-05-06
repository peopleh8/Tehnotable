const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: path.resolve('./src/components/Homepage/Fullpage/DrawLogo.js'),
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

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

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}contacts/`,
      component: path.resolve("./src/templates/Contacts.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })
}