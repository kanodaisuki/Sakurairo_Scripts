import { snowFall } from './yuki'
const amount = _iro.effect.amount

/* 调用及控制方法 */
var snow = new snowFall({ maxFlake: amount == 'half' ? 250 : 500 });
snow.start();