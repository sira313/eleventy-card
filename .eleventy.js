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

  // Collection tags thanks chatgpt
  eleventyConfig.addCollection("blogTags", function(collection) {
    let tagsSet = new Set();
    collection.getAll().forEach(item => {
      if (item.filePathStem.includes("/blog/") && item.data.tags) {
        item.data.tags.forEach(tag => {
          tagsSet.add(tag);
        });
      }
    });
    return Array.from(tagsSet);
  });

  eleventyConfig.addCollection("photosTags", function(collection) {
    let tagsSet = new Set();
    collection.getAll().forEach(item => {
      if (item.filePathStem.includes("/photos/") && item.data.tags) {
        item.data.tags.forEach(tag => {
          tagsSet.add(tag);
        });
      }
    });
    return Array.from(tagsSet);
  });
}