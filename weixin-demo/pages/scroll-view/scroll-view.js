// pages/scroll-view/scroll-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft: 100,
    scrollTop: 20,
    scrollToElem: '',
    scrollToElemh: ''
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
  upper (e) {
    console.log(e)
  },
  lower (e) {
    console.log(e)
  },
  tapScrollTop (e) {
    console.log(e)
    this.setData({
      scrollLeft: 0,
      scrollTop: 0
    })
  },
  tapScrollBottom (e) {
    console.log(e)
    this.setData({
      scrollLeft: 10000,
      scrollTop: 10000
    })
  },
  tapScrollElem (e) {
    console.log(e)
    this.setData({
      scrollToElem: 'item4',
      scrollToElemh: 'item4h'
    })
  },
  scroll (e) {
    console.log(e)
  }
})