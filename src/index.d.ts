// This code was copied from cross-fetch, which is authored by Leonardo Quixadá and licensed under MIT License.
// The original file is available at https://github.com/lquixada/cross-fetch/blob/7e4b657fa43915672350bcc53413721cbc14bd36/index.d.ts
// and the license of cross-fetch is available at https://github.com/lquixada/cross-fetch/blob/7e4b657fa43915672350bcc53413721cbc14bd36/LICENSE

/// <reference lib="DOM" />
/// <reference lib="DOM.Iterable" />

declare const _Fth_fetch: typeof fetch
declare const _Fth_Request: typeof Request
declare const _Fth_Response: typeof Response
declare const _Fth_Headers: typeof Headers

declare type _Fth_RequestInit = RequestInit
declare type _Fth_ResponseInit = ResponseInit
declare type _Fth_HeadersInit = HeadersInit
declare type _Fth_BodyInit = BodyInit

declare module "fth" {
  export const fetch: typeof _FthFetch
  export const Request: typeof _Fth_Request
  export const Response: typeof _Fth_Response
  export const Headers: typeof _Fth_Headers
  export default fetch

  export type RequestInit = _Fth_RequestInit
  export type ResponseInit = _Fth_ResponseInit
  export type HeadersInit = _Fth_HeadersInit
  export type BodyInit = _Fth_BodyInit
}
