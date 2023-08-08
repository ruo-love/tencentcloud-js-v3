# js 腾讯云 V3、V1 签名

## 传递配置参数，V3、V1 签名自动生成

#### 可以帮助前端的伙计们 生成 v3、V1 签名，通过 POST 请求直接调用腾讯云服务 api

### 不需要借助 sdk

#### 注意：目前只支持 post

https://github.com/ruo-love/tencentcloud-js-v3，

```javascript
import { V3, V1 } from "@zrcode/tencentcloud-js-v3";

const { authorization, timestamp, curlcmd } = V3(
  {
    SECRET_ID: "xxx",
    SECRET_KEY: "xxx",
    action: "TextToVoice",
    host: "tts.tencentcloudapi.com",
    service: "tts",
    region: "ap-shanghai",
    version: "2019-08-23",
    ContentType: "application/json",
  },
  { Text: "123456899", SessionId: "dsaas51" }
);
console.log("传递配置参数，签名自动生成：", authorization, timestamp, curlcmd);
```
