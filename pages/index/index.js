// pages/index/index.js
import { getHomeUrl , getHomeGoods} from "../../request/home.js"

const types = ['pop', 'new', 'sell']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    tabControl: ["流行","新款","精选"],
    currentIndex: 0,
    goods: {
      'pop': {page: 0, list: []},
      'new': {page: 0, list: []},
      'sell': {page: 0, list: []},
    },
    currentType: 'pop',
    isBackTop: false,
  },
  itemclick(e) {
    var index = e.detail.index
    this.setData({
      currentType: types[index]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.0获取轮播图和推荐的数据
    this.getHomeUrl()
    // 2.0获取商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')
  },
  //请求轮播图和推荐数据
  getHomeUrl() {
    getHomeUrl().then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      //1.1将轮播图和推荐数据存放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  // 请求商品数据
  getHomeGoods(type) {
    // 2.1获取页码
    var page = this.data.goods[type].page + 1;
    getHomeGoods(type,page).then(res => {
    // 2.2将商品数据存放到data里type的list中 
      var oldList = this.data.goods[type].list;
      oldList.push(...res.data.data.list);
      var typeKey = `goods.${type}.list`;
      var pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
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
    // 2.3上拉加载更多
    this.getHomeGoods(this.data.currentType)
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