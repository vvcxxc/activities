<template>
  <div class="collectCard">
    <div class="rulesShowButton"></div>
    <div class="cardMask" v-if="cardShow">
      <div class="cardContent">
        <!-- 查到的后端数据testData传给子组件 -->
        <rotate3DCard
          trigger="click"
          direction="row"
          v-bind:closeContent="this.closeContent"
          v-bind:data="this.testData"
        />
      </div>
    </div>

    <div class="collectWordsBox">
      <div class="collectWordsTitle">
        <div class="cornLeft"></div>我收集的卡片详情
        <div class="cornRight"></div>
      </div>
      <div class="collectWordsContent">
        <!-- 小 :每种卡有（有收集，未收集）两种样式，有收集的右上角有收集张数小圆点-->
        <div class="wordItem">
          <img
            class="words"
            src="http://oss.tdianyi.com/front/Z7DdRBTpX7ETwnzsFkbQ8kPyEDjQZHdp.png"
          />
          <div class="smallNumIcon">1</div>
        </div>
        <!-- <div class="noWordItem">
          <img
            class="words"
            src="http://oss.tdianyi.com/front/KiQEBEfRWXRcRMcRxN45TjSNibrbbF6z.png"
          />
        </div>-->
        <!-- 熊 -->
        <!-- <div class="wordItem">
          <img
            class="words"
            src="http://oss.tdianyi.com/front/KASzpzRF3Xjjy34fnjjT3kJaE4EkRziB.png"
          />
          <div class="smallNumIcon">1</div>
        </div>-->
        <div class="noWordItem">
          <img
            class="words"
            src="http://oss.tdianyi.com/front/yFDnkyCYDebb7BHw3CrmHBwxbaCh8TJD.png"
          />
        </div>
        <!-- 敬 -->
        <!-- <div class="wordItem">
          <img
            class="words"
            src="http://oss.tdianyi.com/front/xetnhGRjC6FCPfc353m2pYrQAyStGQjn.png"
          />
          <div class="smallNumIcon">1</div>
        </div>-->
        <div class="noWordItem">
          <img
            class="words"
            src="http://oss.tdianyi.com/front/5KFwWtYk63bktEbf7W5hAyPRW6Qp6ayk.png"
          />
        </div>
        <!-- 礼 -->
        <!-- <div class="wordItem">
          <img
            class="words"
            src="http://oss.tdianyi.com/front/54sJNyaTeeG3djkXjw6cpkywShDaX5cK.png"
          />
          <div class="smallNumIcon">1</div>
        </div>-->
        <div class="noWordItem">
          <img
            class="words"
            src="http://oss.tdianyi.com/front/dZSkeaRZcNWJZseQdNhFhWSpWMmteci6.png"
          />
        </div>
      </div>
    </div>
    <div class="missionBox">
      <div class="missionItem">
        <div class="missionItemMsg">
          <div class="missionTitle">您已获得1份奖品</div>
          <div class="missionInfo">首次获得每张卡片即可领取红包一份</div>
        </div>
        <div class="goToCheck">前往查看</div>
      </div>
      <div class="missionItem">
        <div class="missionItemMsg">
          <div class="missionTitle">抽取终极大奖</div>
          <div class="missionInfo">收集“小熊敬礼”4个字(3/4)</div>
        </div>
        <div class="goToFinish">去完成</div>
      </div>
    </div>
    <div class="jackpotBox">
      <div class="changeJackpotBox">
        <div class="changeJackpotBtn">换一批</div>
      </div>
      <div class="changeJackpotContent">
        <div class="changeJackpotItemBox">
          <!-- 111111111111111? -->
          <div class="ticketContentBox">
            <div class="ticketCrown"></div>
            <div class="ticketImageBox">
              <div class="physical">
                <img
                  class="physicalImg"
                  src="http://oss.tdianyi.com/front/2R4XWYYRSyzGEayknYQd8FfEXtwQPtRy.png"
                />
                <div class="physicalMask">
                  <div class="maskName">华为p30</div>
                  <div class="maskPrice">价值3000元</div>
                </div>
              </div>
            </div>
            <div class="ticketStoreMsgBox">
              <div class="storeName">领取地址：元气寿司店元气寿司店元气寿司店</div>
              <div class="storeAddress">店铺地址：广东省广州市海珠区创意产业园广东省广州市海珠区创意产业园</div>
            </div>
          </div>
          <!-- 111111111111111? -->
        </div>
        <div class="changeJackpotItemBox">
          <!-- 111111111111111? -->
          <div class="ticketContentBox">
            <div class="ticketCrown"></div>
            <div class="ticketImageBox">
              <div class="physical">
                <img
                  class="physicalImg"
                  src="http://oss.tdianyi.com/front/2R4XWYYRSyzGEayknYQd8FfEXtwQPtRy.png"
                />
                <div class="physicalMask">
                  <div class="maskName">华为p30</div>
                  <div class="maskPrice">价值3000元</div>
                </div>
              </div>
            </div>
            <div class="ticketStoreMsgBox">
              <div class="storeName">领取地址：元气寿司店元气寿司店元气寿司店</div>
              <div class="storeAddress">店铺地址：广东省广州市海珠区创意产业园广东省广州市海珠区创意产业园</div>
            </div>
          </div>
          <!-- 111111111111111? -->
        </div>
        <div class="changeJackpotItemBox">
          <!-- 111111111111111? -->
          <div class="ticketContentBox">
            <div class="ticketCrown"></div>
            <div class="ticketImageBox">
              <div class="physical">
                <img
                  class="physicalImg"
                  src="http://oss.tdianyi.com/front/2R4XWYYRSyzGEayknYQd8FfEXtwQPtRy.png"
                />
                <div class="physicalMask">
                  <div class="maskName">华为p30</div>
                  <div class="maskPrice">价值3000元</div>
                </div>
              </div>
            </div>
            <div class="ticketStoreMsgBox">
              <div class="storeName">领取地址：元气寿司店元气寿司店元气寿司店</div>
              <div class="storeAddress">店铺地址：广东省广州市海珠区创意产业园广东省广州市海珠区创意产业园</div>
            </div>
          </div>
          <!-- 111111111111111? -->
        </div>
        <div class="changeJackpotItemBox">
          <!-- 111111111111111? -->
          <div class="ticketContentBox">
            <div class="ticketCrown"></div>
            <div class="ticketImageBox">
              <div class="ticketBackground">
                <div class="ticketImg">
                  <div class="realContent">
                    <div class="priceBox">
                      <div class="priceIcon">￥</div>
                      <div class="priceNum">50.00</div>
                    </div>
                    <div class="totalBox">满100可用</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ticketStoreMsgBox">
              <div class="storeName">领取地址：元气寿司店元气寿司店元气寿司店</div>
              <div class="storeAddress">店铺地址：广东省广州市海珠区创意产业园广东省广州市海珠区创意产业园</div>
            </div>
          </div>
          <!-- 111111111111111? -->
        </div>
      </div>
    </div>
    <div class="bottomRules">
      <div class="rulesItem">抽奖规则1：每次获得卡片均有机会获得合作商家提供优惠券一张！</div>
      <div class="rulesItem">抽奖规则2：集齐所有卡片即有机会抽取终极大礼，收获华为P30一台！</div>
    </div>
  </div>
