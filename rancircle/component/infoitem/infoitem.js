Component({
  properties: {
    info: {
      type: Object,
      value: {
        avatar: '../../image/avatar.jpg',
        userName: '樱木花道',
        time: '06:56',
        address: '广东-汕头',
        title: '今天，我是浏览等级分类',
        subtitle: '跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊跑班今天开始打卡，小伙伴们加油啊，跑班今天开始打卡，小伙伴们加油啊' ,
        images: [
          'show1.jpg',
          'show2.jpg',
          'show3.jpg',
          'show4.jpg',
          'show5.jpg',
          'show6.jpg',
          'show7.jpg',
          'show8.jpg',
          'show9.jpg'
        ],
        favorite: '1000',
        talk: '179'
      }
    }
  },
  data: {
    flag: 'nowrap',
    urls: [
      'show1.jpg',
      'show2.jpg',
      'show3.jpg',
      'show4.jpg',
      'show5.jpg',
      'show6.jpg',
      'show7.jpg',
      'show8.jpg',
      'show9.jpg'
    ]
  },
  methods: {
    toggleMore () {
      const result = this.data.flag ? '' : 'nowrap'
      this.setData({
        flag: result
      })
    },
    seeBagImage (e) {
      console.log(e)
    }
  }
})