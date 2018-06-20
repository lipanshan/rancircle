Page({
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
    console.log(this.videoCtx)
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})