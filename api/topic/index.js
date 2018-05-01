import { fnPureProcessResourceData } from '../util.js'

class Topic {
  constructor(name){
    this.sCreatUrl = ''
    this.sListUrl = '/topics'
    this.sRetriveUrl = '/topic'
  }
  list(option){
    return fnPureProcessResourceData({
      url: this.sListUrl,
      method: 'GET',
      ...option
    })
  }
  retrive(option){
    return fnPureProcessResourceData({
      url: this.sRetriveUrl,
      method: 'GET',
      ...option
    })
  }
}

module.exports =  {
  Topic
}