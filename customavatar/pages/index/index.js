//index.js
//获取应用实例
const canvas = wx.createCanvasContext('myCanvas', this);
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
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon01.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon02.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon03.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon04.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon05.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon06.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon07.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon08.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon09.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon10.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon11.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starIcon12.png'
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
        list: ['https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon01.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon02.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon03.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon04.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon05.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon06.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon07.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon08.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon09.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon10.jpg',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/starBgIcon11.jpg'
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
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon01-2.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon02-2.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon03-2.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon04-2.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/txtIcon05-2.png'
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
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon01.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon02.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon03.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon04.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon05.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon06.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon07.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon08.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon09.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon10.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon11.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon12.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon13.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon14.png',
        ],
        active: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeDecorationCurrent.png/0',
        images: [
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon01.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon02.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon03.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon04.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon05.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon06.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon07.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon08.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon09.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon10.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon11.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon12.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon13.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/decorationIcon14.png',
        ]
      },
      {
        url: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeFace.png/0',
        txt: 'icon2',
        list: [
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon01.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon02.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon03.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon04.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon05.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon06.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon07.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon08.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon09.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon10.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon11.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon12.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon13.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon14.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon15.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon16.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon17.png'
        ],
        active: 'https://puui.qpic.cn/vupload/0/20180726_menuTypeFaceCurrent.png/0',
        images: [
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon01.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon02.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon03.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon04.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon05.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon06.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon07.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon08.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon09.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon10.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon11.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon12.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon13.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon14.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon15.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon16.png',
          'https://mat1.gtimg.com/v/goldenchen/images/mrzzDraw/faceIcon17.png'
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
    currentMove: '',
    windowW: 0,
    windowH: 0,
    bottonBoxW: 0,
    bottonBoxH: 0, 
    canvasImage: '',
    canvasUrls: {
      currentPeople: null,
      currentBg: null,
      currentImageTxt: null,
      currentImageIcon1: null
    },
    canvasFlag: false
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
    const that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          windowW: res.windowWidth,
          windowH: res.windowHeight
        })
      }
    })
    const query = wx.createSelectorQuery();
    query.select('#container').boundingClientRect((rect) => {
      that.setData({
        bottonBoxH: rect.height
      })
    }).exec();
    const centerNum = Math.floor(this.data.btnList[0].list.length / 2);
    const keyUrlPeople = 'canvasUrls.currentPeople';
    const keyUrlImageIcon1 = 'canvasUrls.currentImageIcon1';
    this.setData({
      contentRow1: this.data.btnList[0].list.slice(0, centerNum),
      contentRow2: this.data.btnList[0].list.slice(centerNum),
      currentPeople: this.data.btnList[0].images[0],
      currentImageIcon1: [],
      [keyUrlImageIcon1]: []
    });
    wx.getImageInfo({
      src: this.data.btnList[0].images[0],
      success (res) {
        that.setData({
          [keyUrlPeople] : res.path 
        });
      }
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
        this._changeIcon(this.data.btnList[3].images[e.currentTarget.dataset.index])
        break;
      case 'icon2':
        this._changeIcon(this.data.btnList[4].images[e.currentTarget.dataset.index])
        break;
      default:
      break;
    }
  },
  _changeAvatar(url) {
    const that = this;
    const key = 'canvasUrls.currentPeople';
    this.setData({
      currentPeople: url
    });
    wx.getImageInfo({
      src: url,
      success (res) {
        that.setData({
          [key]: res.path
        });
      }
    })
  },
  _changeBgImage(url) {
    const that = this;
    const key = 'canvasUrls.currentBg';
    this.setData({
      currentBg: url
    });
    wx.getImageInfo({
      src: url,
      success(res) {
        that.setData({
          [key]: res.path
        });
      }
    })
  },
  _changeTxt(url) {
    const that = this;
    const key = 'canvasUrls.currentImageTxt';
    if (url === this.data.currentImageTxt) {
      that.setData({
        [key]: null,
        currentImageTxt: null
      });
    } else {
      this.setData({
        currentImageTxt: url
      })
      wx.getImageInfo({
        src: url,
        success(res) {
          that.setData({
            [key]: res.path
          });
        }
      })
    }
  },
  _changeIcon(url) {
    const flag = this.data.currentImageIcon1.find((item) => {
      return item.url === url
    })
    let arr = JSON.parse(JSON.stringify(this.data.currentImageIcon1));
    let arrUrl = JSON.parse(JSON.stringify(this.data.canvasUrls.currentImageIcon1));
    const that = this;
    const key = 'canvasUrls.currentImageIcon1';
    if (!flag) {
      arr.push({
        url: url,
        x: 0,
        y: 0
      });
      that.setData({
        currentImageIcon1: arr,
        currentMove: arr.length - 1
      });
      wx.getImageInfo({
        src: url,
        success (res) {
          arrUrl.push({
            url: res.path,
            x: 0,
            y: 0
          })
          that.setData({
            [key]: arrUrl
          });
        }
      })
    }
  },
  removeIcon (e) {
    const arr = JSON.parse(JSON.stringify(this.data.currentImageIcon1));
    const urlArr = JSON.parse(JSON.stringify(this.data.canvasUrls.currentImageIcon1));
    const key = 'canvasUrls.currentImageIcon1';
    const that = this;
    const index = arr.findIndex((item, index) => {
      return item.url === e.currentTarget.dataset.url
    })
    arr.splice(index, 1);
    urlArr.splice(index, 1)
    this.setData({
      currentImageIcon1: arr,
      [key]: urlArr
    });
    this._canvasImageIcon();
  },
  onChange (e) {
    const index = this.data.currentImageIcon1.findIndex((item) => {
      return e.currentTarget.dataset.item.url === item.url
    });
    const keyX = `currentImageIcon1[${index}].x`;
    const keyY = `currentImageIcon1[${index}].y`;
    const keyXUrl = `canvasUrls.currentImageIcon1[${index}].x`;
    const keyYUrl = `canvasUrls.currentImageIcon1[${index}].y`;
    this.setData({
      [keyX]: e.detail.x,
      [keyY]: e.detail.y,
      [keyXUrl]: e.detail.x,
      [keyYUrl]: e.detail.y,
      currentMove: index
    })
  },
  onfocus (e) {
    this.setData({
      currentMove: e.currentTarget.dataset.inde
    })
  },
  onblur (e) {
    this.setData({
      currentMove: null
    })
  },
  onSubmit (e) {
    const that = this;
    this._canvasBg();
    this._canvasPeople();
    this._canvasImageTxt();
    this._canvasImageIcon();
    canvas.draw(false, function (res) {
      console.log(res)
    });
    this.setData({
      canvasFlag: true
    })
  },
  _canvasBg () {
    const that = this;
    if (this.data.canvasUrls.currentBg !== null) {
      canvas.drawImage(this.data.canvasUrls.currentBg, 0, 0, that.data.windowW, that.data.windowH);
  
    }
  },
  _canvasPeople () {
    const that = this;
    if (this.data.canvasUrls.currentPeople !== null) {
      canvas.drawImage(this.data.canvasUrls.currentPeople, ((that.data.windowW - 256) / 2), (that.data.windowH - 245), 256, 245);
    
    }
  },
  _canvasImageTxt (){
    const that = this;
    if (this.data.canvasUrls.currentImageTxt !== null) {
      
      canvas.drawImage(this.data.canvasUrls.currentImageTxt, 0, 0, that.data.windowW, that.data.windowH);
    }
  },
  _canvasImageIcon (){
    const that = this;
    if (this.data.canvasUrls.currentImageIcon1.length) {
      for (let i = 0, len = this.data.canvasUrls.currentImageIcon1.length; i < len; i++) {
        let item = this.data.canvasUrls.currentImageIcon1[i];
        if (item && item.url) {
          canvas.drawImage(item.url, that.data.windowW / 2 + item.x, that.data.windowH - that.data.bottonBoxH / 2 + item.y - 31, 100, 100);
        }
      }
    }
  },
  hideCanvas (e) {
    this.setData({
      canvasFlag: false
    });
  },
  saveCanvas (e) {
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success (res) {
            wx.showToast({
              title: '图片以保存',
              icon: 'success',
              mask: true
            })
          }
        })
      }
    }, this)
  }
})