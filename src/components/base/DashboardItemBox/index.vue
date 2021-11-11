<template>
  <div
    class="dashboard-item-box-wrapper"
    :style="{ width: customBoxStyle.width, height: customBoxStyle.height }"
  ></div>
</template>

<script lang="ts">
const props = {
  customBoxStyle: {
    type: Object,
    require: true,
  },
};
export default {
  props,
  setup(props: any) {
    console.log(props.customBoxStyle);
  },
};
</script>

<style></style>
