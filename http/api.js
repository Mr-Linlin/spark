import { get, post } from "./http.js";

//请求模块
/**
 * 模块
 * //*****
 */
export const userApi = {
	get(){return get("")},
	post(param){return post("",{...param})},
}

/**
 * 模块
 * //*****
 */
export const homeApi = {
	getConsulting(){return post('/search/index/message')},//获取首页咨询
}

/**
 * 服务器模块
 * //*****
 */
export const machineApi = {
}

/**
 * 排购模块
 * //*****
 */
export const planApi = {
	
}