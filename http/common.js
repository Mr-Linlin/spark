const http = uni.$u.http;
// 测试登录接口
export const Login = user => http.post('login', user)
