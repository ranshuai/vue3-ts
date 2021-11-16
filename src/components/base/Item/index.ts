import { h ,resolveComponent} from 'vue'
export default {
  functional: true,
  props: {
    opt: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  
  render (context:any) {
    const { opt } = context
    if(opt.echartsType){
      return h(resolveComponent(opt.echartsType),{
        opt: opt
      })
    }else{
      return h('div',[
        '叶子节点请配置组件类型'
      ])
    }
   
  }
}