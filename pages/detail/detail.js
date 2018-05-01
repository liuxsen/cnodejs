import { topic } from '../../api/index.js'
import Wxparse from '../../wxParse/wxParse.js'
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: ''
  },

  fnNetGetDetail(id){
    let options = {
      params:{
        id: id
      },
      restful: true
    }
    topic.retrive(options)
      .then(res=>{
        console.log(res)
        Wxparse.wxParse('content', 'html', res.content, this, 5);
      })
      .catch(err=>{
        console.log(err)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.fnNetGetDetail(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  }
})