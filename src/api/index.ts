import Router from '@koa/router';
import experiments from './experiments';

const api = new Router();

api.use('/experiments', experiments.routes());

export = api;
