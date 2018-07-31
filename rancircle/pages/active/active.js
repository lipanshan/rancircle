// pages/active/active.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOpenSetting: 'openSetting',
    locationStorageKey: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.login({
      success (res) {
        let url = 'https://api.weixin.qq.com/sns/jscode2session';
        const data = {
          code: res.code
        }
        if (res.code) {
          //没有后台无法获取openid
          // wx.request({
          //   url,
          //   method: 'POST',
          //   header: {
          //     'content-type':'application/x-www-form-urlencoded'
          //   },
          //   success (res) {
          //     console.log(res)
          //   }
          // })
          const locationStorageKey = 'scope.camer';
          wx.setStorageSync(locationStorageKey,false);
          that.setData({
            locationStorageKey: locationStorageKey
          });
        }
      }
    })
  
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

  openSetting (e) {
    console.log(e, 'opensetting')
    let str = '';
    let flag = false;
    if (e.detail.authSetting['scope.camera']) {
      str = '';
      flag = true;
      wx.scanCode();
    } else {
      str = 'openSetting';
      flag = false;
    }
    this.setData({
      isOpenSetting: str
    });
    wx.setStorageSync(this.data.locationStorageKey, flag);
  },
  scanCode (e) {
    const that = this;
    wx.getStorage({
      key: this.data.locationStorageKey,
      success (res) {
        if (!res.data) {
          that.setData({
              isOpenSetting: 'openSetting'
            })
        } else {
          wx.scanCode({
            onlyFromCamera: false,
            success (res) {
              console.log(res);
            }
          });
        }
      }
    })
  }
})