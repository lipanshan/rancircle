// pages/trainstep/trainstep.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countNum: 4,
    options: (() => {
      const arr = [];
      for (let i = 0; i < 300; i++) {
        arr.push(i);
      }
      return arr;
    })(),
    week: [{
        'txt': '一',
        'active': ''
      },
      {
        'txt': '二',
        'active': ''
      },
      {
        'txt': '三',
        'active': ''
      },
      {
        'txt': '四',
        'active': ''
      },
      {
        'txt': '五',
        'active': ''
      },
      {
        'txt': '六',
        'active': ''
      },
      {
        'txt': '日',
        'active': ''
      }
    ],
    timeTxt: '请点击选择开始时间',
    hide: '',
    height: 165,
    weight: 50,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  selectHeight(e) {
    this.setData({
      height: e.detail.currentIndex
    })
  },
  selectWeight(e) {
    this.setData({
      weight: e.detail.currentIndex
    })
  },
  selectWeekItem(e) {
    const key = `week[${e.currentTarget.dataset.current}].active`;
    const arr = this.data.week.reduce((allItem, item, index) => {
      item.active ? allItem.push(index) : '';
      return allItem;
    }, []);
    const flag = arr.find((item) => {
      return item === e.currentTarget.dataset.current
    });
    let val = '';
    if (flag === undefined) {
      arr.push(e.currentTarget.dataset.current);
    }
    const isContinue = this._isContinuityArray(arr);
    if (arr.length <= this.data.countNum) {
      val = isContinue ? '' : (this.data.week[e.currentTarget.dataset.current].active ? '' : 'active');
    }
    this.setData({
      [key]: val
    });
  },
  _isContinuityArray(arr) {
    let result = false
    const len = arr.length;
    if (len < this.data.countNum) {
      return result;
    }
    arr.sort((a, b) => {
      return a - b
    })
    for (let i = 0; i < len; i++) {
      let current = arr[i] + 1;
      if (!arr[i + 1]) {
        continue;
      }
      let next = arr[i + 1];
      if (current !== next) {
        return result;
      }
    }
    result = true;
    return result
  },
  bindPickerChange(e) {
    this.setData({
      timeTxt: e.detail.value
    })
  },
  nextPage() {
    if (!this.data.hide) {
      this.setData({
        hide: 'hide'
      })
    } else {
      const weekArr = this.data.week.reduce((all, item, index) => {
        item.active ? all.push({ item, index }) : '';
        return all
      }, []);
      const txt = JSON.stringify(Object.assign({}, {
        height: this.data.height,
        weight: this.data.weight,
        timeTxt: this.data.timeTxt,
        week: weekArr
      }))
      if (this.data.height === 165) {
        wx.showToast({
          title: '请选择身高',
          icon: '',
          image: '../../image/avatar.jpg',
          duration: 5000
        })
      } else if (this.data.weight === 50) {
        wx.showToast({
          title: '请选择体重',
          icon: '',
          image: '../../image/avatar.jpg',
          duration: 5000
        })
      } else if (this.data.timeTxt === '请点击选择开始时间') {
        wx.showToast({
          title: '请选择开始时间',
          icon: '',
          image: '../../image/avatar.jpg',
          duration: 5000
        })
      } else if (weekArr.length === 0) {
          wx.showToast({
            title: '请选择训练日期',
            icon: '',
            image: '../../image/avatar.png',
            duration: 5000
          })
      } else {
        wx.showModal({
          title: '您填写的内容',
          content: txt,
          showCancel: true,
          cancelText: '取消',
          confirmText: '确定',
          success(e) {
            console.log(e)
          }
        })
      }
    }
  }
})