/** 
 * 间接更新state的多个方法的对象，通过mutation
*/
// 引入变量
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESULT_USERINFO
} from './mutation-types'
// 引入异步交互
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout
} from '../api/index'

export default {
    // 异步获取地址
    async getAddress ({commit, state}) {
        // 1.发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash);
        // 2.提交一个mutation
        if (result.code === 0) {
            const address = result.data;
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    // 异步获取食品分类列表
    async getFoodCategorys ({commit, state}) {
        const result = await reqFoodCategorys();
        if(result.code === 0) {
            const categorys = result.data;
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },
    // 异步获取商家列表
    async getShops ({commit,state}) {
        const {longitude, latitude} = state;
        const result = await reqShops(longitude, latitude);
        if(result.code === 0) {
            const shops = result.data;
            commit(RECEIVE_SHOPS, {shops})
        }
    },
    // 同步保存用户信息
    recordUser ({commit}, userinfo) {
        commit(RECEIVE_USERINFO, {userinfo})
    },
    // 异步获取用户信息(在组件加载的时候就调用)
    async getUserinfo ({commit}) {
        const result = await reqUserInfo();
        if(result.code === 0) {
            const userinfo = result.data;
            commit(RECEIVE_USERINFO, userinfo)
        }
    },
    // 异步登出
    async getUserinfo ({commit}) {
        const result = await reqLogout();
        if(result.code === 0) {
            commit(RESULT_USERINFO)
        }
    },

}