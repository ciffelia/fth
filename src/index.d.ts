// This code was copied from cross-fetch, which is authored by Leonardo Quixadá and licensed under MIT License.
// The original file is available at https://github.com/lquixada/cross-fetch/blob/7e4b657fa43915672350bcc53413721cbc14bd36/index.d.ts
// and the license of cross-fetch is available at https://github.com/lquixada/cross-fetch/blob/7e4b657fa43915672350bcc53413721cbc14bd36/LICENSE

/// <reference lib="DOM" />
/// <reference lib="DOM.Iterable" />

declare const _fetch: typeof fetch;
declare const _Request: typeof Request;
declare const _Response: typeof Response;
declare const _Headers: typeof Headers;

declare module "fth" {
  export const fetch: typeof _fetch;
  export const Request: typeof _Request;
  export const Response: typeof _Response;
  export const Headers: typeof _Headers;
  export default fetch;
}
