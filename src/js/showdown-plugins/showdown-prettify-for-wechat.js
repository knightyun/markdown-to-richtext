var showdown = require('../showdown');

showdown.extension('prettify', function () {
  return [{
    type:   'output',
    filter: function (source) {
      return source.replace(/(<pre[^>]*>)?[\n\s]?<code([^>]*)>/gi, function (_, pre, codeClass) {
        if (pre) {
          return '<pre class="prettyprint linenums"><code' + codeClass + '>';
        } else {
          return '<code class="prettyprint code-in-text">';
        }
      });
    }
  }];
});
