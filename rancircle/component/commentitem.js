// component/commentitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      avatar: '../../image/avatar.jpg',
      name: '慢半拍',
      time: '刚刚',
      agreeNum: 4,
      commentTxt: '打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了打算离开就分了手机发了就死定了'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isAgree: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addAgree (e) {
      console.log(e)
    }
  }
})