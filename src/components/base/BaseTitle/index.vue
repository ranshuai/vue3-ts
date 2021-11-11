<template>
  <div class="title">
    <div class="A_title">
      <img
        src="@/assets/images/title/biaoTiLeft.png"
        class="A_title_img1"
      />
      <span class="A_title_font1"> {{ txt }} </span>
      <img
        src="@/assets/images/title/biaoTiRight.png"
        class="A_title_img1"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
      txt: {
        type: String,
        required: true
      },
    },
};
</script>

<style>
  .A_title{
    width: 100%;
    height: 88px;
    text-align: center;
  }
  .A_title_img1{
    width: 480px;
    height: 88px;
  }
  .A_title_font1{
    display: inline-block;
    height: 88px;
    line-height: 88px;
    padding: 0 100px;
    font-weight: bold;
    font-size: 45px;
    color: #52FFFF;
    background: url("../../../assets/images/title/biaoTiCenter.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -25px;
  }
  .A_title_img2{
    width: 380px;
    height: 88px;
  }
  .A_title_font2{
    display: inline-block;
    height: 88px;
    line-height: 88px;
    padding: 0 100px;
    font-weight: bold;
    font-size: 45px;
    color: #52FFFF;
    background: url("../../../assets/images/title/biaoTiCenter.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -25px;
  }
  .A_title_font{
    display: inline-block;
    height: 88px;
    line-height: 88px;
    padding: 0 100px;
    font-weight: bold;
    font-size: 45px;
    color: #52FFFF;
    background: url("../../../assets/images/title/biaoTiCenter.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
