const HmacSHA1 = require("crypto-js/hmac-sha1");
const Base64 = require("crypto-js/enc-base64");
function formatSignString(
  reqMethod: any,
  endpoint: any,
  path: any,
  strParam: any
) {
  let strSign = reqMethod + endpoint + path + "?" + strParam.slice(1);
  return strSign;
}

function sha1(secretKey: string, strsign: string) {
  let hmac = HmacSHA1(strsign, secretKey || "");
  return hmac.toString(Base64);
}

function sort_params(params: any) {
  let strParam = "";
  let keys = Object.keys(params);
  keys.sort();
  for (let k in keys) {
    //k = k.replace(/_/g, '.');
    strParam += "&" + keys[k] + "=" + params[keys[k]];
  }
  return strParam;
}

export function V1(config: V1Options, body: any) {
  // 密钥参数
  // 需要设置环境变量 TENCENTCLOUD_SECRET_ID，值为示例的 AKIDz8krbsJ5yKBZQpn74WFkmLPx3*******
  const SECRET_ID = config.SECRET_ID;
  // 需要设置环境变量 TENCENTCLOUD_SECRET_KEY，值为示例的 Gu5t9xGARNpq86cd98joQYCN3*******
  const SECRET_KEY = config.SECRET_KEY;

  const endpoint = config.host;

  const Timestamp = Math.round(Date.now() / 1000);
  // const Nonce = 11886  // 随机正整数
  // const nonce = Math.round(Math.random() * 65535);

  let params = { ...config.params, ...body };

  params["Expired"] = Timestamp + 24 * 60 * 60 * 7;
  params["Timestamp"] = Timestamp;

  // 1. 对参数排序,并拼接请求字符串
  let strParam = sort_params(params);

  // 2. 拼接签名原文字符串
  const reqMethod = "POST";
  const path = "";
  let strSign = formatSignString(reqMethod, endpoint, path, strParam);

  // 3. 生成签名串
  let Signature = sha1(SECRET_KEY, strSign);
  console.log("Signature", Signature);

  return {
    params,
    Signature,
    SECRET_ID,
  };
}
