// pages/activitydetails/sctivitydetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: '',
    isCollapse: 'collapse',
    fightings: [
      {
        url: '../../image/avatar.jpg'
      },
      {
        url: '../../image/avatar.jpg'
      },
      {
        url: '../../image/avatar.jpg'
      },
      {
        url: '../../image/avatar.jpg'
      },
      {
        url: '../../image/avatar.jpg'
      },
      {
        url: '../../image/avatar.jpg'
      },
      {
        url: '../../image/avatar.jpg'
      },
      {
        url: '../../image/avatar.jpg'
      }
    ],
    taskArr: [
      {
        taskProgress: 2,
        taskNum: 4,
        len: 77.70,
        task1: '尖峰时刻的',
        lenLine: '',
        time: '30',
        address: '北京市中关村'
      },
      {
        taskProgress: 2,
        taskNum: 4,
        len: 77.70,
        task1: '尖峰时刻的',
        lenLine: '',
        time: '30',
        address: '北京市中关村'
      },
      {
        taskProgress: 2,
        taskNum: 4,
        len: 77.70,
        task1: '尖峰时刻的',
        lenLine: '',
        time: '30',
        address: '北京市中关村'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      info: JSON.parse(options.id)
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
  toggleCollapse () {
    this.setData({
      isCollapse: this.data.isCollapse ? '' : 'collapse'
    })
  }
})