</template>
<script>
import { Loading, Dialog } from "vant";
import rotate3DCard from "./testCard";
export default {
  data() {
    return {
      cardShow: true,
      // cardShow: false,
      message: {},
      testData: { name: "小", ticket: "444444测试" }
    };
  },
  components: {
    rotate3DCard
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    closeContent() {
      this.cardShow = false;
    }
  },
  beforeDestroy() {
    // 组件销毁前
  }
};
</script>
<style scoped  lang="stylus">
.collectCard {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  font-size: 16px;
  background: url('http://oss.tdianyi.com/front/XfPiwzAmCnYXej676z8dxjAGJFtXdQkT.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 3.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .rulesShowButton {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    z-index: 2;
    right: 0;
    top: 0;
  }

  .cardMask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);

    .cardContent {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .collectWordsBox {
    width: 3.5rem;
    height: 1.8rem;
    background: url('http://oss.tdianyi.com/front/8rf75ZFrYZF3bBiCfxey4QC7jEZ8NtGD.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0.15rem;
    margin-bottom: 0.2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .collectWordsTitle {
      width: 100%;
      height: 0.16rem;
      font-size: 0.16rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      line-height: 1;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(253, 253, 248, 1);

      .cornLeft {
        width: 0;
        height: 0;
        border-top: 0.075rem solid transparent;
        border-bottom: 0.075rem solid transparent;
        border-left: 0.13rem solid rgba(253, 253, 248, 1);
        border-right: 0.13rem solid transparent;
      }

      .cornRight {
        width: 0;
        height: 0;
        border-top: 0.075rem solid transparent;
        border-bottom: 0.075rem solid transparent;
        border-left: 0.13rem solid transparent;
        border-right: 0.13rem solid rgba(253, 253, 248, 1);
      }
    }

    .collectWordsContent {
      width: 100%;
      height: 1.1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      .wordItem {
        width: 0.775rem;
        height: 1.1rem;
        background: url('http://oss.tdianyi.com/front/Xs3XzDXJpAbJkiJKRtYpMXAb2N3wmYTH.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .words {
          width: 0.575rem;
          height: 0.575rem;
        }

        .smallNumIcon {
          position: absolute;
          right: 0;
          top: -0.1rem;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 0.2rem;
          text-align: center;
          border: 0.01rem solid #fff;
          border-radius: 0.1rem;
          background: #f44604;
          color: #fff;
          font-size: 0.1rem;
        }
      }

      .noWordItem {
        width: 0.775rem;
        height: 1.1rem;
        background: #fe6e23;
        border: 2px solid rgba(225, 50, 23, 1);
        border-radius: 0.075rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .words {
          width: 0.575rem;
          height: 0.575rem;
        }
      }
    }
  }

  .missionBox {
    width: 3.585rem;
    height: 2.675rem;
    background: url('http://oss.tdianyi.com/front/G553MYZWwHXQHbahnd6Nr3stDz5aFEYn.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0.48rem 0.16rem 0.15rem 0.14rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2rem;

    .missionItem {
      width: 3.395rem;
      height: 0.985rem;
      background: url('http://oss.tdianyi.com/front/hQxpSeDc6saRzjc23FX78mAy87aiDxAP.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 0.3rem 0.2rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      .missionItemMsg {
        height: 0.35rem;

        .missionTitle {
          height: 0.22rem;
          font-size: 0.16rem;
          color: rgba(200, 157, 115, 1);
          line-height: 1;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(94, 50, 28, 1);
        }

        .missionInfo {
          height: 0.13rem;
          font-size: 0.13rem;
          color: rgba(200, 157, 115, 1);
          line-height: 1;
        }
      }

      .goToCheck {
        width: 0.775rem;
        height: 0.295rem;
        line-height: 0.3rem;
        font-size: 0.13rem;
        text-align: center;
        color: rgba(254, 110, 35, 1);
        background: #fff;
        border: 0.01rem solid rgba(254, 110, 35, 1);
        box-sizing: border-box;
        border-radius: 0.1475rem;
      }

      .goToFinish {
        width: 0.775rem;
        height: 0.295rem;
        line-height: 0.3rem;
        font-size: 0.13rem;
        text-align: center;
        color: #fff;
        background: rgba(254, 110, 35, 1);
        border-radius: 0.1475rem;
      }
    }
  }

  .jackpotBox {
    width: 3.585rem;
    height: 3.585rem;
    background: url('http://oss.tdianyi.com/front/ti4Te8hij4MecrrcraARXP2mSYN4aKYm.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0.25rem 0.13rem 0.13rem 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.1rem;

    .changeJackpotBox {
      width: 100%;
      height: 0.275rem;

      .changeJackpotBtn {
        width: 0.64rem;
        height: 0.25rem;
        line-height: 0.25rem;
        border-radius: 0.125rem;
        box-sizing: border-box;
        text-align: center;
        border: 0.01rem solid rgba(236, 68, 4, 1);
        background: rgba(254, 110, 35, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 0.13rem;
        float: right;
      }
    }

    .changeJackpotContent {
      width: 100%;
      height: 3rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .changeJackpotItemBox {
        flex: 50%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        .ticketContentBox {
          width: 1.6rem;
          height: 1.385rem;
          background: rgba(255, 255, 255, 1);
          border-radius: 0.05rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          position: relative;

          .ticketCrown {
            width: 0.3rem;
            height: 0.3rem;
            background: url('http://oss.tdianyi.com/front/ZQR7PGi8PHBNCbJAr68HHRB2k5h3aT3F.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            position: absolute;
            z-index: 1;
            left: -0.05rem;
            top: -0.15rem;
          }

          .ticketImageBox {
            height: 0.875rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.09rem 0.09rem 0;

            .physical {
              width: 1.435rem;
              height: 0.795rem;
              border-radius: 0.04rem;
              position: relative;
              overflow: hidden;

              .physicalImg {
                width: 100%;
                height: 100%;
              }

              .physicalMask {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
                padding-left: 0.08rem;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;

                .maskName {
                  font-size: 0.1rem;
                  color: #fff;
                  height: 0.18rem;
                }

                .maskPrice {
                  font-size: 0.1rem;
                  color: #fff;
                  height: 0.18rem;
                }
              }
            }

            .ticketBackground {
              width: 100%;
              height: 100%;
              background: #ffe1d7;
              border-radius: 0.04rem;
              display: flex;
              align-items: center;
              justify-content: center;

              .ticketImg {
                width: 1.125rem;
                height: 0.65rem;
                background: url('http://oss.tdianyi.com/front/XaB6RcSMApdCG6TehEERANCHhfHeTmB8.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;

                .realContent {
                  width: 0.95rem;
                  height: 0.65rem;
                  float: left;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;

                  .priceBox {
                    height: 0.25rem;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: flex-end;

                    .priceIcon {
                      height: 0.12rem;
                      width: 0.1rem;
                      line-height: 1;
                      font-size: 0.1rem;
                      color: #fff;
                    }

                    .priceNum {
                      height: 0.25rem;
                      line-height: 1;
                      font-size: 0.25rem;
                      color: #fff;
                      font-weight: bolder;
                    }
                  }

                  .totalBox {
                    height: 0.1rem;
                    width: 100%;
                    color: #fff;
                    font-size: 0.1rem;
                    text-align: center;
                  }
                }
              }
            }
          }

          .ticketStoreMsgBox {
            height: 0.5rem;
            width: 100%;
            padding: 0.07rem 0.09rem 0;
            box-sizing: border-box;

            .storeName {
              height: 0.15rem;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 0.1rem;
              font-family: PingFang;
              color: rgba(94, 50, 28, 1);
            }

            .storeAddress {
              height: 0.2rem;
              width: 100%;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
              font-size: 0.09rem;
              line-height: 1.2;
              font-family: PingFang;
              color: rgba(153, 153, 153, 1);
            }
          }
        }
      }
    }
  }

  .bottomRules {
    width: 100%;
    height: auto;
    padding: 0 0.285rem 0.25rem;

    .rulesItem {
      line-height: 1.2;
      font-size: 0.135rem;
      color: #FFFFFF;
    }
  }
}
</style>
