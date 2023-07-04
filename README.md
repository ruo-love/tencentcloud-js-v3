# js 腾讯云 V3 签名

## 传递配置参数，V3 签名自动生成

```javascript
import { V3 } from "@zrcode/tencentcloud-js-v3"
const { authorization, timestamp, curlcmd } = V3(
  {
    SECRET_ID: "xxx",
    SECRET_KEY: "xxx",
    action: "TextToVoice",
    host: "tts.tencentcloudapi.com",
    service: "tts",
    region: "ap-shanghai",
    version: "2019-08-23",
    ContentType: "application/json"
  },
  { Text: "123456899", SessionId: "dsaas51" }
)
console.log("传递配置参数，签名自动生成：", authorization, timestamp, curlcmd)
```
