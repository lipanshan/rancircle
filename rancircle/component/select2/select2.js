// component/select2/select2.js
let timer = null;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndex: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: '身高'
    },
    unit: {
      type: String,
      default: 'CM'
    },
    optionSize: {
      type: Array,
      default: [1]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollLeft: 0,
    optionWidth: 0,
    currentIndex: 0
  },

  ready: function (options) {
    const query = wx.createSelectorQuery().in(this);
    query.select('.option').boundingClientRect((res) => {
      this.setData({
        optionWidth: res.width,
        scrollLeft: this.data.currentIndex * res.width
      })
    }).exec();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    scrollOption(e) {
      clearTimeout(timer);
      const index = Math.round(e.detail.scrollLeft / this.data.optionWidth);
      timer = setTimeout(() => {
        this.setData({
          scrollLeft: index * this.data.optionWidth,
          currentIndex: index
        })
        this.triggerEvent('change', {
          scrollLeft: this.data.scrollLeft,
          currentIndex: index,
          title: this.data.title
        })
        clearTimeout(timer);
      }, 100)
    }
  }
})
