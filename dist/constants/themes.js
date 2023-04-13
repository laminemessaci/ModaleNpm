"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primaryFont = exports.TypeScale = exports.ColorsSchema = void 0;
var blue = {
  'blue-50': '#DBEAFE',
  'blue-100': '#DBEAFE',
  'blue-200': '#BFDBFE',
  'blue-300': '#93C5FD',
  'blue-400': '#60A5FA',
  'blue-500': 'rgb(59 130 246)',
  'blue-600': 'rgb(37 99 235)',
  'blue-700': 'rgb(29 78 216)',
  'blue-800': 'rgb(30 64 175)',
  'blue-900': 'rgb(30 58 138)'
};
var green = {
  'green-50': 'rgb(240 253 244)',
  'green-100': 'rgb(220 252 231)',
  'green-200': 'rgb(187 247 208)',
  'green-300': 'rgb(134 239 172)',
  'green-400': 'rgb(74 222 128)',
  'green-500': 'rgb(34 197 94)',
  'green-600': 'rgb(22 163 74)',
  'green-700': 'rgb(21 128 61)',
  'green-800': 'rgb(22 101 52)',
  'green-900': 'rgb(20 83 45)'
};
var yellow = {
  'yellow-50': ' rgb(254 252 232)',
  'yellow-100': 'rgb(254 249 195)',
  'yellow-200': 'rgb(254 240 138)',
  'yellow-300': 'rgb(253 224 71)',
  'yellow-400': 'rgb(250 204 21)',
  'yellow-500': 'rgb(234 179 8)',
  'yellow-600': 'rgb(202 138 4)',
  'yellow-700': 'rgb(161 98 7)',
  'yellow-800': 'rgb(133 77 14)',
  'yellow-900': 'rgb(113 63 18)'
};
var red = {
  'red-50': 'rgb(254 242 242)',
  'red-100': 'rgb(254 226 226)',
  'red-200': 'rgb(254 202 202)',
  'red-300': 'rgb(252 165 165)',
  'red-400': 'rgb(248 113 113)',
  'red-500': 'rgb(239 68 68)',
  'red-600': 'rgb(220 38 38)',
  'red-700': 'rgb(185 28 28)',
  'red-800': 'rgb(153 27 27)',
  'red-900': 'rgb(127 29 29)'
};
var neutral = {
  'neutral-000': '#FFFFFF',
  'neutral-50': 'rgb(250 250 250)',
  'neutral-100': 'rgb(245 245 245)',
  'neutral-200': 'rgb(229 229 229)',
  'neutral-300': 'rgb(212 212 212)',
  'neutral-400': 'rgb(163 163 163)',
  'neutral-500': 'rgb(115 115 115)',
  'neutral-600': 'rgb(82 82 82)',
  'neutral-700': 'rgb(64 64 64)',
  'neutral-800': 'rgb(38 38 38)',
  'neutral-900': 'rgb(23 23 23)',
  'neutral-1000': '#000000'
};
var ColorsSchema = {
  'green-50': green['green-50'],
  'green-100': green['green-100'],
  'green-200': green['green-200'],
  'green-300': green['green-300'],
  'green-400': green['green-400'],
  'green-500': green['green-500'],
  'green-600': green['green-600'],
  'green-700': green['green-700'],
  'green-800': green['green-800'],
  'green-900': green['green-900'],
  'blue-50': blue['blue-50'],
  'blue-100': blue['blue-100'],
  'blue-200': blue['blue-200'],
  'blue-300': blue['blue-300'],
  'blue-400': blue['blue-400'],
  'blue-500': blue['blue-500'],
  'blue-600': blue['blue-600'],
  'blue-700': blue['blue-700'],
  'blue-800': blue['blue-800'],
  'blue-900': blue['blue-900'],
  'red-50': red['red-50'],
  'red-100': red['red-100'],
  'red-200': red['red-200'],
  'red-300': red['red-300'],
  'red-400': red['red-400'],
  'red-500': red['red-500'],
  'red-600': red['red-600'],
  'red-700': red['red-700'],
  'red-800': red['red-800'],
  'red-900': red['red-900'],
  'yellow-50': yellow['yellow-50'],
  'yellow-100': yellow['yellow-100'],
  'yellow-200': yellow['yellow-200'],
  'yellow-300': yellow['yellow-300'],
  'yellow-400': yellow['yellow-400'],
  'yellow-500': yellow['yellow-500'],
  'yellow-600': yellow['yellow-600'],
  'yellow-700': yellow['yellow-700'],
  'yellow-800': yellow['yellow-800'],
  'yellow-900': yellow['yellow-900'],
  'neutral-000': neutral['neutral-000'],
  'neutral-50': neutral['neutral-50'],
  'neutral-100': neutral['neutral-100'],
  'neutral-200': neutral['neutral-200'],
  'neutral-300': neutral['neutral-300'],
  'neutral-400': neutral['neutral-400'],
  'neutral-500': neutral['neutral-500'],
  'neutral-600': neutral['neutral-600'],
  'neutral-700': neutral['neutral-700'],
  'neutral-800': neutral['neutral-800'],
  'neutral-900': neutral['neutral-900'],
  'neutral-1000': neutral['neutral-1000']
};
exports.ColorsSchema = ColorsSchema;
var TypeScale = {
  iconLarge: '3rem',
  iconBase: '2rem',
  header1: '1.8rem',
  header2: '1.6rem',
  header3: '1.4rem',
  header4: '1.2rem',
  header5: '1.1rem',
  paragraph: '1rem',
  helperText: '0.8rem',
  copyrightText: '0.7rem'
};
exports.TypeScale = TypeScale;
var primaryFont = "'Roboto', sans-serif;";
exports.primaryFont = primaryFont;