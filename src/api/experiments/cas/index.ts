import Router from '@koa/router';
import { test } from './cas.ctrl';

const cas = new Router();

cas.get('/test', test);

export = cas;
