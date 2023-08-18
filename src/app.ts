import dotenv from 'dotenv';
import Koa from 'koa';
import Router from '@koa/router';
import koaBody from 'koa-body';

import Api from './api';

dotenv.config();
const { PORT: port } = process.env;

const app = new Koa();
const router = new Router();

app.use(koaBody());

router.use('/api', Api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`devbunker server is listening to port ${port}`);
});
