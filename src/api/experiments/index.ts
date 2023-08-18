import Router from '@koa/router';
import Cas from './cas';

const experiments = new Router();

experiments.use('/cas', Cas.routes());

export = experiments;
