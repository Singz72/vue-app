const marked = require("marked");
const renderer = new marked.Renderer();
const hljs = require("highlight.js/lib/highlight");
const javascript = require("highlight.js/lib/languages/javascript");
hljs.registerLanguage("javascript", javascript);

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      console.log("production");
    } else {
      console.log("development");
    }
    return {
      module: {
        rules: [
          {
            test: /\.md$/,
            use: [
              {
                loader: "html-loader"
              },
              {
                loader: "markdown-loader",
                options: {
                  highlight: function(code, language) {
                    const validLanguage = hljs.getLanguage(language)
                      ? language
                      : "javascript";
                    return hljs.highlight(validLanguage, code).value;
                  },
                  pedantic: false,
                  gfm: true,
                  breaks: false,
                  sanitize: false,
                  smartLists: true,
                  smartypants: false,
                  xhtml: false,
                  renderer
                }
              }
            ]
          }
        ]
      }
    };
  }
};
