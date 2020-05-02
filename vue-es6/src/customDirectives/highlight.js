import Hljs from "highlight.js";
import "highlight.js/styles/routeros.css";

let Highlight = {};
Highlight.install = function(Vue) {
  Vue.directive("highlightInserted", {
    inserted: function(el) {
      let blocks = el.querySelectorAll("pre code");
      for (let i = 0; i < blocks.length; i++) {
        const item = blocks[i];
        Hljs.highlightBlock(item);
      }
      const h1 = el.querySelector('h1')
      el.removeChild(h1)
    }
  });
  Vue.directive("highlightUpdated", {
    componentUpdated: function(el) {
      let blocks = el.querySelectorAll("pre code");
      for (let i = 0; i < blocks.length; i++) {
        const item = blocks[i];
        Hljs.highlightBlock(item);
      }
      const h1 = el.querySelector('h1')
      el.removeChild(h1)
    }
  });
};

export default Highlight