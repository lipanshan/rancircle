Component({
  properties: {
    info: {
      type: Object,
      value: {}
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