const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
  };
};
