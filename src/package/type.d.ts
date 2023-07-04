declare module "@zrcode/tencentcloud-js-v3" {
  export interface V3Options {
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
  export function V3(
    config: V3Options,
    body: object
  ): {
    SECRET_ID: string
    SECRET_KEY: string
    authorization: string
    ContentType: string
    timestamp: number
    region: string
    action: string
    version: string
    host: string
    curlcmd: string
  }
}
declare module "crypto-js"
