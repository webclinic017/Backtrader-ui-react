import { init } from '@rematch/core';
import { register } from './register';
import { login } from './login';
import { forgot } from './forgot';
import { reset } from './reset';
import { user } from './user';
const models = { register ,login,forgot,reset,user};

const store = init({ models });

export default store;
