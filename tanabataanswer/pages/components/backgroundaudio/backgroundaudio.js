// pages/home/components/backgroundaudio/backgroundaudio.js
let backgroundAudio = null;
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
    isPaused: false,
    rotateDeg: '',
    bgUrl: 'https://www.sffix.cn/dissociation/active/tanabata_festival_sf/audio/bgMusic.mp3',
    canIUseAudio: wx.canIUse('createInnerAudioContext')
  },
  ready() {
    if (this.data.canIUseAudio) {
      backgroundAudio = wx.createInnerAudioContext();
      backgroundAudio.src = this.data.bgUrl;
      backgroundAudio.autoPlay = true;
      backgroundAudio.loop = true;
      backgroundAudio.onPlay(() => {

      })
      backgroundAudio.onPause(() => {

      })
      backgroundAudio.onStop(() => {

      })
      backgroundAudio.play();
    } else {
      backgroundAudio = wx.createAduioContext('myAudio');
      backgroundAudio.play();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toggleAudioPlay(e) {
      if (this.data.isPaused) {
        backgroundAudio.play();
      } else {
        backgroundAudio.pause();
      }
      const that = this;
      const query = wx.createSelectorQuery().in(this);
      query.select('.playing-hook').fields({
        'computedStyle': ['transform']
      }, function(res) {
        if (that.data.isPaused) {
          that.setData({
            isPaused: false
          })
        } else {
          that.setData({
            rotateDeg: res.transform !== 'none' ? that.data.rotateDeg + ' ' + res.transform : that.data.rotateDeg,
            isPaused: true
          })
        }
      }).exec()
    },
    oncePlay() {
      backgroundAudio.play();
    }
  },

})