//index.js
//获取应用实例
let timer = null;
let voiceManager = null;
Page({
  data: {
    canIUseOpenSetting: wx.canIUse('button.open-type.openSetting'),
    playBtnDown: true,
    txt_arr: ['全世界，你最可爱，没有之一。', '保持好奇心，保持童真；保持反抗，保持爱。', '喜欢的人是海面的灯塔。遥远，不可触，但是把我从黑夜里打捞出来了。', '你就是最好的人，如果我发现有谁比你好，我会装作没看见。', '谁结婚谁分手我一点也不在乎，我只想知道尔晴什么时候死。', '一个不负责任的文案建议：今日目标 好好做人', '想为爱做很多事情，可惜没有人爱我。', '感到悲伤的时候，去看大海。一个人寂寞的时候，去看大海。'],
    messageTxt: '',
    voiceTime: 0,
    openSettingType: false,
    canIUseVoice: wx.canIUse('getRecorderManager'),
    canIUsePlayVoice: wx.canIUse('createInnerAudioContext'),
    record: null,
    isStartRecord: false,
    recordPath: null,
    duration: 0,
    isStartPlay: false,
    minRecordTime: 400,
    voiceBtnIcon: false,
    sendIcon: false
  },
  onLoad: function(options) {
    const that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.record'] === undefined) {
          wx.authorize({
            scope: 'scope.record',
            success(res) {
              that.setData({
                openSettingType: true
              })
            },
            fail(msg) {
              that.setData({
                openSettingType: false
              })
            }
          })
        } else if (res.authSetting['scope.record'] === false) {
          that.setData({
            openSettingType: false
          })
        } else {
          that.setData({
            openSettingType: true
          })
        }
      }
    });
    if (this.data.canIUseVoice) {
      this.setData({
        record: wx.getRecorderManager()
      })
    }
    if (this.data.canIUsePlayVoice) {
      voiceManager = wx.createInnerAudioContext();
      voiceManager.onTimeUpdate(() => {
        that.setData({
          voiceTime: Math.round(that.data.duration / Math.pow(10, 3) - voiceManager.currentTime)
        })
      });
      voiceManager.onPlay(() => {
      });
      voiceManager.onPause(() => {
      });
      voiceManager.onError((msg) => {
        console.log(msg)
        wx.showToast({
          title: msg.errMsg,
          icon: 'none'
        })
      });
      voiceManager.onEnded((res) => {
        that.setData({
          voiceTime: Math.round(that.data.duration / Math.pow(10, 3))
        });
        voiceManager.stop();
      })
    }
  },
  onShow: function() {
    this._randowChangeTxt();

  },
  _randowChangeTxt() {
    const that = this;
    setInterval(() => {
      let randomIndex = Math.floor(Math.random() * that.data.txt_arr.length);
      that.setData({
        messageTxt: that.data.txt_arr[randomIndex]
      })
    }, 10000);
  },
  playVoiceDown(e) {
    const that = this;
    that.setData({
      playBtnDown: false
    });
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.record'] === true) {
          that.setData({
            voiceTime: 0,
            isStartRecord: true
          });
          if (that.data.canIUseVoice) {
            that.data.record.onStart(() => {});
            that.data.record.start();
          } else {
            wx.startRecord((res) => {
              that.setData({
                recordPath: res.tempFilePath
              })
            });
          }
        }
      }
    })
  },
  playVoiceUp(e) {
    const that = this;
    this.setData({
      playBtnDown: true
    })
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.record'] === true) {
          if (that.data.canIUseVoice) {
            that.data.record.onStop((res) => {
              if (res.duration < that.data.minRecordTime) {
                wx.showToast({
                  title: '时间太短',
                  icon: 'none'
                })
              } else {
                voiceManager.src = res.tempFilePath;
                that.setData({
                  recordPath: res.tempFilePath,
                  voiceTime: Math.round(res.duration / Math.pow(10, 3)),
                  duration: res.duration
                })
              }
            });
            setTimeout(() => {
              that.data.record.stop();
            }, 100);
          } else {
            setTimeout(() => {
              wx.stopRecord();
            }, 100);
          }
        }
        that.setData({
          isStartRecord: false
        })
      }
    })
  },
  onOpenSetting(e) {
    if (e.detail.authSetting['scope.record'] === true) {
      this.setData({
        openSettingType: true
      })
    } else if (e.detail.authSetting['scope.record'] === false) {
      this.setData({
        openSettingType: false
      })
    }
  },
  togglePlayVoice(e) {
    const that = this;
    if (this.data.isStartRecord) {
      return false
    }
    if (this.data.canIUsePlayVoice) {
      if (voiceManager.paused) {
        voiceManager.play();
      } else {
        voiceManager.pause();
      }
    } else {
      wx.playVoice({
        filePath: this.data.recordPath,
        success(res) {
          console.log(res);
        },
        fail(msg) {
          console.log(msg);
        }
      })
    }
  },
  playRecordDown (e) {
    this.setData({
      voiceBtnIcon: true
    })
  },
  playRecordUp (e) {
    this.setData({
      voiceBtnIcon: false
    })
  },
  sendDown (e) {
    this.setData({
      sendIcon: true
    })
  },
  sendUp (e) {
    this.setData({
      sendIcon: false 
    })
  }
})