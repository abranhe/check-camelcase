import { expectType } from 'tsd';
import checkCamelcase = require('.');

expectType<Boolean>(checkCamelcase('Lorem'));
