// pages/comment/comment.js
const formatTime = require('../../utils/date.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      hotComment: [],
      newComment: [
        {
          id: 0,
          avatar: '../../image/avatar.jpg',
          name: '0慢半拍',
          time: '刚刚',
          agreeNum: 4,
          active: '',
          commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
        },
        {
          id: 1,
          avatar: '../../image/avatar.jpg',
          name: '1慢半拍',
          time: '刚刚',
          agreeNum: 4,
          active: '',
          commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
        },
        {
          id: 2,
          avatar: '../../image/avatar.jpg',
          name: '2慢半拍',
          time: '刚刚',
          agreeNum: 4,
          active: '',
          commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
        },
        {
          id: 3,
          avatar: '../../image/avatar.jpg',
          name: '3慢半拍',
          time: '刚刚',
          agreeNum: 4,
          active: '',
          commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
        },
        {
          id: 4,
          avatar: '../../image/avatar.jpg',
          name: '4慢半拍',
          time: '刚刚',
          agreeNum: 4,
          active: '',
          commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
        }
      ]
    },
    commitTxt: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
  triggerAgree (e) {
    const itemInfo = Object.assign({},e.detail.currentTarget.dataset.info, {
      agreeNum: e.detail.currentTarget.dataset.info.agreeNum + 1
    })
    const itemType = e.detail.itemType
    const currentIndex = this.data.info.newComment.findIndex((item) => {
      return item.id === itemInfo.id
    })
    if ( itemType === 'new') {
      const key = `info.newComment[${currentIndex}].agreeNum`
      this.setData({
        [key]: itemInfo.agreeNum
      })
    }
    if (itemType === 'hot') {
      const key = `info.hotComment[${currentIndex}].agreeNum`
      this.setData({
        [key]: itemInfo.agreeNum,
        [checked]: true
      })
    }
  },
  commitInput(e) {
    this.setData({
      commitTxt: e.detail.value
    })
  },
  commitConfirm(e) {
    const nowTime = formatTime.formatTime(new Date())
    const itemObj = {
      id: this.data.info.newComment.length,
      avatar: app.globalData.userInfo.avatarUrl,
      name: app.globalData.userInfo.nickName,
      time: nowTime,
      agreeNum: 0,
      active: '',
      commentTxt: this.data.commitTxt
    }
    const items = JSON.parse(JSON.stringify(this.data.info.newComment))
    items.unshift(itemObj)
    this.setData({
      'info.newComment': items,
      commitTxt: ''
    })
  }
})