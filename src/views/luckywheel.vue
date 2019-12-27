<template>
  <div class="container">
    <div class="loadingBox" v-if="this.showLoading">
      <van-loading />
    </div>
    <div class="wheelTime">活动日期：2020.01.01-2020.01.30</div>
    <div class="wheelContentBox">
      <div class="wheelContentBackground">
        <div class="wheel-main">
          <div class="wheel-pointer-box">
            <!-- 指定每次旋转到的奖品下标 -->
            <div
              class="wheel-pointer"
              @click="rotate_handle()"
              :style="{transform:rotate_angle_pointer,transition:rotate_transition_pointer}"
            ></div>
          </div>
          <div class="wheel-bg" :style="{transform:rotate_angle,transition:rotate_transition}">
            <div class="prize-list">
              <div class="prize-item" v-for="(item,index) in prize_list" :key="index">
                <div class="prize-type">{{item.name}}</div>
                <div class="prize-pic">
                  <img :src="item.image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="timesBox">
          剩余次数：{{this.lottery_ticket}}次
          <div class="button">按钮</div>
        </div>
      </div>
    </div>
    <div class="introduceBox">
      <div class="introduceItemBox">
        <div class="ticketCrown"></div>
        <div class="introduceTop">
          <div class="gitfLevel">
            <div class="gitfLevelNum">一</div>
            <div class="gitfLevelInfo">等奖</div>
          </div>
          <img
            class="introduceGiftImg"
            src="http://oss.tdianyi.com/front/SYzFTKmeA55jbKfjF24Jd3YiTCjBiKNH.png"
          />
        </div>
        <div class="introduceBottom">
          <div class="giftItemName">华为P30</div>
          <div class="giftLevelInfo">价值:3988元</div>
        </div>
      </div>
      <div class="introduceItemBox">
        <!-- <div class="ticketCrown"></div> -->
        <div class="introduceTop">
          <div class="gitfLevel">
            <div class="gitfLevelNum">二</div>
            <div class="gitfLevelInfo">等奖</div>
          </div>
          <img
            class="introduceGiftImg"
            src="http://oss.tdianyi.com/front/keyaBpXNHZWjT5mhtMs4hmP3Dnk8cwcn.png"
          />
        </div>
        <div class="introduceBottom">
          <div class="giftItemName">华为P30</div>
          <div class="giftLevelInfo">价值:3988元</div>
        </div>
      </div>
      <div class="introduceItemBox">
        <!-- <div class="ticketCrown"></div> -->
        <div class="introduceTop">
          <div class="gitfLevel">
            <div class="gitfLevelNum">三</div>
            <div class="gitfLevelInfo">等奖</div>
          </div>
          <img
            class="introduceGiftImg"
            src="http://oss.tdianyi.com/front/AYGQ4zi72KyQM8r4B3mYQW4j7ptNMhHn.png"
          />
        </div>
        <div class="introduceBottom">
          <div class="giftItemName">华为P30</div>
          <div class="giftLevelInfo">价值:3988元</div>
        </div>
      </div>
    </div>

    <div class="toast-mask" v-show="toast_control">
      <div class="toast">
        <div class="toast-content">
          <div class="toast-title">{{toast_nav}}</div>
          <img class="toast-gift-img" :src="toast_icon" />
          <div class="toast-infoMessage">
            <div class="toastMessage">{{toast_title}}</div>
          </div>
          <div class="acceptBtn" v-if="this.hasPrize" @click="getPrize">立即领取</div>
          <div class="acceptBtn" v-if="!this.hasPrize" @click="close_toast">我知道了</div>
        </div>
        <div class="toast-btn" @click="close_toast">
          <img
            class="toast-btn-img"
            src="http://oss.tdianyi.com/front/7t2GmTER8z4NJ7jj83Xs4BZdCxpQeyZy.png"
          />
        </div>
      </div>
    </div>
    <div class="toast-mask" v-show="chance_control">
      <div class="toast">
        <div class="toast-content">
          <div class="toast-title">好遗憾</div>
          <img
            class="toast-gift-img"
            src="http://oss.tdianyi.com/front/fYkbp4rXZzBppQKdXKpApt4Hj4iYZcx5.png"
          />
          <div class="toast-infoMessage">
            <div class="toastMessage">抽奖次数不足，集齐卡片后可再次抽奖哦！</div>
          </div>
          <div class="acceptBtn" @click="close_chance_toast">我知道了</div>
        </div>
        <div class="toast-btn" @click="close_chance_toast">
          <img
            class="toast-btn-img"
            src="http://oss.tdianyi.com/front/7t2GmTER8z4NJ7jj83Xs4BZdCxpQeyZy.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getActivityRafflePrize,
  getCityLoveResult,
  getActivityPrizeNum
} from "../api/api";
import Vue from "vue";
import { Loading, Toast } from "vant";
Vue.use(Loading);
Vue.use(Toast);

