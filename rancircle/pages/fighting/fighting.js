// pages/fighting/fighting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 0,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (()=> {
          return Math.ceil(Math.random() * Math.pow(10,5))
        })()
      },
      {
        id: 1,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      },
      {
        id: 2,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      },
      {
        id: 3,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      },
      {
        id: 4,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      },
      {
        id: 5,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      },
      {
        id: 6,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      },
      {
        id: 7,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      },
      {
        id: 8,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      },
      {
        id: 9,
        img: '../../image/slider3.jpg',
        title: '7月跑77.公里',
        time: '7',
        num: (() => {
          return Math.ceil(Math.random() * Math.pow(10, 5))
        })()
      }
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
  navigateToDetail (e) {
    let params = JSON.stringify(e.currentTarget.dataset.info);
    wx.navigateTo({
      url: `../activitydetails/sctivitydetails?id=${params}`
    })
  }
})