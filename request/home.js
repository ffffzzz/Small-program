import request from "./index.js"

export function getHomeUrl() {
  return request({
    url: "/home/multidata"
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: "/home/data",
    data: {
      type,
      page
    }
  })
}