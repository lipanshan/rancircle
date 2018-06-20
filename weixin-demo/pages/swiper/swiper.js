// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoPlay: false,
    interval: 500,
    duration: 1000,
    current: 1,
    circular: true,
    vertical: false,
    nextMargin: 0,
    previousMargin: 0,
    displayMultipleItems: 1,
    imgUrls: [
      '../image/pm.jpg',
      '../image/pm.jpg',
      '../image/pm.jpg',
      '../image/pm.jpg'
    ]
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
  controlIndicatorDots () {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay () {
    this.setData({
      autoPlay: !this.data.autoPlay
    })
  },
  intervalChange (e) {
    console.log(e)
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange (e) {
   console.log(e)
   this.setData({
     duration: e.detail.value
   })
  },
  currentChange (e) {
    this.setData({
      current: e.detail.value
    })
  },
  changeCircular () {
    this.setData({
      circular: !this.data.circular
    })
  },
  changeVirtical () {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  previousMarginChange (e) {
    this.setData({
      previousMargin: e.detail.value
    })
  },
  nextMarginChange (e) {
    this.setData({
      nextMargin: e.detail.value
    })
  },
  displayMultipleItemsChange (e) {
    this.setData({
      displayMultipleItems: e.detail.value
    })
  },
  swiperChange (e) {
    console.log(e)
  },
  animatiionFinish (e) {
    console.log(e)
  }
})