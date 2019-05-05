import { type } from "os";

export function getRedirectPath({ type, avatar }) {
  // 根据用户信息返回不同的地址
  let url = type === "boss" ? "/boss" : "/genius";
  if (!avatar) {
    url += "/info";
  }
  return url;
}
