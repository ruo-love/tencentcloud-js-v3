declare module "@zrcode/tencentcloud-js-v3" {
  export function V3(
    config: V3Options,
    body: object
  ): V3Options & {
    curlcmd: string
  }
}
declare module "crypto-js"
declare interface V3Options {
  SECRET_ID: string
  SECRET_KEY: string
  host: string
  service: string
  region?: string
  action: string
  version: string
  ContentType: string
  [key: string]: any
}
