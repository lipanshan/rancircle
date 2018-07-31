// pages/trainstep/trainstep.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft: 0,
    options: (() => {
      const arr = [];
      for (let i = 0; i < 30; i++){
        arr.push(i);
      }
      return arr;
    })(),
    currentOption: 0,
    selectWidth: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.createSelectorQuery().select('.select').boundingClientRect((res) => {
      this.setData({
        selectWidth: res.width
      })
    }).exec();
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
  scrollOption (e) {
    const that = this;
    wx.createSelectorQuery().select('.option').boundingClientRect((res) => {
      const len = Math.round((e.detail.scrollLeft + this.data.selectWidth / 2) / res.width);
      that.setData({
        currentOption: len
      });
    }).exec();
    
  }
})