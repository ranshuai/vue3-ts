<template>
  <div class="content">
    <!-- title -->
    <div class="title-img-wrapper">
      <BaseTitle :txt="dashboardName"></BaseTitle>
    </div>
    <!-- content -->
    <div v-for="(_item, _i) in dashboardConfigList" :key="_i">
      <div class="dashboard-row-box-wrapper">
        <DashboardItemBox
          v-for="(item, i) in _item.list"
          :key="i + _i"
          :customBoxStyle="item.customBoxStyle"
        >
        </DashboardItemBox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { dashboardName, dashboardConfigList } from './dashboardConfig';
export default {
  // _component: () =>
  //   import('@/views/dashboard/heLiYongYaoJianCeZhiBiao/index.vue'),
  data() {
    return {
      dashboardName,
      dashboardConfigList,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  .title-img-wrapper {
    height: 88px;
    width: 100%;
  }
  .dashboard-row-box-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 25px 0;
    flex-wrap: wrap;
    padding: 0 26px;
  }
}
</style>
