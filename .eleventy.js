module.exports = function(eleventyConfig) {
eleventyConfig.addFilter('tagFilter', function(collection, category) {
  if (!category) return collection;
    const filtered = collection.filter(item => item.data.tags.includes(category))
    return filtered;
});

  // collections
  eleventyConfig.addCollection('generatedPages', async function(collectionApi) {
    return collectionApi.getFilteredByTag('page')
      .filter(item => !item.data.pagination || !item.data.pagination.previous)
  })
  eleventyConfig.addCollection('generatedTags', function(collectionApi) {
    const tags = collectionApi.getFilteredByTag('product')
      .flatMap(item => item.data.tags.filter(tag => tag !== 'product'))
    // remove duplicates using Set
    return [...new Set(tags)]
  })
  // slideshow
  eleventyConfig.addPassthroughCopy({
    'node_modules/@splidejs/splide/dist/js': 'js',
    'node_modules/@splidejs/splide/dist/css': 'css',
  })
  // copy folders
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('css/*.css')
  eleventyConfig.addPassthroughCopy('js')
  // other config
  return {
    dir: {
      layouts: '_layouts',
      includes: '_includes',
    },
  }
}
