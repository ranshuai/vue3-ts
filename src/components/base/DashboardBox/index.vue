<template>
  <div
    class="dashboard-item-box-wrapper"
    :style="{
      width: DashboardBox.customBoxStyle.width,
      height: DashboardBox.customBoxStyle.height,
    }"
  >
    <ComponentBlock :opt="DashboardBox"> </ComponentBlock>
  </div>
</template>
<script lang="ts">
const props = {
  DashboardBox: {
    type: Object,
    require: true,
  },
};

export default {
  props,
  setup(props: any) {
  },
};
</script>

<style></style>
