// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Receiving: {},
    cart: []
  },
  // 点击按钮获取收货地址
  btnclick() {
    // 1.1获取权限状态
    wx.getSetting({
      success(result) {
        // 1.2获取权限状态 主要发现一些属性名很怪异的时候 都要用[]来获取属性值
        const Address = result.authSetting["scopre.address"]
        if (Address === true || Address === undefined) {
          wx.chooseAddress({
            success(res1) {
              const Receiving = res1
                  // 存入缓存中
                  wx.setStorageSync('Receiving', Receiving)
            }
          })
        }else{
          // 1.3 用户以前拒绝过授予权限 诱导用户再次获取权限
          wx.openSetting({
            success() {
              wx.chooseAddress({
              })
            }
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // 1获取缓存中收货地址信息
    const Receiving = wx.getStorageSync('Receiving');
    // 2获取缓存中的购物车数据
    const cart = wx.getStorageSync('cart')
    this.setData({
      Receiving,cart
    })
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

  }
})