const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(tinyHTML);
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("asset");
  eleventyConfig.addPassthroughCopy("all.js");
}