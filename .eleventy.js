module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("asset");
    eleventyConfig.addPassthroughCopy("all.js")
  };

const lazyloadPlugin = require('eleventy-plugin-lazyload')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(lazyloadPlugin, {
		alt: false, // if enabled, adds an empty alt attribute on images that don't have it
	})
}