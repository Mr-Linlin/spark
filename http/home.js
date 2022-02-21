import http from './request.js'

// 获取首页资讯
export const getMessage = () => http.post('search/index/message')
// 获取首页资讯列表
export const getMessageList = query => http.post('search/message/list', query)
// 获取首页公告
export const getNotice = () => http.post('search/indexContent')
