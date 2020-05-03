module.exports = {
base:'/vuepress-test/tutorial/',
 configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/vuepress-test/tutorial/'
      }
    }
  },
  themeConfig: {
    search: false,
    navbar: false
  } 
}
