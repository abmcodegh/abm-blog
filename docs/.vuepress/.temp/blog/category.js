export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Jmix":{"path":"/category/jmix/","keys":["v-7e9cf1a3","v-6058c20c","v-5234b6ea","v-711dff1a","v-1abb7b26","v-b0d9a82a"]},"少代码":{"path":"/category/%E5%B0%91%E4%BB%A3%E7%A0%81/","keys":["v-7e9cf1a3"]},"技术文章":{"path":"/category/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/","keys":["v-6058c20c","v-5234b6ea","v-b0d9a82a"]},"里程碑":{"path":"/category/%E9%87%8C%E7%A8%8B%E7%A2%91/","keys":["v-711dff1a"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
