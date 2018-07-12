// pages/toptiodetail/topicdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      title: '你犯过哪些跑步误区',
      hotNum: '2342423',
      intro:  '很多人当初以为跑步是无所顾忌迈开腿就能做到的运动，但等到没有发生预想的锻炼效果、身体出现不适甚至发生伤痛才认识到自己错误的跑步行为、逐渐认识到跑步是一门有讲究的学门',
      question: '你曾经存在哪些跑步误区呢？你是如何意识到自己的很多人当初以为跑步是无所顾忌迈开腿就能做到的运动，但等到没有发生预想的锻炼效果、身体出现不适甚至发生伤痛才认识到自己错误的跑步行为、逐渐认识到跑步是一门有讲究的学门',
      bg: '../../image/slider3.jpg',
      hot: [
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
      ],
      last: [
        {
          avatar: '../../image/avatar.jpg',
          userName: '水户洋平8',
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
          userName: '水户洋平7',
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
          userName: '水户洋平6',
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
          userName: '水户洋平5',
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
          userName: '水户洋平4',
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
          userName: '水户洋平3',
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
          userName: '水户洋平2',
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
          userName: '水户洋平1',
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
    isCollapse: '',
    navigatorActive: 0
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
  textToggleCollapse (e) {
    if (this.data.isCollapse) {
      this.setData({
        isCollapse: ''
      })
    } else {
      this.setData({
        isCollapse: 'collapse'
      })
    }
  },
  switchTap (e) {
    const index = +e.currentTarget.dataset.current
    this.setData({
      navigatorActive: index
    })
  },
  addFavorite (e) {
    console.log(e)
    const currentItem = e.detail.currentTarget.dataset.favoriteInfo
    if (this.data.navigatorActive === 0) {
      const index = this.data.info.hot.findIndex((item) => {
        return item.userName === currentItem.userName
      })
      const key = `info.hot[${index}].favorite`
      this.setData({
        [key]: +this.data.info.hot[index].favorite + 1
      })
    }
    if (this.data.navigatorActive === 1) {
      const index = this.data.info.last.findIndex((item) => {
        return item.userName === currentItem.userName
      })
      const key = `info.last[${index}].favorite`
      this.setData({
        [key]: +this.data.info.last[index].favorite + 1
      })
    }
    
  }
}) 