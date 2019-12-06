<style lang="stylus">
.card-3d {
  width: 200px;
  height: 300px;
  transition: all 0.2s;
  position: relative;
  perspective: 1500px;
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
    border-radius: 4px;
    border: 1px solid #e8eaec;

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
      height: 50%;
      background: blue;
    }

    .openCard {
      width: 100%;
      height: 50%;
      background: red;
    }
  }
}
</style>
<template>
  <div class="card-3d" @click="eve_cardres_click">
    <div class="card card-z" ref="cardz">
      <slot name="cz">
        <div class="defaultCard"></div>
      </slot>
    </div>
    <div :class="['card',direction=='row'?'card-f-y':'card-f-x']" ref="cardf">
      <slot name="cf">
        <div class="openCard"></div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    trigger: {
      //触发方式 hover click custom
      type: String,
      default: "click" //默认点击触发
    },
    value: {
      //正反面
      type: Boolean,
      default: true
    },
    direction: {
      //方向 row col
      type: String,
      default: "row"
    }
  },
  data() {
    return {
      surface: true
    };
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
      console.log("eve_cardres_click");
      //   if (this.trigger == "click") {
      this.fn_reserve_action(this.surface);
      this.surface = !this.surface;
      //   }
    }
  }
};
</script>