export default {
  data() {
    return {
      showLoading: false,
      winPrice: false, //中奖没，点击开始转查询数据立刻改变
      lottery_ticket: 0, //剩余抽奖次数
      prize_list: [], //奖品列表
      toast_control: false, //抽奖结果弹出框控制器
      chance_control: false, //机会用完了弹出控制器
      hasPrize: false, //是否中奖，跟着winPrice转完在改变，控制文案
      start_rotating_degree: 0, //初始旋转角度
      rotate_angle: 0, //将要旋转的角度
      start_rotating_degree_pointer: 0, //指针初始旋转角度
      rotate_angle_pointer: 0, //指针将要旋转的度数
      rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
      rotate_transition_pointer: "transform 12s ease-in-out", //初始化指针过度属性控制
      click_flag: true, //是否可以旋转抽奖，函数防抖
      index: 0 //转到的下标
    };
  },
  mounted() {
    this.getData();
    this.getNum();
  },
  computed: {
    toast_icon() {
      return this.hasPrize
        ? this.prize_list[this.index].image
        : "http://oss.tdianyi.com/front/5s3ZYyetkSmr5csdBeEQDSf4P3XbeWx2.png";
    },
    toast_nav() {
      return this.hasPrize ? "恭喜您" : "好遗憾";
    },
    toast_title() {
      return this.hasPrize
        ? "恭喜您，抽中" + this.prize_list[this.index].name
        : "好遗憾，你与奖品擦肩而过了";
    }
  },
  methods: {
    // 领取奖品
    getPrize () {
      console.log('123')
      window.location.href = process.env.VUE_APP_PRIZE
    },

    async getData() {
      //查询奖品列表
      let res = await getActivityRafflePrize();
      if (res.code == 200) {
        this.prize_list = res.data;
      }
    },
    getNum() {
      //查询剩余次数
      getActivityPrizeNum()
        .then(res => {
          if (res.code == 200 && res.data && res.data.luckyDrawNumber) {
            this.lottery_ticket = res.data.luckyDrawNumber;
          } else {
            Toast(res.message);
          }
        })
        .catch(err => {
          console.log(err);
          Toast("网络似乎不太通畅，请稍候再试");
        });
    },

    rotate_handle() {
      //查询转到哪里
      if (!this.click_flag) {
        return;
      } else if (this.lottery_ticket <= 0) {
        this.chance_control = true;
      } else {
        this.showLoading = true;
        let winIndex;
        getCityLoveResult()
          .then(res => {
            this.showLoading = false;
            if (res.code == 200) {
              if (res.data && res.data.win_id) {
                //有结果
                for (let i in this.prize_list) {
                  if (
                    (this.prize_list[i].activity_prize_id == res.data.win_id)
                  ) {
                    winIndex = Number(i);
                    console.log(winIndex)
                    if (this.prize_list[i].name.indexOf("谢谢参与") == -1) {
                      this.winPrice = true;
                    } else {
                      this.winPrice = false;
                    }
                    break;
                  }
                }
              } else {
                //不知道咋回事没有结果,例如抽到一个商品库存不足，直接给他转到谢谢参与
                for (let i in this.prize_list) {
                  if (this.prize_list[i].name.indexOf("谢谢参与") != -1) {
                    winIndex = Number(i);
                    this.winPrice = false;
                    break;
                  }
                }
              }
              this.index = winIndex; //指定每次旋转到的奖品下标
              this.rotating();
            } else {
              Toast(res.message);
            }
          })
          .catch(err => {
            console.log(err);
            this.showLoading = false;
            Toast("网络似乎不太通畅，请稍候再试");
          });
      }
    },
    //开始转了
    rotating() {
      var during_time = 5; // 默认为1s
      var result_index = this.index; // 最终要旋转到哪一块，对应prize_list的下标
      var result_angle = [0, 60, 120, 180, 240, 300]; //最终会旋转到下标的位置所需要的度数
      var rand_circle = 6; // 附加多转几圈，2-3
      this.click_flag = false; // 旋转结束前，不允许再次触发
      // 转动盘子
      var rotate_angle =
        this.start_rotating_degree +
        rand_circle * 360 +
        result_angle[result_index] -
        (this.start_rotating_degree % 360);
      this.start_rotating_degree = rotate_angle;
      this.rotate_angle = "rotate(" + rotate_angle + "deg)";
      // // //转动指针
      // this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
      // this.start_rotating_degree_pointer =360*rand_circle;
      this.getNum();
      var that = this;
      setTimeout(function() {
        // 旋转结束后，允许再次触发
        that.click_flag = true;
        // that.lottery_ticket = that.lottery_ticket - 1;
        that.game_over();
      }, during_time * 1000 + 1500); // 延时，保证转盘转完
    },
    //转完了
    game_over() {
      this.toast_control = true;
      this.hasPrize = this.winPrice;
    },
    //关闭弹窗
    close_toast() {
      this.toast_control = false;
    },
    //关闭机会用完了弹窗
    close_chance_toast() {
      this.chance_control = false;
    }
  }
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background: url("http://oss.tdianyi.com/front/mwp5FEs2EhymwQj2xcZKi2xSkCaRXzFP.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 1.15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loadingBox {
  width: 0.5rem;
  height: 0.5rem;
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 50%;
  margin-left: -0.25rem;
  margin-top: -0.25rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.04rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wheelTime {
  width: 100%;
  text-align: center;
  height: 0.3rem;
  font-size: 0.13rem;
  font-weight: bold;
  color: rgba(239, 209, 183, 1);
  line-height: 1;
}
.wheelContentBox {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wheelContentBackground {
  height: 4.25rem;
  width: 3.65rem;
  background: url("http://oss.tdianyi.com/front/cFafYZnMQne4FiSkCzwCHrCDm3hitCNS.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 0.15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.wheel-main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 2.95rem;
  height: 2.95rem;
  font-size: 16px;
  overflow: hidden;
  position: absolute;
  top: 0.3rem;
}
.wheel-bg {
  width: 100%;
  height: 100%;
  background: url("http://oss.tdianyi.com/front/MiKZneamAYX7EKtHSHdTxTamcPXrrpR5.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  transition: transform 3s ease;
}
.wheel-pointer-box {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  width: 1.352rem;
  height: 1.352rem;
}
.wheel-pointer {
  width: 100%;
  height: 100%;
  background: url("http://oss.tdianyi.com/front/STJr36Dp4DDBKaP6JhcTt3bGXKPBrFiz.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform-origin: center 60%;
}
.wheel-bg div {
  text-align: center;
}
.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
}
.prize-list .prize-item {
  height: 1.4rem;
  width: 0.8rem;
  position: absolute;
  bottom: 50%;
  left: 50%;
  margin-left: -0.4rem;
  transform-origin: center bottom;
}
.prize-list .prize-item:first-child {
  transform: rotate(0deg);
}
.prize-list .prize-item:nth-child(2) {
  transform: rotate(-60deg);
}
.prize-list .prize-item:nth-child(3) {
  transform: rotate(-120deg);
}
.prize-list .prize-item:nth-child(4) {
  transform: rotate(-180deg);
}
.prize-list .prize-item:nth-child(5) {
  transform: rotate(-240deg);
}
.prize-list .prize-item:nth-child(6) {
  transform: rotate(-300deg);
}
.prize-type {
  font-size: 16px;
  color: #ab3618;
}
.prize-pic img {
  width: auto;
  height: 0.475rem;
}
.timesBox {
  position: absolute;
  bottom: 0.27rem;
  width: 100%;
  height: 0.15rem;
  line-height: 1;
  text-align: center;
  font-size: 0.15rem;
  font-weight: bold;
  color: rgba(239, 209, 183, 1);
}
.button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: .4rem; */
  padding: 0 .1rem;
  border-radius: 4px;
  height: .2rem;
  background: #fff;
  right: .6rem;
}

.introduceBox {
  width: 3.575rem;
  height: 2.25rem;
  margin-bottom: 0.325rem;
  background: url("http://oss.tdianyi.com/front/YGGXNy75MwhrWda6nJFfd2emAGmPcM8e.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0.475rem 0.075rem 0.225rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.introduceItemBox {
  height: 1.475rem;
  width: 1.05rem;
  border: 0.01rem solid #ffe5b4;
  border-radius: 0.075rem;
  background: #fd8a8e;
  box-sizing: border-box;
  position: relative;
}
.ticketCrown {
  width: 0.3rem;
  height: 0.3rem;
  background: url("http://oss.tdianyi.com/front/ZQR7PGi8PHBNCbJAr68HHRB2k5h3aT3F.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  z-index: 1;
  left: -0.05rem;
  top: -0.18rem;
}
.introduceTop {
  height: 0.975rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}
.gitfLevel {
  position: absolute;
  right: 0.125rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 0.35rem;
  height: 0.35rem;
  background: #fe5b38;
  border-radius: 0.175rem;
  box-sizing: border-box;
  border: 0.02rem solid #ffe3b2;
}
.gitfLevelNum {
  line-height: 1.3;
  font-size: 0.1rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  text-align: center;
}
.gitfLevelInfo {
  line-height: 1;
  font-size: 0.1rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  text-align: center;
}
.introduceGiftImg {
  width: 0.7rem;
}
.introduceBottom {
  height: 0.5rem;
  width: 100%;
  padding-top: 0.05rem;
  box-sizing: border-box;
}
.giftItemName {
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 0.15rem;
  height: 0.175rem;
}
.giftLevelInfo {
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 0.125rem;
  height: 0.175rem;
}
.toast-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.toast {
  width: 3rem;
  height: 3.375rem;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.toast-content {
  width: 100%;
  height: 2.8rem;
  background: url("http://oss.tdianyi.com/front/FAxhf7cmf6fEzAxxkpACczn2XJmSWbyj.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0.12rem 0.2rem 0.2rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toast-title {
  width: 100%;
  text-align: center;
  font-size: 0.21rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 0.5rem;
}
.toast-gift-img {
  height: 0.75rem;
}
.toast-infoMessage {
  width: 2rem;
  height: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.toastMessage {
  width: 2.375rem;
  line-height: 1.2;
  text-align: center;
  font-size: 0.13;
  font-weight: bold;
  color: rgba(254, 110, 35, 1);
}
.acceptBtn {
  width: 2.375rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.18rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  background: url("http://oss.tdianyi.com/front/iQ3fxy2hX55D7pFJr6hJCJBT3y4cFf6f.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.toast-btn {
  width: 0.375rem;
  height: 0.375rem;
}
.toast-btn-img {
  width: 100%;
  height: 100%;
}
</style>

