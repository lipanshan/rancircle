// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      '推荐',
      '赛事资讯',
      '跑步装备',
      '提高训练',
      '跑团地带',
      '跑步故事',
      '跑步文化'
    ],
    moveLine: 0,
    scrollLeft: 0,
    currentMenuItem: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    if (options.id) {
      let itemLen = 0
      const $ = wx.createSelectorQuery()
      $.selectAll('.tag-item').boundingClientRect(function (rect) {
        if (rect.length >= 1) {
          const len = (rect[1].left - rect[0].left) * options.id + (rect[1].left - rect[0].right)
          that.setData({
            moveLine: len,
            currentMenuItem: options.id
          })
        }
      }).exec();
    }
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
  tagTap (e) {
    const len = e.currentTarget.offsetLeft
    const lenMin = 83
    const lenMax = wx.getSystemInfoSync().windowWidth - lenMin
    console.log(e)
    if (e.touches[0].pageX <= lenMin) {
      this.setData({
        moveLine: len,
        scrollLeft: len - lenMin * 2
      })
    } else if (e.touches[0].pageX >= lenMax) {
      this.setData({
        moveLine: len,
        scrollLeft: len + lenMin * 2
      })
    } else {
      this.setData({
        moveLine: len
      })
    }
  }
})