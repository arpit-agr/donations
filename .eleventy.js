const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");

module.exports = function(eleventyConfig) {
  // Enable Quiet Mode to Reduce Console Noise And Install Directory Output Plugin 
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPlugin(directoryOutputPlugin);
  
  // Return your Object options:
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public"
    }
  }
};