const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: path.resolve('./src/components/DrawLogo/DrawLogo.js'),
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

exports.createPages = async ({ graphql, actions: { createPage } }) => {
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

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}blog/`,
      component: path.resolve("./src/templates/Blog.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}catalog/`,
      component: path.resolve("./src/templates/Catalog.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}login/`,
      component: path.resolve("./src/templates/Login.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}registration/`,
      component: path.resolve("./src/templates/Registration.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}recovery/`,
      component: path.resolve("./src/templates/Recovery.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}thanks/`,
      component: path.resolve("./src/templates/Thanks.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}checkout/`,
      component: path.resolve("./src/templates/Checkout.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}account/`,
      component: path.resolve("./src/templates/Account.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}privacy/`,
      component: path.resolve("./src/templates/Privacy.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}terms/`,
      component: path.resolve("./src/templates/Terms.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}sitemap/`,
      component: path.resolve("./src/templates/Sitemap.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}delivery/`,
      component: path.resolve("./src/templates/Delivery.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}faq/`,
      component: path.resolve("./src/templates/Faq.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}gallery/`,
      component: path.resolve("./src/templates/Gallery.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}search/`,
      component: path.resolve("./src/templates/Search.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}single-post/`,
      component: path.resolve("./src/templates/SinglePost.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}single-product/`,
      component: path.resolve("./src/templates/SingleProduct.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}category/`,
      component: path.resolve("./src/templates/Category.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    deletePage(oldPage)
    createPage(page)
  }
}