// pages/core/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: [ "#aaa154", "#2e86c5", "#D8AA5A", "#AD9DD0", "#0A9A70", "#61BC69", "#12AEF3"],
    wlist: [
      { "WhichDay": 1, "CourseBegin": 1, "CourseNumber": 3, "CourseName": "高等数学", "place":"@至诚楼A301"},
      { "WhichDay": 1, "CourseBegin": 5, "CourseNumber": 3, "CourseName": "高等数学" , "place":"@至诚楼A301"},
      { "WhichDay": 2, "CourseBegin": 1, "CourseNumber": 2,"CourseName":"高等数学", "place":"@至诚楼A301"},
      { "WhichDay": 2, "CourseBegin": 7, "CourseNumber": 2, "CourseName": "高等数学", "place":"@至诚楼A301" },
      { "WhichDay": 3, "CourseBegin": 4, "CourseNumber": 1, "CourseName": "高等数学", "place":"@至诚楼A301" },
      { "WhichDay": 3, "CourseBegin": 9, "CourseNumber": 2, "CourseName": "高等数学" , "place":"@至诚楼A301"},
      { "WhichDay": 3, "CourseBegin": 5, "CourseNumber": 2, "CourseName": "高等数学", "place":"@至诚楼A301" },
      { "WhichDay": 4, "CourseBegin": 2, "CourseNumber": 3, "CourseName": "高等数学", "place":"@至诚楼A301" },
      { "WhichDay": 4, "CourseBegin": 9, "CourseNumber": 2, "CourseName": "高等数学", "place":"@至诚楼A301" },
      { "WhichDay": 5, "CourseBegin": 1, "CourseNumber": 2, "CourseName": "高等数学", "place":"@至诚楼A301" },
      { "WhichDay": 6, "CourseBegin": 3, "CourseNumber": 2, "CourseName": "高等数学" , "place":"@至诚楼A301"},
      { "WhichDay": 7, "CourseBegin": 5, "CourseNumber": 3, "CourseName": "高等数学", "place":"@至诚楼A301" },
    ],
    clist:[
      {"CourseName": "高等数学","place":"@至诚楼A301","teacher":"李飞","week":"1-10周","pitch":"周一 1~3节"},
    ],
    datelist:[12,13,14,15,16,17,18],
    monthNow: 4,
    array:['第一周','第二周','第三周','第四周'],
    objectArray:[
      {
        id:0,
        name:'第一周'
      },
      {
        id:1,
        name:'第二周'
      },
      {
        id:2,
        name:'第三周'
      },
      {
        id:3,
        name:'第四周'
      },
    ],
    index: 0,
    showModal:false,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为',e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },
  click:function(){
    this.setData({
      showModal:true,
    })
  },
  preventTouchMove:function(){
  },
  ok:function(){
    this.setData({
      showModal:false
    })
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