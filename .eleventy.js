module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("asset");
    eleventyConfig.addPassthroughCopy("all.js")
  };
