import http from './request.js'

// 测试登录接口
export const Login = user => http.post('/front/login', user)
// 获取验证码
export const sendCode = info => http.post('/ajax/sendCode', info)
// 用户注册第一步
export const registerOne = info => http.post('/front/register/one', info)
// 用户注册第二步
export const registerTwo = info => http.post('/front/register/two', info)
// 忘记密码第一步
export const forgetOne = info => http.post('/front/forget/one', info)
// 忘记密码第二步
export const forgetTwo = info => http.post('/front/forget/two', info)
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

// 团队信息
export const subinfo = user => http.post('/front/user/sub/info', user)

// 团队信息List
export const teamlist = user => http.post('/front/user/team/list', user)

// 修改登录密码
export const modifypwd = user => http.post('/front/user/modify/pwd', user)

//修改交易密码
export const modifytradePwd = user => http.post('/front/user/modify/tradePwd', user)

//验证当前交易密码
export const verifytradePwd = user => http.post('/front/user/verify/tradePwd', user)

//预约池金额
export const poolasset = user => http.post('/front/pre/pool/asset', user)

//预约池List
export const joinlist = user => http.post('/front/pre/join/list', user)

//预排【预约池充值】
export const poolrecharge = user => http.post('/front/pre/pool/recharge', user)
// 预派单记录
export const getLog = user => http.post('/front/financial/getLog ', user)

// 预派单统计
export const statistics = user => http.post('/front/pre/join/statistic ', user)

//提取GS
export const walletex = user => http.post('/front/pre/wallet/ex', user)

//资产List
export const assetlist = user => http.post('/front/financial/asset/list', user)

//资产List详情
export const assetsingle = user => http.post('/front/financial/asset/single', user)

//资产List详情财务明细
export const financialgetLog = user => http.post('/front/financial/getLog', user)

//获取账单记录类型
export const financialgetLogType = user => http.post('/front/financial/getLogType', user)

//发送验证码给当前用户
export const ajaxsendMyCode = user => http.post('/ajax/sendMyCode', user)

//转账
export const financialdotransfer = user => http.post('/front/financial/do/transfer', user)

//存入记录
export const rechargelist = user => http.post('/front/pre/recharge/list', user)

//提取记录
export const preexlist = user => http.post('/front/pre/ex/list', user)
// spark抢单记录
export const getRobbery = user => http.post('/front/pdd/join/list', user)
// spark抢单统计
export const pddStatistics = user => http.post('/front/pdd/join/statistic ', user)

//修改头像
export const modify = user => http.post('/front/user/modify/pic', user)

// 公告
export const searchgetContent= user => http.post('/front/search/getContent', user)

// 单账户资产
export const getbalance= user => http.post('/front/financial/get/balance', user)

// 委托
export const trusteeList= user => http.post('/front/trade/trustee/list', user)

// 撤单
export const trusteeCancel = user => http.post('/front/trade/trustee/cancel', user)

// 本金钱包接口
export const rechargeuserAllWallet = user => http.post('/front/recharge/userAllWallet', user)

// 充值时间段
export const rechargetimeAndPrice = user => http.post('/front/recharge/timeAndPrice', user)

// 收益提现手续费
export const rechargeEarningsProfit = user => http.post('/front/recharge/EarningsProfit', user)

// 确认收益提现接口
export const rechargeEarningsTopUpMoney = user => http.post('/front/recharge/EarningsTopUpMoney', user)
