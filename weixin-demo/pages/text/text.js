// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectable: true,
    space: 'ensp',
    spaceIndex: 0,
    spaceVal: ['ensp', 'emsp', 'nbsp'],
    decode: true
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
  selectableChange() {
    this.setData({
      selectable: !this.data.selectable
    })
  },
  spaceChange() {
    let index = this.data.spaceIndex + 1;
    if (index >= this.data.spaceVal.length) {
      index = 0;
    }
    this.setData({
      space: this.data.spaceVal[index],
      spaceIndex: index
    })
  },
  decodeChange () {
    this.setData({
      decode: !this.data.decode
    })
  }
})