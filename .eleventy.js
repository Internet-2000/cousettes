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
  const sitemap = require("@quasibit/eleventy-plugin-sitemap")
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: site.url + site.baseurl,
    },
  })
  // copy folders
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('uploads')
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css/*.css')
  eleventyConfig.addPassthroughCopy('css/*.jpg') // favicon
  eleventyConfig.addPassthroughCopy('css/*.png') // favicon
  eleventyConfig.addPassthroughCopy('css/*.ico') // favicon
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('CNAME')

  // other config
  return {
    dir: {
      layouts: '_layouts',
      includes: '_includes',
    },
  }
}
