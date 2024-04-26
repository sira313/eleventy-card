const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(lazyImagesPlugin);
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  eleventyConfig.addPassthroughCopy("asset");
  eleventyConfig.addPassthroughCopy("all.js");
  // Collection post blog
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('blog/posts/**/*.md');
  });

  // Collection post photos
  eleventyConfig.addCollection('photos', function(collectionApi) {
    return collectionApi.getFilteredByGlob('photos/posts/**/*.md');
  });
}