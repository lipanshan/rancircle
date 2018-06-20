// pages/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 2,
    isShowInfo: true,
    strokeWidth: 4,
    currentColor: 'blue',
    bgColor: '#ccc',
    currentColorArr: [
      'blur',
      'yellow',
      'green',
      'pink'
    ],
    bgColorArr: [
      '#ccc',
      '#fff',
      '#000'
    ],
    isActive: false,
    modes: [
      'backwards',
      'forwards'
    ],
    modesIndex: 0
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
  showInfoChange () {
    this.setData({
      isShowInfo: !this.data.isShowInfo
    })
  },
  percentChange (e) {
    console.log(e)
    this.setData({
      percent: e.detail.value
    })
  },
  strokeWidthChange (e) {
    this.setData({
      strokeWidth: e.detail.value
    })
  },
  randomColor () {
    let bgColorIndex = Math.floor(Math.random() * this.data.bgColorArr.length);
    let currentColorIndex = Math.floor(Math.random() * this.data.currentColorArr.length);
    this.setData({
      bgColor: this.data.bgColorArr[bgColorIndex],
      currentColor: this.data.currentColorArr[currentColorIndex]
    })
  },
  activeChange () {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  activeModeChange () {
    let index = this.data.modesIndex ? 0 : 1;
    this.setData({
      activeMode: this.data.modes[index],
      modesIndex: index
    })
  }
})