<style lang="stylus">
.card-3d {
  width: 2.575rem;
  height: 3.68rem;
  transition: all 0.2s;
  position: relative;
  perspective: 1500px; // 视距
  background-color: transparent;
  point: cursor;

  .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 2s;
    backface-visibility: hidden;
    border-radius: 0.08rem;
    overflow: hidden;

    &:hover {
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
      border-color: #eee;
    }

    &.card-z {
      background-color: #fff;
    }

    &.card-f-y {
      transform: rotateY(-180deg);
    }

    &.card-f-x {
      transform: rotateX(-180deg);
    }

    .defaultCard {
      width: 100%;
      height: 100%;
      background: url('http://oss.tdianyi.com/front/7yPzJ6miZyzYE4HM474dtPS6srxekHPc.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;

      .cardWordBox {
        height: 2.8rem;
        width: 100%;
        padding-top: 0.41rem;
        box-sizing: border-box;

        .cardKeyWord {
          height: 1.475rem;
          width: 100%;
          margin-bottom: 0.235rem;
          display: flex;
          align-items: center;
          justify-content: center;

          .theWords {
            width: 1.475rem;
            height: 1.475rem;
          }
        }

        .cardInfoBox {
          width: 100%;

          .cardInfo {
            width: 100%;
            text-align: center;
            color: #fff;
            line-height: 1.2;
            font-size: 0.14rem;
            font-family: PingFang;
          }
        }
      }

      .cardBtnBox {
        height: 0.88rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .acceptBtn {
          width: 1.5rem;
          height: 0.335rem;
          background: rgba(245, 71, 4, 1);
          border-radius: 0.1675rem;
          color: #fff;
          text-align: center;
          line-height: 0.335rem;
        }
      }
    }

    .openCard {
      width: 100%;
      height: 100%;
      background: url('http://oss.tdianyi.com/front/kQTGSNRiepYzFQB6AiZcx7dRatWF6QYc.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;

      .ticketBox {
        height: 2.8rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .ticketTitle {
          margin-top: 0.35rem;
          height: 0.34rem;
          width: 100%;
          font-size: 0.2rem;
          color: #fff;
          line-height: 1;
          text-align: center;
        }

        .ticketContentBox {
          width: 1.93rem;
          height: 1.65rem;
          background: rgba(255, 255, 255, 1);
          border-radius: 0.05rem;
          margin-bottom: 0.125rem;

          .ticketImageBox {
            height: 1.155rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .physical {
              width: 1.739rem;
              height: 0.975rem;
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

            .ticketImg {
              width: 1.275rem;
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

          .ticketStoreMsgBox {
            height: 0.495rem;
            width: 100%;
            padding: 0 0.1654rem;
            box-sizing: border-box;

            .storeName {
              height: 0.174rem;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 0.1rem;
              font-family: PingFang;
              color: rgba(94, 50, 28, 1);
            }

            .storeAddress {
              height: 0.23rem;
              width: 100%;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
              font-size: 0.1rem;
              line-height: 1.2;
              font-family: PingFang;
              color: rgba(153, 153, 153, 1);
            }
          }
        }

        .ticketMsg {
          width: 100%;
          text-align: center;
          font-size: 0.14rem;
          line-height: 1;
          font-family: PingFang SC;
          color: rgba(253, 253, 248, 1);
        }

        .noTicketBox {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .notWinning {
            width: 0.9rem;
            height: 0.835rem;
            background: url('http://oss.tdianyi.com/front/5s3ZYyetkSmr5csdBeEQDSf4P3XbeWx2.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-bottom: 0.25rem;
          }

          .finish {
            width: 0.9rem;
            height: 0.835rem;
            background: url('http://oss.tdianyi.com/front/fYkbp4rXZzBppQKdXKpApt4Hj4iYZcx5.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-bottom: 0.25rem;
          }

          .pity {
            width: 100%;
            color: #fff;
            line-height: 1;
            text-align: center;
            font-size: 0.2rem;
            height: 0.275rem;
          }

          .pityMsg {
            width: 100%;
            color: #fff;
            line-height: 1;
            text-align: center;
            font-size: 0.14rem;
            height: 0.18rem;
          }
        }
      }

      .collectBtnBox {
        width: 100%;
        height: 0.335rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .collectBtn {
          width: 1.5rem;
          height: 0.335rem;
          line-height: 0.335rem;
          text-align: center;
          font-size: 0.15rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(255, 235, 215, 1);
          background: rgba(245, 71, 4, 1);
          border-radius: 0.1675rem;
        }
      }
    }
  }
}
</style>
<template>
  <div class="card-3d">
    <div class="card card-z" ref="cardz">
      <div class="defaultCard">
        <div class="cardWordBox">
          <div class="cardKeyWord">
            <img
              class="theWords"
              src="http://oss.tdianyi.com/front/Z7DdRBTpX7ETwnzsFkbQ8kPyEDjQZHdp.png"
            />
            <!-- <img class="words" src="http://oss.tdianyi.com/front/KASzpzRF3Xjjy34fnjjT3kJaE4EkRziB.png" /> -->
            <!-- <img class="words" src="http://oss.tdianyi.com/front/xetnhGRjC6FCPfc353m2pYrQAyStGQjn.png" /> -->
            <!-- <img class="words" src="http://oss.tdianyi.com/front/54sJNyaTeeG3djkXjw6cpkywShDaX5cK.png" /> -->
          </div>
          <div class="cardInfoBox">
            <div class="cardInfo">恭喜您获得“小”字卡一张，</div>
            <div class="cardInfo">收集卡片可兑换豪礼哦！</div>
          </div>
        </div>
        <div class="cardBtnBox">
          <div class="acceptBtn" @click="eve_cardres_click">立即翻开</div>
        </div>
      </div>
    </div>
    <div :class="['card',direction=='row'?'card-f-y':'card-f-x']" ref="cardf">
      <div class="openCard">
        <!-- 实物奖品 -->
        <div class="ticketBox">
          <div class="ticketTitle">一份慕斯蛋糕</div>
          <div class="ticketContentBox">
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
          <div class="ticketMsg">可到店使用，免费兑换商品一份！</div>
           <!-- <div class="ticketMsg">前往指定地址，进行兑换领取！</div> -->
        </div>
        <!-- 代金券 -->
        <!-- <div class="ticketBox">
          <div class="ticketTitle">100元代金券</div>
          <div class="ticketContentBox">
            <div class="ticketImageBox">
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
            <div class="ticketStoreMsgBox">
              <div class="storeName">领取地址：元气寿司店元气寿司店元气寿司店</div>
              <div class="storeAddress">店铺地址：广东省广州市海珠区创意产业园广东省广州市海珠区创意产业园</div>
            </div>
          </div>
          <div class="ticketMsg">到店使用，扫码支付可进行抵扣！</div>
        </div>-->
        <!-- 没中奖 -->
        <!-- <div class="ticketBox">
          <div class="noTicketBox">
            <div class="notWinning"></div>
            <div class="pity">好可惜</div>
            <div class="pityMsg">与奖品擦肩而过了</div>
          </div>
        </div>-->
        <!-- 没机会了 -->
        <!-- <div class="ticketBox">
          <div class="noTicketBox">
            <div class="finish"></div>
            <div class="pityMsg">今天集卡次数已达上限</div>
            <div class="pityMsg">明天要再接再厉哦！</div>
          </div>
        </div>-->
        <div class="collectBtnBox">
          <div class="collectBtn" @click="this._props.closeContent">立即收下</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    trigger: {
      type: String,
      default: "click" //默认点击触发
    },
    direction: {
      //方向 row col
      type: String,
      default: "row"
    },
    closeContent: {
      type: Function
    },
    testData: {
      type: Object
    }
  },
  data() {
    return {
      surface: true
    };
  },
  created() {
    console.log("_props", this._props.testData);
  },
  methods: {
    fn_reserve_action(bool) {
      var arr =
        this.direction == "row"
          ? ["rotateY(180deg)", "rotateY(0deg)"]
          : ["rotateX(-180deg)", "rotateX(0deg)"];
      this.$refs.cardz.style.transform = bool ? arr[0] : arr[1];
      this.$refs.cardf.style.transform = !bool ? arr[0] : arr[1];
    },
    eve_cardres_click() {
      if (this.surface) {
        this.fn_reserve_action(this.surface);
        this.surface = !this.surface;
      } else {
        console.log("翻过了");
      }
    }
  }
};
</script>