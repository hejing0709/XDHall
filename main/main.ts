// pages/main/main.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    titles:[{
      "name":"翔安校区",
      "id":1,
      "link":"xianganhall",
      "url":"./xianganhall/xianganhall"
    },{
      "name":"思明校区",
      "id":2,
      "link":"simingxiaoqu",
      "url":"./simingxiaoqu/simingxiaoqu"
    },{
      "name":"漳州校区",
      "id":3,
      "link":"zhangzhouxiaoqu",
      "url":""
    },{
      "name":"学生事务",
      "id":4,
      "url":""
    },{
      "name":"校内新闻动态",
      "id":5,
      "url":""
    },{
      "name":"体育",
      "id":6,
      "url":""
    }],
    nearStore:[{
      "storename":"益禾堂",
      "soreid":"01",
      "image_url":"../../resources/店名/_01_益禾堂.jpg",
      "link":"../register/register"
    },{
      "storename":"肯德基",
      "soreid":"02",
      "image_url":"../../resources/店名/KFC.jpg",
      "link":"../index/index"
    },{
      "storename":"麦当劳",
      "soreid":"03",
      "image_url":"../../resources/店名/mdl.jpg"
    }],
    currentTab:"1"
  },
  choice(e){
    this.setData({
      currentTab: e.currentTarget.dataset.current
    })
  },
  intostore(e){
    console.log(e)
    wx.navigateTo({
      url: '../register/register',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})