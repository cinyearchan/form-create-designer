module.exports = {
  pages: {
    app: {
      entry: "examples/main.js",
      template: "examples/index.html",
      filename: "index.html"
    }
  },
  publicPath: "/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: [".js", ".json", ".vue"],
      alias: {
        vue$: "vue/dist/vue.js",
        "@form-create/element-ui$":
          "@form-create/element-ui/dist/form-create.js"
      }
    }
  }
}
