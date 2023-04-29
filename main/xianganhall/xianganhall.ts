// pages/main/xianganhall/xianganhall.ts
const app=getApp()
var all_danmu=[];
var timer ;
var heightNow;

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组 件的初始数据
   */
  data: {
    show:"none",
    danmu:['小炒牛肉好好吃','鸭肉有点腥','西兰花真好吃'],
    bind_shootValue:"",
    num:1,
    all_danmu_new:[],
    inputcontain:"",
    caipin:['蔬菜','牛肉','猪肉','鸭肉','鸡肉','饮料及汤','主食','砂锅'],
    nearStore:[{
      "storename":"益禾堂",
      "soreid":"01",
      "image_url":"../../../resources/店名/_01_益禾堂.jpg",
      "link":"/pages/yht/yht"
    },{
      "storename":"肯德基",
      "soreid":"02",
      "image_url":"../../../resources/店名/KFC.jpg",
      "link":"/pages/KFC/KFC"
    },{
      "storename":"麦当劳",
      "soreid":"03",
      "image_url":"../../../resources/店名/mdl.jpg",
      "link":"/pages/MDL/MDL"
    }],
    dish:[
      {dishName:"青椒炒肉",
       dishid:"01",
       dishimage:"../../../resources/dishName/_01_青椒炒肉.jpeg",
       dishprice:"8"},
      {dishName:"糖醋鸡翅",
       dishid:"02",
       dishimage:"../../../resources/dishName/_02_糖醋鸡翅.jpg"}
    ],
    screenWidth:"",
    screenHeight:"",
  },
  attached:function(){
    var w;
    var h;
    wx.getSystemInfo({
      success:function(res){
        h=res.windowHeight
        w=res.windowWidth
      }
    })
    this.setData({
      screenWidth:w,
      screenHeight:h,
    })
    heightNow=h;
    
    
  },
  
  /**
   * 组件的方法列表
   */
  methods: {

    // onLoad:function(){
    //   console.log("gaodu")
    //   var that = this;
    //   //获取屏幕的宽度
    //     wx.getSystemInfo({
    //       success: function(res) {
    //               console.log("宽度"+res.windowWidth)
    //               console.log("高度"+res.windowHeight)
    //       }
    //     })
    // },
    xiadan:function(e){
      console.log("xiadan")
      const child = this.selectComponent("#child");
      //console.log( child.data.DishName);
      //let sum = 0;
      // 遍历数组并累加每个元素的值到总和中
      // let dishs=[]
      // for (let i = 0; i < child.data.DishName.length; i++) {
      //   if(child.data.DishName[i].dishAmount!=0){
      //     dishs.push(child.data.DishName[i])
      //   }
      //   // sum += child.data.DishName[i].dishprice*child.data.DishName[i].dishAmount;
      //  }
       let dishs=[]
       child.data.DishName.forEach(element => {
         if(element.dishAmount!=0){
         dishs.push({ dishName: element.dishName,dishprice:element.dishprice, dishAmount: element.dishAmount});
        }
       });
       console.log(dishs)
      // console.log(childData)
      wx.navigateTo({
        url: '/pages/dingdan/dingdan?obj='+JSON.stringify(dishs),
        })
    },
    click:function(e){
      var that=this
      var mm=this.data.nearStore[e.currentTarget.dataset.id].link
      console.log(mm)
      console.log(e.currentTarget.dataset.id)
      wx.navigateTo({
        url:mm
      })
    },
    inp:function(e){
      this.data.bind_shootValue=e.detail.value
    },

    shoot:function(e){
      var that=this
      var danmuText=that.data.bind_shootValue
      var color="rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
      var left=(Math.random())*(that.data.screenWidth-80)+10;
      var height=(Math.random())*(that.data.screenHeight*0.3)+75;
      var danmu_style={}
      danmu_style={
        shootText:danmuText,
        shootColor:color,
        shootLeft:left,
        shootHeight:height,
      }
      console.log(danmu_style)
      all_danmu.push(danmu_style);
      that.setData({
        bind_shootValue:"",
        all_danmu_new:all_danmu,
      })
      console.log(that.data.all_danmu_new)
    },

    //外层函数
    show_danmu:function(e){
      let that=this
      var m=e.detail.value
      console.log(m)
      if(m){
        that.setData({
          show:"block",
          
        })
        timer= setInterval(()=>that.danmuMove(),800)
      }else{
        that.setData({
          show:"none",
        })
        clearInterval(timer);
      }
    },
    
    danmuMove: function(){
      var timerNum = all_danmu.length;
      var textMove ;
      
      for(var i=0;i<timerNum;i++){
         textMove = all_danmu[i].shootHeight;
         console.log("barrage_style_arr["+i+"].barrage_phoneWidth----------:"+all_danmu[i].shootHeight);
         textMove = textMove +20;
        all_danmu[i].shootHeight = textMove;

        //走完的移除掉
        if(all_danmu[i].shootHeight+50>=heightNow){
   //         clearTimeout(this.timer);
            all_danmu.splice(0,1);
            i--;
            //全部弹幕运行完
            if(all_danmu.length==0){
              this.setData({
                all_danmu_new:all_danmu, 
              })
              // clearInterval(this.timer);
              return;
            }
        }
        console.log("第"+i+"个定时器:",textMove);
        this.setData({
          all_danmu_new:all_danmu,
        })
      }
    },
    // inp:function(e){
    //   var that=this
    //   this.setData({
    //     inputcontain:e.detail.value
    //   })
    // },

    lunch:function(e){
      var that=this
      console.log(that.data.inputcontain)
    }


    },
})
