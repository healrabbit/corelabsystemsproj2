module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the entire styles folder
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
   output: "_docs"  // GitHub Pages will serve from this
    }
  };
};
