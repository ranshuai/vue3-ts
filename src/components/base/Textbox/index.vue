<template>
  <div class="text-container text-default-bg">
    <div class="font-19 txt-center w-percentage-100">{{DATA.content.title}}</div>
    <div class="font-38 txt-center w-percentage-100 blue">
      <span>{{DATA.content.value}}</span><span class="font-24">{{ _customBoxEchartsConfig.unit }}</span>
      <span v-if="DATA.content.tb" v-imgArrow="DATA.content.tb[0]" ></span>
    </div>
  </div>
</template>

<script>
const props = {
  opt: {
    type: Object,
    default: function () {
      return {};
    },
  },
};
import { onMounted, inject, getCurrentInstance, reactive, toRefs ,ref} from 'vue';
export default {
  props,

  setup(props) {
    const { customBoxHttpConfig,customBoxEchartsConfig } = props.opt;
    const $httpService = inject('$httpService');
    const DATA = reactive({
      content:{}
    });
    const _customBoxEchartsConfig = reactive(customBoxEchartsConfig)
    // const instance = getCurrentInstance();
    // const $httpService = instance.appContext.app.config.globalProperties.$httpService
    // 请求
    function httpServiceFn() {
      return new Promise((resolve, reject) => {
        $httpService({
          url: customBoxHttpConfig.apiUrl,
          data: customBoxHttpConfig.data,
        }).then((res) => {
          if (res.success) {
            resolve(res.data);
          } else {
            reject(res.data);
          }
        });
      });
    }

    async function getData(config) {
      if (config.apiUrl) {
        DATA.content = await httpServiceFn();
      }
    }

    onMounted(async () => {
      getData(customBoxHttpConfig);
    });

    return {
      DATA,
      _customBoxEchartsConfig
    };
  },
};
</script>

<style lang="scss" scoped>
.text-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  .img {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }
}
</style>
