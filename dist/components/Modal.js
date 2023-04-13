"use strict";

var _interopRequireDefault = require("C:/Users/lmess/PARCOURS FORMATION REACT OPC/Madale-Lib-NPM/lamine_modale/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _themes = require("../constants/themes.js");
var _CircleIcon = require("./assets/icons/CircleIcon");
var _index = require("./assets/index.js");
var _index2 = require("./index.styles");
var Modal = function Modal(_ref) {
  var setIsOpen = _ref.setIsOpen,
    title = _ref.title,
    text = _ref.text,
    darkMode = _ref.darkMode,
    close = _ref.close,
    overlayColor = _ref.overlayColor,
    bodyColor = _ref.bodyColor,
    closeColor = _ref.closeColor,
    closeSize = _ref.closeSize,
    checkSize = _ref.checkSize,
    colorCheck = _ref.colorCheck,
    button = _ref.button,
    textButton = _ref.textButton,
    check = _ref.check,
    bgButton = _ref.bgButton,
    hoverBgButton = _ref.hoverBgButton,
    buttonTextColor = _ref.buttonTextColor;
  return /*#__PURE__*/_react.default.createElement(_index2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_index2.Body, {
    color: bodyColor,
    theme: _themes.ColorsSchema,
    darkMode: darkMode
  }, close && /*#__PURE__*/_react.default.createElement(_index.StyledCloseIcon, {
    color: closeColor,
    size: closeSize,
    type: closeSize,
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_index2.ContentContainer, null, check && /*#__PURE__*/_react.default.createElement(_CircleIcon.StyledCircleIcon, {
    theme: _themes.ColorsSchema,
    type: _themes.TypeScale,
    size: checkSize,
    color: colorCheck
  }), /*#__PURE__*/_react.default.createElement(_index2.Title, {
    darkMode: darkMode,
    theme: _themes.ColorsSchema
  }, title || 'Employee created successfully !'), /*#__PURE__*/_react.default.createElement(_index2.Text, {
    theme: _themes.ColorsSchema,
    darkMode: darkMode
  }, text || null), button && /*#__PURE__*/_react.default.createElement(_index2.Button, {
    onClick: function onClick() {
      return setIsOpen(false);
    },
    theme: _themes.ColorsSchema,
    color: bgButton,
    hoverColor: hoverBgButton,
    textColor: buttonTextColor
  }, textButton || 'Close'))), /*#__PURE__*/_react.default.createElement(_index2.OverlyModal, {
    theme: _themes.ColorsSchema,
    overlayColor: overlayColor,
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }));
};
var _default = Modal;
exports.default = _default;
Modal.prototypes = {
  setIsOpen: _propTypes.default.func.isRequired,
  close: _propTypes.default.bool,
  check: _propTypes.default.bool,
  darkMode: _propTypes.default.bool,
  bodyColor: _propTypes.default.string,
  closeColor: _propTypes.default.string,
  closeSize: _propTypes.default.string,
  checkSize: _propTypes.default.string,
  colorCheck: _propTypes.default.string,
  button: _propTypes.default.Button,
  textButton: _propTypes.default.string,
  bgButton: _propTypes.default.string,
  hoverBgButton: _propTypes.default.string,
  buttonTextColor: _propTypes.default.string,
  title: _propTypes.default.string,
  text: _propTypes.default.string
};