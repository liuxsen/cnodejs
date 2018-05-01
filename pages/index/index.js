//index.js
//获取应用实例
import { topic } from '../../api/index.js'
import { timeago } from '../../utils/util.js'
import Wxparse from '../../wxParse/wxParse.js'
Page({
  data: {
    pageListData: [],
    contentList: [],
    scrollTop: 100,
    page: {
      page: 1,
      limit: 10,
      tab: 'good',
      mdrender: 'true'
    }
  },
  onLoad(){
    this.fnNetLoadPageData()
  },
  fnNetLoadPageData(){
    let oPage = this.data.page
    let options = {
      params: oPage
    }
    topic.list(options)
    .then(res=>{
      res.map((item,i) => {
        delete item.content
        item.dateDiff = timeago(new Date(item.create_at).getTime())
      })
      // wxParse('article', 'html', item.content, this, 5);
      // for (let i = 0; i < contentList.length; i++) {
      //   Wxparse.wxParse('content' + i, 'html', contentList[i], this);
      //   if (i === contentList.length - 1) {
      //     Wxparse.wxParseTemArray("contentList", 'content', contentList.length, this)
      //   }
      // }
      // res.map((item, i) => {
      //   item.parsetContent = this.data[`content${i}`]
      // })
      this.setData({
        pageListData: this.data.pageListData.concat(res)
      })
      console.log(this.data)
    })
    .catch(err=>{
      console.log(err)
    })
    
  },
  upper(){
    console.log('upper')
    this.setData({
      page: {
        ...this.data.page,
        page: 1
      }
    })
    this.fnNetLoadPageData()
  },
  lower(e){
    this.fnClickLoadMore()
  },
  scroll(e){
    console.log(e)
  },
  fnClickLoadMore(){
    console.log('more')
    this.setData({
      page: {
        ...this.data.page,
        page: ++this.data.page.page
      }
    })
    this.fnNetLoadPageData()
  },
  fnTapJumpDetail(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
      success(){
        console.log('success')
      },
      fail(){
        console.log('fail')
      }
    })
  }
})
