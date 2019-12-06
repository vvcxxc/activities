<template>
  <div class="test">

          <div>00</div>
    <rotate3DCard trigger="hover" direction="row">
      <slot name="cz"></slot>
      <slot name="cf"></slot>
    </rotate3DCard>
  </div>
</template>
<script>

import { Loading, Dialog } from "vant";
import rotate3DCard from "./testCard"
export default {
  data() {
    return {
      message: {}
    };
  },
  components: {
      rotate3DCard
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  beforeDestroy() {
    // 组件销毁前
  }
};
</script>
<style scoped>
.test {
  width: 100vw;
  height: auto;
  min-height: 100vh;
  font-size: 16px;
}
</style>
