// pages/menudetail/menudetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      title: '361正式宣布签约中国泳坛新秀李冰洁',
      tips: '悦跑圈',
      time: ' 2018-07-04 11:39',
      tagName: '#资讯赛事',
      text: [
        {
          text: '(2018年7月4日) 日前，中国领先体育品牌361正式宣布签约中国泳坛新秀李冰洁成为新晋品牌代言人。这是继孙杨、刘翔、张宇飞之后。361签约的又以为中国国家游泳队运动员。361希望通过双方未来的合作，向更广大热爱运动的年轻人传递“多一度热爱”的体育净胜，鼓励大家全情投入到热爱的运动中。',
          url: '../../image/slider3.jpg'
        },
        {
          text: '(2018年7月4日) 日前，中国领先体育品牌361正式宣布签约中国泳坛新秀李冰洁成为新晋品牌代言人。这是继孙杨、刘翔、张宇飞之后。361签约的又以为中国国家游泳队运动员。361希望通过双方未来的合作，向更广大热爱运动的年轻人传递“多一度热爱”的体育净胜，鼓励大家全情投入到热爱的运动中。',
          url: '../../image/slider3.jpg'
        },
        {
          text: '(2018年7月4日) 日前，中国领先体育品牌361正式宣布签约中国泳坛新秀李冰洁成为新晋品牌代言人。这是继孙杨、刘翔、张宇飞之后。361签约的又以为中国国家游泳队运动员。361希望通过双方未来的合作，向更广大热爱运动的年轻人传递“多一度热爱”的体育净胜，鼓励大家全情投入到热爱的运动中。',
          url: '../../image/slider3.jpg'
        }
      ],
      readNum: 14122,
      collectionNum: 0,
      commentNum: 123
    },
    commitFlag: '',
    commitTxt: '',
    isShow: '',
    touchInit: {
      pageX: 0,
      pageY: 0,
      isTouch: true
    },
    articalId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      articalId: options.id
    })
    wx.setNavigationBarTitle({
      title: this.data.info.title
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
    if (this.data.isShow) {
      this.setData({
        isShow: ''
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  commentFocus (e) {
    this.setData({
      commitFlag: 'commit-blur'
    })
  },
  commentBlur (e) {
    this.setData({
      commitFlag: ''
    })
  },
  commitInput (e) {
    this.setData({
      commitTxt: e.detail.value
    })
  },
  commitConfirm (e) {
    this.setData({
      commitTxt: ''
    })
  },
  pageStart (e) {
    if (!this.data.touchInit.isTouch) return false
    this.setData({
      touchInit: {
        isTouch: false,
        pageX: e.touches[0].pageX,
        pageY: e.touches[0].pageY
      } 
    })
  },
  pageTouchMove (e) {
    const currentTouch = {
      pageX: e.touches[0].pageX,
      pageY: e.touches[0].pageY
    }
    if (currentTouch.pageY > this.data.touchInit.pageY && currentTouch.pageY - this.data.touchInit.pageY >= 10) {
      if (this.data.isShow) {
        this.setData({
          isShow: ''
        })
      }
    }
    if (currentTouch.pageY < this.data.touchInit.pageY && currentTouch.pageY - this.data.touchInit.pageY <= -10) {
      if (!this.data.isShow) {
        this.setData({
          isShow: 'commit-btn-hide'
        })
      }
    }
  },
  pageEnd (e) {
    this.setData({
      touchInit: {
        pageX: 0,
        pageY: 0,
        isTouch: true
      }
    })
  }
})