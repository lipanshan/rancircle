const { formatTime } = require('../../utils/date.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynamics: [{
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
        favoriteList: [{
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          }
        ],
        talk: [{
            id: 0,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 1,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 2,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 3,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 4,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          }
        ]
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
        favoriteList: [{
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          }
        ],
        talk: [{
            id: 0,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 1,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 2,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 3,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 4,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          }
        ]
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
        favoriteList: [{
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          }
        ],
        talk: [{
            id: 0,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 1,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 2,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 3,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 4,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          }
        ]
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
        favoriteList: [{
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          }
        ],
        talk: [{
            id: 0,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 1,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 2,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 3,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 4,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          }
        ]
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
        favoriteList: [{
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          }
        ],
        talk: [{
            id: 0,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 1,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 2,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 3,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 4,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          }
        ]
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
        favoriteList: [{
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          }
        ],
        talk: [{
            id: 0,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 1,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 2,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 3,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 4,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          }
        ]
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
        favoriteList: [{
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          }
        ],
        talk: [{
            id: 0,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 1,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 2,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 3,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 4,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          }
        ]
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
        favoriteList: [{
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          },
          {
            avatar: '../../image/avatar.jpg',
          }
        ],
        talk: [{
            id: 0,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 1,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 2,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 3,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          },
          {
            id: 4,
            avatar: '../../image/avatar.jpg',
            name: '慢半拍',
            time: '刚刚',
            agreeNum: 4,
            commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
          }
        ]
      }
    ],
    current: [],
    flag: 'nowrap',
    isHeart: '',
    userInfo: '',
    valueTxt: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const list = this.data.dynamics.find((item) => {
      return item.userName === options.id
    })
    this.setData({
      current: list
    })
    let that = this;
    wx.getUserInfo({
      success(res) {
        that.setData({
          userInfo: {
            avatar: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName,
            iv: res.iv,
            id: options.id
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toggleMore(e) {
    let flag = this.data.flag ? '' : 'nowrap';
    this.setData({
      flag: flag
    })
  },
  previewImage(e) {
    wx.previewImage({
      current: e.currentTarget.dataset.currentUrl,
      urls: e.currentTarget.dataset.imageList,
    })
  },
  updateValue (e) {
    this.setData({
      valueTxt: e.detail.value
    })
  },
  addComments(e) {
    const infoObj = {
      id: this.data.current.talk.length * 2,
      agreeNum: 6,
      avatar: this.data.userInfo.avatar,
      nickName: this.data.userInfo.nickName,
      time: (() => {
         return formatTime(new Date())
      })(),
      commentTxt: e.detail.value
    }
    const newArr =JSON.parse(JSON.stringify(this.data.current.talk));
    const key = 'current.talk';
    newArr.unshift(infoObj);
    this.setData({
      [key]: newArr,
      valueTxt: ''
    });
    
  },
  addFavorite(e) {
    let arr = JSON.parse(JSON.stringify(this.data.current)).favoriteList;
    let activeCls = '';
    const key = 'current.favoriteList';
    if (this.data.isHeart) {
      arr.shift();
      activeCls = '';
    } else {
      arr.unshift(this.data.userInfo);
      activeCls = 'add-heart';
    }
    this.setData({
      isHeart: activeCls,
      [key]: arr
    })
  }
})