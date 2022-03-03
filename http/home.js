import http from './request.js'

// 获取首页资讯
export const getMessage = () => http.post('search/index/message')
// 获取首页资讯列表
export const getMessageList = query => http.post('search/message/list', query)
// 获取首页公告
export const getNotice = () => http.post('search/indexContent')
// 获取首页拼团列表
export const getPddList = () => http.post('front/pdd/name/list')
// 获取拼团详情
export const getPddDetail = info => http.post('front/pdd/join/detail',info)
// 参与拼团
export const pddTake = info => http.post('front/pdd/join/pdd',info)

// 参与拼团 - 测试
export const pddtest = info => http.get('front/pdd/join/pdd/test',{params:info})

// 获取资讯详情
export const newsDetail = info => http.post('search/message/detail',info)

// 拼团金额选项
export const getPddoPtion = info => http.post('front/pdd/join/option',info)
// 拼团销毁FNT比例
export const getRate = () => http.post('search/destroy/rate')
// 单币种价格
export const getPrice = info => http.post('search/single/price',info)
// 单账户资产-常规抓取
export const getBalance = info => http.post('front/financial/get/balance',info)