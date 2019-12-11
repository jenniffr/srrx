let Koa = require('koa');
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

router.get('/',(ctx,next) => {

    ctx.body = '服务器返回的数据';
});

let data = require('./data/data.json');

//接口
router.get('/searchSings',(ctx,next) => {   
    let req = ctx.query.req;
    console.log('获取请求参数：', req);
    let singInfo = data;
    ctx.body = singInfo;
});


app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen('8080', () => {
    console.log('服务器启动成功');
    console.log('服务器地址: http://localhost:8080');
})