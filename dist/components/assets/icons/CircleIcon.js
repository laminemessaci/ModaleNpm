"use strict";

var _interopRequireDefault = require("C:/Users/lmess/PARCOURS FORMATION REACT OPC/Madale-Lib-NPM/lamine_modale/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCircleIcon = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("C:/Users/lmess/PARCOURS FORMATION REACT OPC/Madale-Lib-NPM/lamine_modale/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _themes = require("../../../constants/themes.js");
var _circle = require("./circle.svg");
var _templateObject;
var StyledCircleIcon = (0, _styledComponents.default)(_circle.ReactComponent).attrs(function (_ref) {
  var theme = _ref.theme,
    type = _ref.type,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'rgb(24 239 172)' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '3rem' : _ref$size;
  return {
    fill: color,
    width: size,
    theme: theme
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  fill: ", ";\n  width: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme,
    fill = _ref2.fill;
  return theme[fill];
}, function (_ref3) {
  var type = _ref3.type,
    width = _ref3.width;
  return type[width];
});
exports.StyledCircleIcon = StyledCircleIcon;