module.exports = function(eleventyConfig) {
  // // filters
  // eleventyConfig.addFilter('removePaginated', function(items) {
  //   return items
  //     .filter(item => !item.data.pagination || !item.data.pagination.previous)
  // })
  // collections
  eleventyConfig.addCollection('generatedPages', function(collectionApi) {
    return collectionApi.getFilteredByTag('page')
      .filter(item => !item.data.pagination || !item.data.pagination.previous)
  })
  eleventyConfig.addCollection('generatedTags', function(collectionApi) {
    return collectionApi.getFilteredByTag('product')
      .flatMap(item => item.data.tags.filter(tag => tag !== 'product'))
  })
  // copy folders
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('js')
  // other config
  return {
    dir: {
      layouts: '_layouts',
      includes: '_includes',
    },
  }
}
