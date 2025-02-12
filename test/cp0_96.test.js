const gv = require('../utils/initGv')();
const { main, swap4, swap2, hexnum, stringReverse, init } = gv.utils;
/*
    setData('G_$cc', cp0[0]);
    setData('G_$ia', cp0[1]);
    setData('G_$ga', cp0[2]);
    setData('G_$_7', cp0[3]);
    setData('G_$_3', cp0[4]);
    setData('G_$jY', cp0[5]);
    setData('G_$ad', cp0[6]);
    setData('G_$bJ', cp0[7]);
    setData('G_$eh', cp0[8]);
    setData('G_$bv', cp0[9]);
    setData('G_$bO', cp0[10]);
    setData('G_$_x', cp0[11]);
    setData('G_$dL', cp0[12]);
    setData('G_$bn', cp0[13]);
*/

const valueMap = {
  'visibilityState': main(gv.cp0_96(6, 69)).join(),
  'parseFloat': swap4(gv.cp0_96(5, 18)) + hexnum(gv.cp0_96(8, 30)),
  '11.678': hexnum(gv.cp0_96(7, 17)),
  '1.234': swap4(gv.cp0_96(8, 36)),
  'captureStackTrace': main(gv.cp0_96(7, 63))[0],
  '16777216': hexnum(gv.cp0_96(6, 76)),
  'navigator': swap2(gv.cp0_96(10, 63)),
  'getBattery': gv.cp0_96(4, 6) + gv.cp0_96(4, 55) + stringReverse(gv.cp0_96(6, 55)),
}

test('test cp0_96', () => {
  Object.entries(valueMap).forEach(([tb, ex]) => {
    expect(tb).toBe(ex);
  })
});
