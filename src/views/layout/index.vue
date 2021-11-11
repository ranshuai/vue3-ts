<template>
  <div class="app-wrapper" :class="{'app-wrapper-big':showBgBig}">
    <app-main />
  </div>
</template>

<script lang="ts">
import { AppMain } from "./components";
export default {
  data (){
    return{
      showBgBig:false
    }
  },
  components:{
    AppMain
  }
}
</script>


<style lang="scss" scoped>
.app-wrapper {
  min-width: 1920px;
  width: 100%;
  background-image: url("../../assets/images/dashboard_bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100%;
  position: relative;
}
.app-wrapper-big {
  background-image: url("../../assets/images/dashboard_bg_big.jpg");
}
</style>