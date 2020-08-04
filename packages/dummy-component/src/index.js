import { define } from 'hybrids';
import { DummyCounter } from './dummy';

if (process.env.NODE_ENV !== 'production') module.hot.accept();

define('simple-counter', DummyCounter);
