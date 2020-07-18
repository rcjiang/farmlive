// pages/live/live.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuList: [
      {
        text: '少无适俗韵,性本爱丘山',
        color: '#ff0000',
        time: 1
      }, {
        text: '误落尘网中,一去三十年',
        color: '#ff00ff',
        time: 3
      }, {
        text: '方宅十余亩,草屋八九间',
        color: '#ff0000',
        time: 6
      }
    ],
    src: 'https://www.easimarine.cn/media/default.mp4',
    source: {
      '202': 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      '204': 'https://www.easimarine.cn/media/default.mp4'
    }
  },
  onVideoErr: function (args) {
    console.log(args);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var liveSrc = this.data.source[id + ''];
    console.log(liveSrc);
    if (liveSrc) {
      this.setData({
        src: liveSrc
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo');
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
    this.videoContext.exitPictureInPicture();
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

  }
})