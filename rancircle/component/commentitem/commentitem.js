// component/commentitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type: Object,
      value: {}
    },
    itemType: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: ''
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addAgree (e) {
      if (this.data.active) return
      const detail = Object.assign({},e,{
        itemType: this.data.itemType
      })
      this.setData({
        active: 'icon-agree-active'
      })
      this.triggerEvent('clickagree', detail)
    }
  }
})