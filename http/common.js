import http from './request.js'

// 测试登录接口
export const Login = user => http.post('login/submit', user)
