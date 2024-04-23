const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(lazyImagesPlugin);
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  eleventyConfig.addPassthroughCopy("asset");
  eleventyConfig.addPassthroughCopy("all.js");
}