/**
 * 功能名称：验证接口
 * 开发者：quitter
 * */
var verify = {
	/**
	 * 验证手机号 验证规则（首数字为1 总长度11）
	 * @param {type} data 要验证的手机号码 
	 */
	IsPhone: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^1[3-9]\d{9}$/;
		return reg.test(data);
	},
	/**
	 * 验证邮箱
	 * @param {type} data 邮箱
	 * */
	IsEmail: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
		return reg.test(data);
	},
	/**
	 * 验证身份证
	 * @param {type} data 身份证号码 
	 * */
	IdCard: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg =
			/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		return reg.test(data);
	},
	/**
	 * 验证是否全是中文
	 * @param {string} data 数据 
	 * */
	IsChinese: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^[\u0391-\uFFE5]+$/;
		return reg.test(data);
	},
	/**
	 * 验证是否是邮编 （只能为6位）
	 * @param {type} data 邮编
	 */
	IsZip: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^\d{6}$/;
		return reg.test(data);
	},
	/**
	 * 验证是否全是英文字母 
	 * @param {type} data 数据 
	 * */
	IsLetter: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^[a-zA-Z]+$/;
		return reg.test(data);
	},
	/**
	 * 验证是否是电话号码
	 * @param {type} data 电话号码
	 * */
	IsTel: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
		return reg.test(data);
	},
	/**
	 * 验证非零正整数
	 * @param {type} data 数据
	 * */
	IsZInteger: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^\+?[1-9][0-9]*$/;
		return reg.test(data);
	},
	/**
	 * 验证非零负整数
	 * @param {type} data 数据 
	 * */
	IsFInteger: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^\-[1-9][0-9]*$/;
		return reg.test(data);
	},
	/**
	 * 验证有两位小数的正实数
	 * @param {type} data 数据  
	 */
	IsDecimals: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		var reg = /^[0-9]+(.[0-9]{2})?$/;
		return reg.test(data);
	},
	/**
	 * 验证密码 验证规则（含有字母+数字的8-16位）
	 * @param {type} data 数据 
	 * */
	IsPassword: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		// var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
		var reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,16}$/;
		return reg.test(data);
	},
	/**
	 * 验证用户名 验证规则（含有字母+数字的6-20位）
	 * @param {type} data 数据 
	 * */
	IsUserName: function(data) {
		if (Boolean(data) === false) {
			return false;
		}
		// var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
		var reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
		return reg.test(data);
	},
	/**
	 * 隐藏手机号码中间四位
	 * @param {type} Mobile 要隐藏的手机号  
	 **/
	 HideMobile: function(data){
		if(Boolean(data) === false){
			return false;
		}
		const _len = data.length;
		if(_len>=8){
			return data.substr(0,_len-8)+"****"+data.substring(_len-4,_len);
		}else{
			return data;
		}
	 }
}

export default verify;