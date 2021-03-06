import 'core-js/stable';
import 'regenerator-runtime/runtime';
import gon from 'gon';

import app from './init';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

app(gon);
