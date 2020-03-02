<template>
  <!--首页外卖-->
  <div class="on">
    <section class="msite">
      <!--首页头部-->
      <header-top :titleVal="address.name">
        <router-link to="/search" class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
        <router-link :to="userinfo._id ? '/userinfo':'/login'" class="header_login" slot="right" @click="$router.push('/login')">
          <span class="header_login_text" v-if="!userinfo._id">
            登录|注册
          </span>
          <span class="header_login_text" v-else>
            <i class="iconfont icon-person"></i>
          </span>
          
        </router-link>
      </header-top>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <!-- slides -->
            <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
              <a
                v-for="category in categorys"
                :key="category.id"
                href="javascript:"
                class="link_to_food"
              >
                <div class="food_container">
                  <img :src="baseImagesURL + category.image_url" />
                </div>
                <span>{{category.title}}</span>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" alt v-else />
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>

        <shop-list></shop-list>
      </div>
    </section>
  </div>
</template>
<script>
// 组件中引入swiper
import Swiper from 'swiper' 
import 'swiper/css/swiper.min.css';

// 引入头部组件
import HeaderTop from "../../components/HeaderTop/HeaderTop";
// 引入附近商家组件
import ShopList from "../../components/ShopList/ShopList";

/**
 * 读取vuex数据状态
 * 1.读取
 * 2.写入
 * */

import { mapState } from "vuex";
export default {
  components: {
    HeaderTop,
    ShopList
  },
  data() {
    return {
      baseImagesURL: "https://fuss10.elemecdn.com"
    };
  },
  computed: {
    ...mapState(["address", "categorys", "userinfo"]),
    /**
     * 根据categorys一维数组生成二维数组
     */
    categorysArr() {
      const { categorys } = this;
      // 准备空的二维数组
      const arr = [];
      // 准备一个小数组（最大长度为8）
      let minArr = [];
      categorys.forEach(c => {
        // 如果当前小数组已经满了,创建一个新的
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果minArr是空的,将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类保存到小数组中
        minArr.push(c);
      });
      return arr;
    }
  },
  mounted() {
    // actions食品分类
    this.$store.dispatch("getFoodCategorys");
    // 经纬度获取商铺列表
    this.$store.dispatch("getShops");
  },
  watch: {
    categorys(value) {
      // 界面更新就立即创建Swiper对象
      this.$nextTick(() => { // 一旦完成界面更新，立即调用（此条语句要写在数据更新之后）
      // 创建一个Swiper实例对象，来实现轮播
        new Swiper(".swiper-container", {
          loop: true, // 循环轮播
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>
<style lang="stylus" >
@import '../../assets/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }
}

.msite_shop_list {
  top-border-1px(#e4e4e4);
  margin-top: 10px;
  background: #fff;

  .shop_header {
    padding: 10px 10px 0;

    .shop_icon {
      margin-left: 5px;
      color: #999;
    }

    .shop_header_title {
      color: #999;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>