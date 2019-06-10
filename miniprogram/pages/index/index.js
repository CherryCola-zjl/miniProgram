//index.js
const app = getApp()

Page({
  data: {
    target:[{
      name: '月薪20k'
    }, {
      name: '订婚'
    },{
      name: '不吃晚饭 + 健身'
    },{
      name: '天天看书'
    },{
      name: '学习视频看完'
    }, {
      name: '考察一下副业问题'
    },{
      name: '攒下6W'
    }]
  },

  onLoad: function() {
    this.loadTime()
  },
  loadTime(){
    let now =  new Date()
    console.log(now)
  }
})
