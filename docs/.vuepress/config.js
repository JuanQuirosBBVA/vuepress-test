module.exports = {
base:'/CeliFormacion/tutorial/',
 configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/CeliFormacion/tutorial/'
      }
    }
  },
  themeConfig: {
    search: false,
    navbar: false
  } 
}
