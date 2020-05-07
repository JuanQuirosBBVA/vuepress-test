// webpack.config.js

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const ASSET_PATH = '/CeliFormacion/';


module.exports = {
  plugins: [
    new VuetifyLoaderPlugin({
        match (originalTag, { kebabTag, camelTag, path, component }) {
          if (kebabTag.startsWith('core-')) {
            return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
          }
        }
      })
  ],
  output: {
    publicPath: ASSET_PATH,
    },
}