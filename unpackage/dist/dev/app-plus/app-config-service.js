
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/index","pages/home/index","pages/spark/index","pages/server/index","pages/capital/index","pages/user/index","pages/webView","pages/login/pwd_login/index","pages/login/forget_password/index","pages/login/registration/index","pages/login/funds/index","pages/login/certification/index","pages/home/informationdetails/index","pages/capital/ChargeMoney","pages/capital/withdrawMoney","pages/capital/Transfer","pages/capital/accountDetails","pages/capital/transferAccounts","pages/user/userInfo","pages/home/grabOrders","pages/user/myTeam","pages/user/SparkRecord","pages/user/HistoricalOrder","pages/user/setUp","pages/user/destroy","pages/user/reservationPool","pages/user/preOrderRecord","pages/user/reservationPool","pages/user/preOrderRecord","pages/user/childCimps/Approve","pages/user/subscribeChild/Scheduling","pages/user/subscribeChild/ExtractGs","pages/server/childComps/LztTabs","pages/server/childComps/serverfil","pages/server/childComps/serverfnt","pages/home/announcement","pages/home/Information","pages/capital/list","pages/server/childComps/serverMsg"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","bounce":"none"},"tabBar":{"color":"#7e82a6","selectedColor":"#6C56F9","borderStyle":"black","backgroundColor":"#FAFAFC","height":"60px","fontSize":"14px","list":[{"pagePath":"pages/home/index","text":"首页","iconPath":"static/tarbar/home.png","selectedIconPath":"static/tarbar/home_active.png"},{"pagePath":"pages/spark/index","text":"spark","iconPath":"static/tarbar/spark.png","selectedIconPath":"static/tarbar/spark_active.png"},{"pagePath":"pages/server/index","text":"服务器","iconPath":"static/tarbar/server.png","selectedIconPath":"static/tarbar/server_active.png"},{"pagePath":"pages/capital/index","text":"资产","iconPath":"static/tarbar/property.png","selectedIconPath":"static/tarbar/property_active.png"},{"pagePath":"pages/user/index","text":"我的","iconPath":"static/tarbar/profile.png","selectedIconPath":"static/tarbar/profile_active.png"}]},"networkTimeout":{"request":15000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"spark","compilerVersion":"3.3.11","entryPagePath":"pages/login/index"};
var __uniRoutes = [{"path":"/pages/login/index","meta":{"isQuit":true},"window":{"animationType":"fade-in","animationDuration":300,"titleNView":false}},{"path":"/pages/home/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/spark/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/server/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","titleNView":false}},{"path":"/pages/capital/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/user/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/webView","meta":{},"window":{"titleNView":false}},{"path":"/pages/login/pwd_login/index","meta":{},"window":{"titleNView":false}},{"path":"/pages/login/forget_password/index","meta":{},"window":{"titleNView":false}},{"path":"/pages/login/registration/index","meta":{},"window":{"titleNView":false}},{"path":"/pages/login/funds/index","meta":{},"window":{"titleNView":false}},{"path":"/pages/login/certification/index","meta":{},"window":{"titleNView":false}},{"path":"/pages/home/informationdetails/index","meta":{},"window":{"titleNView":false}},{"path":"/pages/capital/ChargeMoney","meta":{},"window":{"navigationBarTitleText":"充币","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F7FAFF"}},{"path":"/pages/capital/withdrawMoney","meta":{},"window":{"navigationBarTitleText":"提币","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F7FAFF"}},{"path":"/pages/capital/Transfer","meta":{},"window":{"navigationBarTitleText":"划转","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F7FAFF"}},{"path":"/pages/capital/accountDetails","meta":{},"window":{"titleNView":false}},{"path":"/pages/capital/transferAccounts","meta":{},"window":{"navigationBarTitleText":"转账","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F7FAFF"}},{"path":"/pages/user/userInfo","meta":{},"window":{"navigationBarTitleText":"个人信息","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/home/grabOrders","meta":{},"window":{"navigationBarTitleText":"参与乌拉诺斯的诺言","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/user/myTeam","meta":{},"window":{"navigationBarTitleText":"我的战队","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/user/SparkRecord","meta":{},"window":{"navigationBarTitleText":"能量守护","titleNView":false}},{"path":"/pages/user/HistoricalOrder","meta":{},"window":{"navigationBarTitleText":"历史订单","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/user/setUp","meta":{},"window":{"navigationBarTitleText":"设置","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/user/destroy","meta":{},"window":{"titleNView":false}},{"path":"/pages/user/reservationPool","meta":{},"window":{"titleNView":false}},{"path":"/pages/user/preOrderRecord","meta":{},"window":{"titleNView":false}},{"path":"/pages/user/childCimps/Approve","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/user/subscribeChild/Scheduling","meta":{},"window":{"navigationBarTitleText":"预存能量","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/user/subscribeChild/ExtractGs","meta":{},"window":{"navigationBarTitleText":"提取能量","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/server/childComps/LztTabs","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/server/childComps/serverfil","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/server/childComps/serverfnt","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/announcement","meta":{},"window":{"navigationBarTitleText":"消息","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/home/Information","meta":{},"window":{"navigationBarTitleText":"快捷资讯","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FAFCFF"}},{"path":"/pages/capital/list","meta":{},"window":{"navigationBarTitleText":"快捷资讯","enablePullDownRefresh":false}},{"path":"/pages/server/childComps/serverMsg","meta":{},"window":{"navigationBarTitleText":"消息","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
