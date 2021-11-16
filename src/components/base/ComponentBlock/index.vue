<template>
  <div
    class="component-block-wrapper"
    :class="{
      vertical: opt.vertical,
      horizontal: opt.horizontal,
      spaceAround: opt.spaceAround,
      textDefaultBg: opt.customBoxStyle && opt.customBoxStyle.textDefaultBg,
      defaultBG: opt.customBoxStyle && opt.customBoxStyle.defaultBG,
      acDefaultBG: opt.customBoxStyle && opt.customBoxStyle.acDefaultBG,
      defaultBGBig: opt.customBoxStyle && opt.customBoxStyle.defaultBGBig,
      bzjcBG: opt.customBoxStyle && opt.customBoxStyle.bzjcBG,
      bzjcBGB: opt.customBoxStyle && opt.customBoxStyle.bzjcBGB,
      bzjcBGS: opt.customBoxStyle && opt.customBoxStyle.bzjcBGS,
      bjtpLang1: opt.customBoxStyle && opt.customBoxStyle.bjtpLang1,
      bjtpLang2: opt.customBoxStyle && opt.customBoxStyle.bjtpLang2,
      bjtpLang3: opt.customBoxStyle && opt.customBoxStyle.bjtpLang3,
      bjtpLang4: opt.customBoxStyle && opt.customBoxStyle.bjtpLang4,
      bjtpLang5: opt.customBoxStyle && opt.customBoxStyle.bjtpLang5,
      bjtpLang6: opt.customBoxStyle && opt.customBoxStyle.bjtpLang6,
      bjtpLang7: opt.customBoxStyle && opt.customBoxStyle.bjtpLang7,
      padding30: opt.customBoxStyle && opt.customBoxStyle.padding30,
      padding20: opt.customBoxStyle && opt.customBoxStyle.padding20,
    }"
    :style="{
      width: opt.customBoxStyle.width,
      height: opt.customBoxStyle.height
    }"
  >
    <div
      class="component-block-item"
      style="width: 100%; height: 100%"
      v-if="!hasChildren"
    >
      <Item :opt="opt"></Item>
    </div>
    <template v-else v-for="(item, i) in childrenList" :key="i">
      <ComponentBlock :opt="item"></ComponentBlock>
    </template>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
const props = {
  opt: {
    type: Object,
    default: function () {
      return {};
    },
  },
};
export default {
  name: 'ComponentBlock',
  props,
  setup(props: any) {
    const { customBoxStyle, childrenList } = props.opt as any;
    const hasChildren = computed(() => {
      let b = false;
      if (childrenList && childrenList.length > 0) {
        b = true;
      }
      return b;
    });

    return {
      hasChildren,
      childrenList
    };
  },
};
</script>

<style></style>
