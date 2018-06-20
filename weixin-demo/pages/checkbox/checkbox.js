// pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        name: 'checkbox1',
        checked: true
      },
      {
        name: 'checkbox12',
        checked: true
      }, 
      {
        name: 'checkbox13',
        checked: false
      }, 
      {
        name: 'checkbox14',
        checked: true
      },
       {
        name: 'checkbox15',
        checked: false
      },
      {
        name: 'checkbox16',
        checked: true
      }
    ],
    colors: [
      'yellow',
      'blue',
      'green'
    ],
    checkedElem: '',
    showCls: []
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
    this.setData({
      showCls: this.synchronization(this.data.items),
      checkedElem: this.synchronizationTxt(this.data.items)
    })
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
  checkouChange (e) {
    console.log(e)
    let arr = []
    e.detail.value.forEach((val, index) => {
      arr[val[val.length - 1] - 1] = 'active'
    })
    this.setData({
      checkedElem: e.detail.value.join('\n'),
      showCls: arr
    })
  },
  synchronization (arr) {
    let newArr = []
    arr.forEach((val, index) => {
      val.checked ? newArr[index] = 'active' : ''
    })
    return newArr
  },
  synchronizationTxt (arr) {
    let newArr = []
    arr.forEach((val, index) => {
      if (val.checked) {
        newArr[index] = val.name
      }
    })
    return newArr.join('\n')
  }
})