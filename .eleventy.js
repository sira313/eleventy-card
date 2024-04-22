const { execSync } = require('child_process')
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("asset");
  eleventyConfig.addPassthroughCopy("all.js");
  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --source _site --bundle-dir pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
  })
}