/** 
 * 包含n个请求接口的函数
 * 函数的返回值：promise对象
*/
// 引入ajax
important ajax from "./ajax.js"
// [1、根据经纬度获取位置详情] /position/40.10038,116.36867
export const reqAddress = (geohash) => ajax(`/position/${geohash}`, {}, "GET");
// [2、获取食品分类列表] /index_category
export const reqFoodTypes = () => ajax('/index_category');
// [3、根据经纬度获取商铺列表] /shops
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,longitude},'GET');
// [4、根据经纬度和关键字搜索商铺列表]
// [5、获取一次性验证码]
// [6、用户名密码登陆]
// [7、发送短信验证码]
// [8、手机号验证码登陆]
// [9、根据会话获取用户信息]
// [10、用户登出]