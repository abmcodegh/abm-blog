export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-152e3544","v-7e9cf1a3","v-6058c20c","v-5234b6ea","v-711dff1a","v-1abb7b26","v-b0d9a82a"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6058c20c","v-5234b6ea","v-7e9cf1a3","v-711dff1a","v-1abb7b26","v-b0d9a82a","v-152e3544"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
