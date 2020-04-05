// components/f-ctrol/f-ctrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type:Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemclick(e) {
      var index = e.currentTarget.dataset.index
      this.setData({
        currentIndex : index
      })
      // 小程序通知父组件this.triggerEvent 参数1:事件名称,参数2:传递的参数 参数3:目前不懂
      this.triggerEvent('itemclick',{index,title: this.properties.titles[index]},{})
    }
  }
})
