// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size: 'default',
    sizeVal: [
      'default',
      'mini'
    ],
    type: 'default',
    typeVal: [
      'primary',
      'default',
      'warn'
    ],
    isPlain: false,
    isDisabled: false,
    isLoading: false,
    lang: 'zh_CN'
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
  sizeChange () {
    const index = this.data.sizeVal.findIndex((item) => item === this.data.size) ? 0 : 1;
    this.setData({
      size: this.data.sizeVal[index]
    })
  },
  typeChange () {
    let index = this.data.typeVal.findIndex(item => item === this.data.type) + 1;
    if (index >= this.data.typeVal.length) {
      index = 0
    }
    this.setData({
      type: this.data.typeVal[index]
    })
  },
  plainChange () {
    this.setData({
      isPlain: !this.data.isPlain
    })
  },
  disabledChange () {
    this.setData({
      isDisabled: !this.data.isDisabled
    })
  },
  loadingChange () {
    this.setData({
      isLoading: !this.data.isLoading
    })
  },
  getUserInfoChange (e) {
    console.log(e)
    let langList = [
      'zh_CN',
      'zh_TW',
      'en'
    ];
    let index = langList.findIndex(item => item === this.data.lang) + 1;
    if (index >= langList.length) {
      index = 0;
    }
    this.setData({
      lang: langList[index]
    })
  },
  getPhoneNumberChange (e) {
    console.log(e)
  },
  contactChange (e) {
    console.log(e)
  },
  openSettingChange (e) {
    console.log(e)
  }
})