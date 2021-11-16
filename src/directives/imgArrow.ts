import type { Directive, App } from 'vue';

const imgArrowDirective: Directive = {
  mounted(el, binding) {
    const { direction, color } = binding.value;
    let jiantouTxt = {
      jiantou_hong_up: direction === 'up' && (color === 0 || color === '0'),
      jiantou_hong_down: direction === 'down' && (color === 0 || color === '0'),
      jiantou_heng_hong:
        direction === 'equal' && (color === 0 || color === '0'),
      jiantou_lv_up: direction === 'up' && (color === 1 || color === '1'),
      jiantou_lv_down: direction === 'down' && (color === 1 || color === '1'),
      jiantou_heng_lv: direction === 'equal' && (color === 1 || color === '1'),
      jiantou_huang_up: direction === 'up' && (color === 2 || color === '2'),
      jiantou_huang_down:
        direction === 'down' && (color === 2 || color === '2'),
      jiantou_heng_huang:
        direction === 'equal' && (color === 2 || color === '2'),
    };
    let newClass = '';
    for (let key in jiantouTxt) {
      if ((jiantouTxt as any)[key]) {
        newClass = key;
      }
    }
    el.setAttribute('class', `img ${newClass}`);
  },
  unmounted(el) {
    el?.instance?.close();
  },
};

export function setupImgArrowDirective(app: App) {
  app.directive('imgArrow', imgArrowDirective);
}
