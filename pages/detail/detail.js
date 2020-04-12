// pages/detail/detail.js
import {getdetailUrl , getRecommend} from "../../request/detail.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Goods: {},
    iid: '',
    // num: 1,
    tabControl: ["商品","参数","评论","推荐"],
    // topImg: [],
    // title: '',
    // newprice: '',
    // oldprice: '',
    // columns: [],
    // services: [],
    // name: '',
    // shoplogo: '',
    // cSells: '',
    // cGoods: "",
    // score: [],
    // desc: '',
    // detaiimg: [],
    isBackTop: false
  },
  // 全局对象
  GoodsInfo: {},
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
      const Goods = res;
      this.GoodsInfo = Goods;
      // 1.2取出轮播图并设置到data中
      // const data = res.data.result;
      // const topImg = data.itemInfo.topImages;
      // 1.3取出商品描述
      // const title = data.itemInfo.title;
      // const newprice = data.itemInfo.lowNowPrice;
      // const oldprice = data.itemInfo.oldPrice;
      // const columns = data.columns;
      // const name = data.shopInfo.name;
      // const shopLogo = data.shopInfo.shopLogo;
      // const services = data.shopInfo.services;
      // const cSells = data.shopInfo.cSells;
      // const cGoods = data.shopInfo.cGoods;
      // const score = data.shopInfo.score;
      // const desc = data.detailInfo.desc;
      // const detaiimg = data.detailInfo.detailImage
      this.setData({
        // topImg,title,newprice,oldprice,columns,name,shopLogo,services,cSells,cGoods,score,
        // desc,detaiimg,
        Goods
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
    // 2.1获取要存放到购物车的数据
    // console.log(this.data.iid,this.data.title,this.data.newprice)
    // var {iid,title,newprice,num} = this.data
    // var obj = {iid,title,newprice,num}
    // 2.2存放到缓存中
    // wx.setStorage({
    //   key: "cart",
    //   data: JSON.stringify(obj),
    //   success() {
    //     wx.showToast({
    //       title: '加入成功',
    //     })
    //   }
    // })


    // const pre_item = wx.getStorageSync('cart');
    // const temp = {
    //   "num": wx.getStorageSync('num'),
    //   "iid": wx.getStorageSync('iid'),
    //   "title": wx.getStorageSync('title'),
    //   "newprice": wx.getStorageSync('newprice')
    // }
    // wx.setStorageSync('cart', [temp, ...pre_item])
    // wx.showToast({
    //   title: '加入购物车',
    //   icon: 'success',
    // })
    
    // 2.1获取缓存中的购物车数组
    let cart = wx.getStorageSync('cart') || [];
    // 2.2判断商品对象是否存在于购物车数组中
    var goods_id = this.data.iid
    console.log(goods_id,this.GoodsInfo.data.iid)
    let index = cart.findIndex(v=>v.goods_id === this.GoodsInfo.data.iid)
    if (index === -1) {
      // 2.3数据不存在
      this.GoodsInfo.num = 1;
      cart.push(this.GoodsInfo);
    }else{
      // 2.4数据存在
      cart[index].num++;
    }
    // 2.5把购物车从新添加回缓存中
    wx.setStorageSync('cart', cart);
    // 2.6弹窗提示
    wx.showToast({
      title: '加入成功',
    })
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