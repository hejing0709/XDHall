// pages/dingdan/dingdan.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishlist:"",
    zongjia:"",
    year:"2023",
    month:"3",
    day:"8",
    Tarray:['选择','11:00', '11:30', '12:00', '12:30'],
    Parray: ['选择','嘉庚','学五楼','医学院','信息学院','二期'],
    tindex:0,
    pindex:0,
    dingdanNumber:"姓名+学号后四位"
  },

  TChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tindex: e.detail.value
    })
  },
  PChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pindex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function(options) {
      const dataList = JSON.parse(options.obj)
      this.setData({
        dishlist:dataList,
      })
      console.log(this.data.dishlist)
      var sum=0
      for(let i=0;i<this.data.dishlist.length;i++){
        sum += this.data.dishlist[i].dishprice*this.data.dishlist[i].dishAmount;
      }
      console.log(sum)
      this.setData({
        zongjia:sum
      })

    },
    // Time:function(e){
    //   var date = new Date()
    //   var month = date.getMonth() + 1//月
    //   var day = date.getDate()//日
    //   var hour = date.getHours()//时
    //   var minute = date.getMinutes()
    //   console.log(date)
    //   console.log("dsad"+month)
    //   console.log(day)
    //   // this.setData({
    //   //   date:Time
    //   // })
    // },
    sure:function(e){
      console.log(this.data.dingdanNumber)
      console.log(this.data.dishlist)
      console.log(this.data.zongjia)
      console.log(this.data.Tarray[this.data.tindex])
      console.log(this.data.Parray[this.data.pindex])

      wx.request({
        url:'http://10.0.0.129:8000/',
        // header:{
        //   "content-type": "application/x-www-form-urlencoded"
        // },
        method:"post",
        data:{
          ordernumber:this.data.dingdanNumber,
          orderlist:this.data.dishlist,
          ordermoney:this.data.zongjia,
          ordertime:this.data.Tarray[this.data.tindex],
          orderplace:this.data.Parray[this.data.pindex]
        },
        success:res=>{
          if (res.statusCode == 200) {
            this.setData({
              result: res.data	//服务器返回的结果
            })
            console.log(this.data.result)
            if(this.data.result==1){
              console.log("成功")
              wx.navigateTo({
                url: '/pages/main/main',
              })
            }
        }
      }
      })
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