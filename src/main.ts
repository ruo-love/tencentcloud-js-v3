import { V3 } from "@zrcode/tencentcloud-js-v3";

const { authorization, timestamp, curlcmd } = V3(
  {
    SECRET_ID: "AKIDvkMk5JJcfT4RYQ3VN7dzrEaqtkRyIWYU",
    SECRET_KEY: "oV0JOLBtQo36whHdnlVETfkcMwPm04vg",
    action: "TextToVoice",
    host: "tts.tencentcloudapi.com",
    service: "tts",
    region: "ap-shanghai",
    version: "2019-08-23",
    ContentType: "application/json",
  },
  { Text: "123456899", SessionId: "dsaas51" }
);
console.log("Hello World", authorization, timestamp, curlcmd);
