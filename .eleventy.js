const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(lazyImagesPlugin);
  eleventyConfig.addPlugin(tinyHTML);
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("asset");
  eleventyConfig.addPassthroughCopy("all.js");
}