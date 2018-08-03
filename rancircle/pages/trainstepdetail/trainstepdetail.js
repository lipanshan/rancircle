// pages/trainstepdetail/trainstepdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      {
        time: '2018.07',
        list: [
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          }
        ]
      },
      {
        time: '2018.08',
        list: [
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          },
          {
            week: '周二',
            data: 31,
            title: '核心训练'
          }
        ]
      }
    ],
    fixedShow: false,
    titleTxt: '2018.07'
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
  onPageScroll: function (e) {
    // console.log(e)
  },
  scroll (e) {
    const scrollTop = e.detail.scrollTop;
    const query = wx.createSelectorQuery();
    const that = this;
    query.selectAll('.list-title').boundingClientRect((res) => {
      for (let i = 0; i < res.length; i++) {
        console.log(res[i].top)
        if (res[i].top <= res[i].height && res[i].top >= -res[i].height) {
          that.setData({
            titleTxt: res[i].dataset.txt
          })
          break;
        }
      }
    }).exec();
  }
})