const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const app = new Koa();

let home = new Router();
home.get('/test', async (ctx: any) => {
  // get可用ctx.query接受参数
  ctx.body = {
    success: true,
    echartsConfig: {
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
        },
      ],
    },
  };
});
home.post('/kjywsyqd', async (ctx: any) => {
  ctx.body = {
    success: true,
    data: {
      title: '抗菌药物使用强度',
      value: '1242.00',
      tb: [{ direction: 'down', color: '0' }],
    },
  };
});
let router = new Router();
router.use('/dashboard', home.routes(), home.allowedMethods());

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log('server is starting at port 3000');
});
