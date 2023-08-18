import Koa from 'koa';

const test = async (ctx: Koa.Context) => {
  ctx.body = 'test';
};

export { test };
