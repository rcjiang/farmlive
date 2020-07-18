//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    farms: [
      { id: 201, name: '我的农场', src: '../../media/farms/01.jpg' },
      { id: 202, name: '小猪的庄园', src: '../../media/farms/02.jpg' },
      { id: 203, name: '半亩田', src: '../../media/farms/03.jpg' },
      { id: 204, name: '江的农庄', src: '../../media/farms/04.jpg' },
      { id: 205, name: '农场007', src: '../../media/farms/05.jpg' },
      { id: 206, name: '农场1号', src: '../../media/farms/06.jpg' }
    ]
  },
  scan: function () {
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
  },
  openLive: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../live/live?id=${id}`
    });

  },
  onLoad: function (options) {
  },
  
  onShareAppMessage: function () {

  }
})
