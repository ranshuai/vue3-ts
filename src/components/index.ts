
import type { App } from 'vue';
import * as components from './base/index' 

function isValKey(key:string | number | symbol ,object:object): key is keyof typeof object{
  return key in object 
}

export function setupGlobComponents (app: App<Element>){
  Object.keys(components).forEach(key => {
    if(isValKey(key,components)){
      app.component(key, components[key])
    }
  })
}