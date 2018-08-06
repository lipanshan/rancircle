//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    btnList: [{
        url: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeStar.png/0',
        txt: 'avatar',
        list: [
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon01.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon02.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon03.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon04.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon05.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon06.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon07.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon08.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon09.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon10.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon11.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon12.png'
        ],
        active: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeStarCurrent.png/0',
        images: [
          'https://puui.qpic.cn/vupload/0/20180730_star01.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star02.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star03.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star04.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star05.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star06.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star07.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star08.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star09.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star10.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star11.png/0',
          'https://puui.qpic.cn/vupload/0/20180730_star12.png/0'
        ]
      },
      {
        url: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeStarBg.png/0',
        txt: 'backgroundImage',
        list: ['http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon01.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon02.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon03.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon04.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon05.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon06.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon07.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon08.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon09.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon10.jpg',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon11.jpg'
        ],
        active: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeStarBgCurrent.png/0',
        images: ['https://puui.qpic.cn/vupload/0/20180730_starBg01.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg01.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg02.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg03.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg04.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg05.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg06.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg07.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg08.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg09.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg10.jpg/0',
          'https://puui.qpic.cn/vupload/0/20180730_starBg11.jpg/0'
        ]
      },
      {
        url: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeTxt.png/0',
        txt: 'txt',
        list: [
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon01-2.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon02-2.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon03-2.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon04-2.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon05-2.png'
        ],
        active: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeTxtCurrent.png/0',
        images: [
          'https://puui.qpic.cn/vupload/0/20180801_txt04-4.png/0',
          'https://puui.qpic.cn/vupload/0/20180801_txt02-4.png/0',
          'https://puui.qpic.cn/vupload/0/20180801_txt05-4.png/0',
          'https://puui.qpic.cn/vupload/0/20180801_txt01-4.png/0',
          'https://puui.qpic.cn/vupload/0/20180801_txt04-5.png/0'
        ]
      },
      {
        url: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeDecoration.png/0',
        txt: 'icon1',
        list: [
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon01.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon02.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon03.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon04.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon05.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon06.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon07.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon08.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon09.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon10.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon11.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon12.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon13.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon14.png',
        ],
        active: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeDecorationCurrent.png/0',
        images: [
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon01.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon02.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon03.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon04.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon05.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon06.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon07.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon08.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon09.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon10.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon11.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon12.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon13.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon14.png',
        ]
      },
      {
        url: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeFace.png/0',
        txt: 'icon2',
        list: [
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon01.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon02.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon03.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon04.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon05.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon06.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon07.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon08.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon09.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon10.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon11.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon12.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon13.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon14.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon15.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon16.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon17.png'
        ],
        active: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeFaceCurrent.png/0',
        images: [
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon01.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon02.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon03.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon04.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon05.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon06.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon07.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon08.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon09.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon10.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon11.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon12.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon13.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon14.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon15.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon16.png',
          'http://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon17.png'
        ]
      }
    ],
    contentRow1: null,
    contentRow2: null,
    txt: '',
    menuActive: 'avatar',
    currentPeople: null,
    currentBg: null,
    currentImageTxt: null,
    currentImageIcon1: null,
    currentImageIcon2: null,
    isAnimation: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    const centerNum = Math.floor(this.data.btnList[0].list.length / 2);
    this.setData({
      contentRow1: this.data.btnList[0].list.slice(0, centerNum),
      contentRow2: this.data.btnList[0].list.slice(centerNum),
      currentPeople: this.data.btnList[0].images[0],
      currentImageIcon1: []
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  selectMenu(e) {
    const index = this.data.btnList.findIndex((item) => {
      return e.currentTarget.dataset.item === item.txt
    })
    const centerNum = Math.ceil(this.data.btnList[index].list.length / 2);
    const cls = this.data.btnList[index].txt === 'txt' ? 'no-border' : '';
    this.setData({
      contentRow1: this.data.btnList[index].list.slice(0, centerNum),
      contentRow2: this.data.btnList[index].list.slice(centerNum),
      txt: cls,
      menuActive: this.data.btnList[index].txt
    })
  },
  selectItem(e) {
    switch (this.data.menuActive) {
      case 'avatar':
        this._changeAvatar(this.data.btnList[0].images[e.currentTarget.dataset.index])
        break;
      case 'backgroundImage':
        const index = e.currentTarget.dataset.index + 1
        this._changeBgImage(this.data.btnList[1].images[index])
        break;
      case 'txt':
        this._changeTxt(this.data.btnList[2].images[e.currentTarget.dataset.index])
        break;
      case 'icon1':
        this._changeIcon1(this.data.btnList[3].images[e.currentTarget.dataset.index])
        break;
      case 'icon2':
        this._changeIcon2(this.data.btnList[4].images[e.currentTarget.dataset.index])
        break;
    }
  },
  _changeAvatar(url) {
    this.setData({
      currentPeople: url
    })
  },
  _changeBgImage(url) {
    this.setData({
      currentBg: url
    })
  },
  _changeTxt(url) {
    this.setData({
      currentImageTxt: url === this.data.currentImageTxt ? null : url
    })
  },
  _changeIcon1(url) {
    const flag = this.data.currentImageIcon1.find((item) => {
      return item.url === url
    })
    let arr = JSON.parse(JSON.stringify(this.data.currentImageIcon1));
    if (!flag) {
      arr.push({
        url,
        x: 0,
        y: 0
      });
    }
    this.setData({
      currentImageIcon1: arr
    })
  },
  _changeIcon2(url) {
    console.log(url);
  },
  removeIcon (e) {
    const arr = JSON.parse(JSON.stringify(this.data.currentImageIcon1));
    const index = arr.findIndex((item, index) => {
      return item.url === e.currentTarget.dataset.url
    })
    arr.splice(index, 1);
    this.setData({
      currentImageIcon1: arr
    })
  },
  onChange (e) {
    console.log(e)
    const index = this.data.currentImageIcon1.findIndex((item) => {
      return e.currentTarget.dataset.item.url === item.url
    });
    const keyX = `currentImageIcon1[${index}].x`;
    const keyY = `currentImageIcon1[${index}].y`;
    this.setData({
      [keyX]: e.detail.x,
      [keyY]: e.detail.y
    })
  }
})