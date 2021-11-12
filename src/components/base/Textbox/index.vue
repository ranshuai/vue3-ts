<template>
  <div class="text-container">{{ opt }}</div>
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
export default {
  props,
  // setup(props) {
  //   // console.log(props);
  // },
};
</script>

<style></style>
