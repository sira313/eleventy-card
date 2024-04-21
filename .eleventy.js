module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("asset");
    eleventyConfig.addPassthroughCopy("all.js");
    eleventyConfig.addFilter("dateFmt", (value) => {
        return value.toISOString().split("T")[0];
    });
  };
