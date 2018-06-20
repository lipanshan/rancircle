// pages/movable-view/movable-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    directionNum: 0,
    direction: 'all',
    x: 0,
    y: 0,
    inertia: true,
    outOfBounds: false,
    damping:  20,
    friction: 2,
    isDisabled: true
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
  directionChange () {
    let arr = ['all', 'vertical', 'horizontal', 'none'];
    let num = this.data.directionNum
    num++
    num = num >= arr.length ? 0 : num;
    this.setData({
      direction: arr[num],
      directionNum: num
    })
  },
  tapXY () {
    this.setData({
      x: 30,
      y: 30
    })
  },
  inertiaChange () {
    this.setData({
      inertia: !this.data.inertia
    })
  },
  outOfBoundsChange () {
    this.setData({
      outOfBounds: !this.data.outOfBounds
    })
  },
  xChange (e) {
    console.log(e)
    this.setData({
      x: e.detail.value
    })
  },
  yChange (e) {
    this.setData({
      y: e.detail.value
    })
  },
  dampingChange (e) {
    this.setData({
      damping: e.detail.value
    })
  },
  frictionChange (e) {
    this.setData({
      friction: e.detail.value
    })
  },
  disabledChange () {
    this.setData({
      isDisabled: !this.data.isDisabled
    })
  }
})