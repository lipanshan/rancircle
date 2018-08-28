//index.js
//获取应用实例
const app = getApp()
let timer = null;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseOpenSetting: wx.canIUse('button.open-type.openSetting'),
    playBtnDown: true,
    txt_arr: ['全世界，你最可爱，没有之一。', '保持好奇心，保持童真；保持反抗，保持爱。', '喜欢的人是海面的灯塔。遥远，不可触，但是把我从黑夜里打捞出来了。', '你就是最好的人，如果我发现有谁比你好，我会装作没看见。', '谁结婚谁分手我一点也不在乎，我只想知道尔晴什么时候死。', '一个不负责任的文案建议：今日目标 好好做人', '想为爱做很多事情，可惜没有人爱我。', '感到悲伤的时候，去看大海。一个人寂寞的时候，去看大海。'],
    messageTxt: '',
    voiceTime: 0,
    openSettingType: false,
    canIUseVoice: wx.canIUse('getRecorderManager'),
    record: null,
    isStartRecord: false,
    recordPath: null
  },
  //事件处理函数
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function() {
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onGetUserInfo (e) {
    if (e.detail.userInfo) {
      wx.navigateTo({
        url: '../record/index',

      })
    }
  }

})