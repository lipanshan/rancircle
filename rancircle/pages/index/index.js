//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../../image/slider3.jpg',
      '../../image/slider3.jpg',
      '../../image/slider3.jpg',
      '../../image/slider3.jpg',
      '../../image/slider3.jpg'
    ],
    scrollViews: [
      {
        'text': '推荐',
        'icon': 'icon-medal',
        'color': '#f63d5d'
      },
      {
        'text': '赛事资讯',
        'icon': 'icon-plain',
        'color': '#ff8903'
      },
      {
        'text': '跑步装备',
        'icon': 'icon-run',
        'color': '#70debb'
      },
      {
        'text': '提高训练',
        'icon': 'icon-o2-run',
        'color': '#7ed320'
      }
    ],
    topicList: [
      '夏季装备晒一晒',
      '讲讲你的瘦身计划',
      '尬聊世界杯',
      '我的第一双跑鞋',
      '我的第一次活动'
    ],
    dynamics: [
      {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道8',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊',
        images: [
          '../../image/show5.jpg'
        ],
        favorite: '1000',
        talk: '179'
      },
      {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道7',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊',
        images: [
          '../../image/show5.jpg',
          '../../image/show5.jpg'
        ],
        favorite: '1000',
        talk: '179'
      },
      {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道6',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊',
        images: [
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg'
        ],
        favorite: '1000',
        talk: '179'
      },
      {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道5',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊',
        images: [
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg'
        ],
        favorite: '1000',
        talk: '179'
      },
      {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道4',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊',
        images: [
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg'
        ],
        favorite: '1000',
        talk: '179'
      },
      {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道3',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊',
        images: [
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg'
        ],
        favorite: '1000',
        talk: '179'
      },
      {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道2',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊',
        images: [
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg'
        ],
        favorite: '1000',
        talk: '179'
      },
      {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道1',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊',
        images: [
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg',
          '../../image/show5.jpg'
        ],
        favorite: '1000',
        talk: '179'
      }
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  swiperChange (e) {
    // console.log(e)
  },
  scrollView (e) {
    // console.log(e)
  },
  addFavorite (e) {
    const currentItem = e.detail.currentTarget.dataset.favoriteInfo
    const index = this.data.dynamics.findIndex((item) => {
      return item.userName === currentItem.userName
    })
    const key = `dynamics[${index}].favorite`
    this.setData({
      [key]: +this.data.dynamics[index].favorite + 1
    })
  }
})
