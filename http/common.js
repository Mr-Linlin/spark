import http from './request.js'

// 测试登录接口
export const Login = user => http.post('/front/login', user)
// 获取验证码
export const sendCode =info=>http.post('/ajax/sendCode',info)
// 用户注册第一步
export const registerOne = info=>http.post('/front/register/one',info)
// 用户注册第二步
export const registerTwo = info=>http.post('/front/register/two',info)
// 忘记密码第一步
export const forgetOne = info=>http.post('/front/forget/one',info)
// 忘记密码第二步
export const forgetTwo = info=>http.post('/front/forget/two',info)
// 资产统计
export const statistic = user => http.post('/front/financial/asset/statistic', user)

// 获取充币地址
export const rechargeAddress = user => http.post('/front/financial/recharge/address', user)

// 获取所有币种
export const currencyList = user => http.post('/search/currencyList', user)

// 用户基本信息
export const userbaseInfo = user => http.post('/front/user/baseInfo', user)

// 全网销毁FNT总量
export const destroytotal = user => http.post('/search/destroy/total', user)

// FNT销毁记录
export const destroylist = user => http.post('/search/destroy/list', user)