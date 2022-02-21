import http from './request.js'

// 测试登录接口
export const Login = user => http.post('login', user)

// 资产统计
export const statistic = user => http.post('/financial/asset/statistic', user)