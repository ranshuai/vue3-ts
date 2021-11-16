interface dashboard {
  customBoxStyle: {};
  linkConfig: {};
  children: [];
  customBoxEchartsConfig:{},
  echartsType: ()=>{}
}

import httpConfig from '../httpConfig/inex'

const dashboardConfigList: {}[] = [
  {
    list:[
      {
        customBoxStyle: {
          width: (1014 / 1920) * 10 + 'rem',
          height: (586 / 1920) * 10 + 'rem',
        },
        childrenList:[
          {
            customBoxStyle: {
              width: (1014 / 1920) * 10 + 'rem',
              height: (136 / 1920) * 10 + 'rem',
            },
            childrenList:[
              {
                customBoxStyle: {
                  width: (327 / 1920) * 10 + 'rem',
                  height: (136 / 1920) * 10 + 'rem'
                },
                echartsType: 'TextBox',
                customBoxHttpConfig: {
                  apiUrl: httpConfig.api['indexKjywsyqd'],
                },
                customBoxEchartsConfig:{
                  unit: 'DDDS'
                }
              }
            ]
          }
        ],
      }
    ]
  }
];
const dashboardName = '合理用药监测指标';
export { dashboardConfigList, dashboardName };
