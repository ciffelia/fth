// This code was copied from node-fetch, which is authored by David Frank and licensed under MIT License.
// The original file is available at https://github.com/node-fetch/node-fetch/blob/152214ca2f6e2a5a17d71e4638114625d3be30c6/browser.js
// and the license of node-fetch is available at https://github.com/node-fetch/node-fetch/blob/152214ca2f6e2a5a17d71e4638114625d3be30c6/LICENSE.md

// Global object
let g

if (typeof globalThis !== 'undefined') {
  g = globalThis
} else if (typeof self !== 'undefined') {
  g = self
} else if (typeof window !== 'undefined') {
  g = window
} else if (typeof global !== 'undefined') {
  g = global
} else {
  throw new Error('Unable to locate global object')
}

module.exports = exports = g.fetch;

// Needed for TypeScript and Webpack.
if (g.fetch) {
  exports.default = g.fetch.bind(g);
}

exports.Headers = g.Headers;
exports.Request = g.Request;
exports.Response = g.Response;
