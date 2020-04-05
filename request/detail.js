import request from "./index.js"

export function getdetailUrl(iid) {
  return request({
    url: "/detail",
    data: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: "/recommend"
  })
}