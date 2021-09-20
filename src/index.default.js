// This code was copied from node-fetch, which is authored by David Frank and licensed under MIT License.
// The original file is available at https://github.com/node-fetch/node-fetch/blob/152214ca2f6e2a5a17d71e4638114625d3be30c6/browser.js
// and the license of node-fetch is available at https://github.com/node-fetch/node-fetch/blob/152214ca2f6e2a5a17d71e4638114625d3be30c6/LICENSE.md

module.exports = exports = globalThis.fetch;

// Needed for TypeScript and Webpack.
if (globalThis.fetch) {
  exports.default = globalThis.fetch.bind(globalThis);
}

exports.Headers = globalThis.Headers;
exports.Request = globalThis.Request;
exports.Response = globalThis.Response;
