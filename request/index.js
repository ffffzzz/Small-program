const baseURL = "http://106.54.54.237:8000/api/h8"
export default function(params) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + params.url,
      method: params.method || "get",
      data: params.data || {},
      success: (result) => { resolve(result)},
      fail: (err) => { reject(err)}
    })
  })
}