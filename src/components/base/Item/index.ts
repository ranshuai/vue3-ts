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
    console.log(opt)
    return h(resolveComponent(opt.echartsType),{
      opt: opt
    })
  }
}