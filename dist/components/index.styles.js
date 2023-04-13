"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Text = exports.OverlyModal = exports.MainContainer = exports.ContentContainer = exports.Button = exports.Body = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  height: 100%;\n  width: 100vh;\n"])));
exports.MainContainer = MainContainer;
var Body = _styledComponents.default.div.attrs(function (_ref) {
  var color = _ref.color,
    theme = _ref.theme,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? false : _ref$darkMode;
  return {
    color: color,
    theme: theme
  };
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  background: ", ";\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  max-width: 50%;\n  min-width: 380px;\n  min-height: 200px;\n  border-radius: 8px;\n  z-index: 10;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: translate(-50%, -50%);\n"])), function (_ref2) {
  var theme = _ref2.theme,
    color = _ref2.color,
    darkMode = _ref2.darkMode;
  // console.log(theme[color]);
  return darkMode ? theme['neutral-700'] : theme[color];
});
exports.Body = Body;
var ContentContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  min-height: 260px;\n  padding: 40px 20px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"])));
exports.ContentContainer = ContentContainer;
var Title = _styledComponents.default.h2.attrs(function (_ref3) {
  var _ref3$darkMode = _ref3.darkMode,
    darkMode = _ref3$darkMode === void 0 ? false : _ref3$darkMode,
    theme = _ref3.theme;
  return {
    darkMode: darkMode,
    theme: theme
  };
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  font-family: sans-serif;\n  width: 90%;\n  color: ", ";\n  text-align: center;\n  margin: 0;\n  padding: 10px;\n"])), function (_ref4) {
  var theme = _ref4.theme,
    darkMode = _ref4.darkMode;
  return darkMode ? theme['neutral-100'] : theme['neutral-1000'];
});
exports.Title = Title;
var Text = _styledComponents.default.p.attrs(function (_ref5) {
  var color = _ref5.color,
    _ref5$darkMode = _ref5.darkMode,
    darkMode = _ref5$darkMode === void 0 ? false : _ref5$darkMode,
    theme = _ref5.theme;
  return {
    color: color,
    theme: theme
  };
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  font-family: sans-serif;\n  font-size: 1.125rem;\n  color: ", ";\n  text-align: center;\n  width: 90%;\n  margin: 12px 0;\n  padding: 9px;\n"])), function (_ref6) {
  var theme = _ref6.theme,
    darkMode = _ref6.darkMode;
  return darkMode ? theme['neutral-100'] : theme['neutral-1000'];
});
exports.Text = Text;
var Button = _styledComponents.default.button.attrs(function (_ref7) {
  var color = _ref7.color,
    theme = _ref7.theme,
    textColor = _ref7.textColor,
    hoverColor = _ref7.hoverColor;
  return {
    color: color,
    theme: theme,
    textColor: textColor,
    hoverColor: hoverColor
  };
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  display: block;\n  font-size: 1rem;\n  font-family: sans-serif;\n  padding: 10px 12px;\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  border: none;\n  outline: none;\n  cursor: pointer;\n\n  &&:hover {\n    background: ", ";\n  }\n"])), function (_ref8) {
  var textColor = _ref8.textColor,
    theme = _ref8.theme;
  return theme[textColor] || theme['green-300'];
}, function (_ref9) {
  var color = _ref9.color,
    theme = _ref9.theme;
  return theme[color] || theme['neutral-1000'];
}, function (_ref10) {
  var theme = _ref10.theme,
    hoverColor = _ref10.hoverColor;
  return theme[hoverColor] || theme['green-200'];
});
exports.Button = Button;
var OverlyModal = _styledComponents.default.div.attrs(function (_ref11) {
  var theme = _ref11.theme,
    overlayColor = _ref11.overlayColor;
  return {
    theme: theme,
    overlayColor: overlayColor
  };
})(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n  background: ", ";\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  opacity: 0.5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transition: opacity 0.2s ease-out;\n  z-index: 1;\n"])), function (_ref12) {
  var theme = _ref12.theme,
    overlayColor = _ref12.overlayColor;
  return theme[overlayColor] || theme['neutral-500'];
});
exports.OverlyModal = OverlyModal;