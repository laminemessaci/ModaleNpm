"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCloseIcon = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _xmarkSolid = require("./xmark-solid.svg");
var _templateObject;
/**
 * [description]
 */

var StyledCloseIcon = (0, _styledComponents.default)(_xmarkSolid.ReactComponent).attrs(function (_ref) {
  var theme = _ref.theme,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? '1.2rem' : _ref$type,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'rgb(239 68 68)' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? ' 1.2rem' : _ref$size;
  return {
    fill: color,
    width: size,
    theme: theme,
    type: type
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  fill: ", ";\n  width: ", ";\n  cursor: pointer;\n  position: absolute;\n  right: 20px;\n  top: 10px;\n"])), function (_ref2) {
  var theme = _ref2.theme,
    color = _ref2.color;
  return theme[color];
}, function (_ref3) {
  var width = _ref3.width;
  return width;
});
exports.StyledCloseIcon = StyledCloseIcon;