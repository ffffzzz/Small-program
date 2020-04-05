// pages/detail/detail.js
import {getdetailUrl , getRecommend} from "../../request/detail.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: '',
    tabControl: ["商品","参数","评论","推荐"],
    topImg: [],
    title: '',
    newprice: '',
    oldprice: '',
    columns: [],
    services: [],
    name: '',
    shoplogo: '',
    cSells: '',
    cGoods: "",
    score: [],
    desc: '',
    detaiimg: [],
    isBackTop: false
  },
  itemclick() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 保存iid
    const iid = options.iid
    this.setData({
      iid
    })
    // 1.0请求轮播数据
    this.getdetailUrl(iid)
    this.getRecommend()
  },
    // 1.1获取轮播数据
  getdetailUrl(iid) {
    var iid = this.data.iid
    getdetailUrl(iid).then(res => {
      // console.log(res)
      // 1.2取出轮播图并设置到data中
      const data = res.data.result;
      const topImg = data.itemInfo.topImages;
      // 1.3取出商品描述
      const title = data.itemInfo.title;
      const newprice = data.itemInfo.lowNowPrice;
      const oldprice = data.itemInfo.oldPrice;
      const columns = data.columns;
      const name = data.shopInfo.name;
      const shopLogo = data.shopInfo.shopLogo;
      const services = data.shopInfo.services;
      const cSells = data.shopInfo.cSells;
      const cGoods = data.shopInfo.cGoods;
      const score = data.shopInfo.score;
      const desc = data.detailInfo.desc;
      const detaiimg = data.detailInfo.detailImage
      this.setData({
        topImg,title,newprice,oldprice,columns,name,shopLogo,services,cSells,cGoods,score,
        desc,detaiimg,
      })
    })
  },
  getRecommend() {
    getRecommend().then(res => {
      // console.log(res)
    })
  },
  // 2.0点击加入购物车把数据放到购物车中
  
  cartClick() {
    // 2.1获取缓存中购物车的数组
    // console.log(this.data.iid)
    let cart =wx.getStorageSync('cart') || [];
    // 2.2判断商品对象是否存在数组里
    let index = this.data.iid
    console.log(index)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll(options) {
    const scrollTOP = options.scrollTop;
    const test = scrollTOP >= 600
    if (test != this.data.isBackTop) {
      this.setData({
        isBackTop: test
      })
    }
  }
})