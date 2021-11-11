interface dashboard {
  customBoxStyle: {};
  linkConfig: {};
  children: [];
  customBoxEchartsConfig:{},
  echartsType: ()=>{}
}

const dashboardConfigList: {}[] = [
  {
    list:[
      {
        customBoxStyle: {
          width: (1014 / 1920) * 10 + 'rem',
          height: (586 / 1920) * 10 + 'rem',
        },
      }
    ]
  }
];
const dashboardName = '合理用药监测指标';
export { dashboardConfigList, dashboardName };
