/** 
 * 直接更新state的多个方法的对象
*/
// 引入变量
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESULT_USERINFO
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS] (state, {address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state, {categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state, {shops}) {
        state.shops = shops
    },
    [RECEIVE_USERINFO] (state, {userinfo}) {
        state.userinfo = userinfo
    },
    [RESULT_USERINFO] (state) {
        state.userinfo = {}
    },
}