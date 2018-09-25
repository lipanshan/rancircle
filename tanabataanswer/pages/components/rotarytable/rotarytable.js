// pages/components/rotarytable/rotarytable.js
let timer = null;
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    rotateDeg: '',
    deg: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickFn() {
      const that = this;
      let degNum = 0;
      const endDeg = this.data.deg + 360 * 5 + Math.ceil(Math.random() * 360)
      this.setData({
        deg: endDeg
      });
    }
  }
})
