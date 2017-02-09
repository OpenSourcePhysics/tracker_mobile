'use strict';

module.exports = {
  name: 'Base',
  type: 'point',
  color: [ 0, 204, 0, 255 ],
  params: [ 't', 'x', 'y', 'v_x', 'v_y' ],
  start: 1,
  precisions: {
    't': 1,
    'default': 3
  },
  track: true,
  trackType: 'VerticalLine',
  trackNumber: true,
  frames: [
    [ 0.000000000E0, 6.872852234E-3, -2.290950745E-3, , ],
    [ 1.000000000E-1, 7.560137457E-2, 1.145475372E-3, 7.216494845E-1, 1.718213058E-2 ],
    [ 2.000000000E-1, 1.512027491E-1, 1.145475372E-3, 7.560137457E-1, -0.000000000E0 ],
    [ 3.000000000E-1, 2.268041237E-1, 1.145475372E-3, 7.560137457E-1, 1.145475372E-2 ],
    [ 4.000000000E-1, 3.024054983E-1, 3.436426117E-3, 7.560137457E-1, -0.000000000E0 ],
    [ 5.000000000E-1, 3.780068729E-1, 1.145475372E-3, 7.560137457E-1, -1.145475372E-2 ],
    [ 6.000000000E-1, 4.536082474E-1, 1.145475372E-3, 7.560137457E-1, -0.000000000E0 ],
    [ 7.000000000E-1, 5.292096220E-1, 1.145475372E-3, , ]
  ]
};