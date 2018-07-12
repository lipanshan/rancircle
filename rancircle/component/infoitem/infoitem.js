Component({
  properties: {
    info: {
      type: Object,
      value: {}
    }
  },
  data: {
    flag: 'nowrap',
    likeActive: ''
  },
  methods: {
    toggleMore() {
      const result = this.data.flag ? '' : 'nowrap'
      this.setData({
        flag: result
      })
    },
    previewImage(e) {
      wx.previewImage({
        current: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad&%20imgtype=jpg%20&%20er=1%20&%20src=http%20%%203A%%202F%%202Fpic.58pic.com%20%%202F58pic%%202F12%%202F74%%202F05%%202F99C58PICYck.jpg',
        urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad&%20imgtype=jpg%20&%20er=1%20&%20src=http%20%%203A%%202F%%202Fpic.58pic.com%20%%202F58pic%%202F12%%202F74%%202F05%%202F99C58PICYck.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad&%20imgtype=jpg%20&%20er=1%20&%20src=http%20%%203A%%202F%%202Fpic.58pic.com%20%%202F58pic%%202F12%%202F74%%202F05%%202F99C58PICYck.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad&%20imgtype=jpg%20&%20er=1%20&%20src=http%20%%203A%%202F%%202Fpic.58pic.com%20%%202F58pic%%202F12%%202F74%%202F05%%202F99C58PICYck.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad&%20imgtype=jpg%20&%20er=1%20&%20src=http%20%%203A%%202F%%202Fpic.58pic.com%20%%202F58pic%%202F12%%202F74%%202F05%%202F99C58PICYck.jpg'

        ],
        success(res) {
          console.log(res)
        },
        fail(msg) {
          console.log(msg, 33)
        }
      })
    },
    addFavorite (e) {
      if (this.data.likeActive) return
      this.setData({
        likeActive: 'like-icon-active'
      })
      this.triggerEvent('addFavoriteNum', e)
    }
  }
})