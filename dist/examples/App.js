"use strict";

var _interopRequireWildcard = require("C:/Users/lmess/PARCOURS FORMATION REACT OPC/Madale-Lib-NPM/lamine_modale/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
var _interopRequireDefault = require("C:/Users/lmess/PARCOURS FORMATION REACT OPC/Madale-Lib-NPM/lamine_modale/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("C:/Users/lmess/PARCOURS FORMATION REACT OPC/Madale-Lib-NPM/lamine_modale/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = _interopRequireWildcard(require("react"));
var _baseTheme = _interopRequireDefault(require("../constants/baseTheme.js"));
var _Modal = _interopRequireDefault(require("./../components/Modal"));
function App() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isOpen = _useState2[0],
    _setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    darkMode = _useState4[0],
    setDarkMode = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    title = _useState6[0],
    setTitle = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    text = _useState8[0],
    setText = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    close = _useState10[0],
    setClose = _useState10[1];
  var _useState11 = (0, _react.useState)('neutral-500'),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    closeColor = _useState12[0],
    setCloseColor = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
    check = _useState14[0],
    setCheck = _useState14[1];
  var _useState15 = (0, _react.useState)(true),
    _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
    button = _useState16[0],
    setButton = _useState16[1];
  var _useState17 = (0, _react.useState)('Close'),
    _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
    textButton = _useState18[0],
    setTextButton = _useState18[1];
  var _useState19 = (0, _react.useState)('green-200'),
    _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
    hoverBgButton = _useState20[0],
    setHoverBgButton = _useState20[1];
  var _useState21 = (0, _react.useState)('neutral-1000'),
    _useState22 = (0, _slicedToArray2.default)(_useState21, 2),
    buttonTextColor = _useState22[0],
    setButtonTextColor = _useState22[1];
  var _useState23 = (0, _react.useState)('neutral-500'),
    _useState24 = (0, _slicedToArray2.default)(_useState23, 2),
    overlayColor = _useState24[0],
    setOverlayColor = _useState24[1];
  var _useState25 = (0, _react.useState)('neutral-1000'),
    _useState26 = (0, _slicedToArray2.default)(_useState25, 2),
    bodyColor = _useState26[0],
    setBodyColor = _useState26[1];
  var _useState27 = (0, _react.useState)('24px'),
    _useState28 = (0, _slicedToArray2.default)(_useState27, 2),
    closeSize = _useState28[0],
    setCloseSize = _useState28[1];
  var _useState29 = (0, _react.useState)('24px'),
    _useState30 = (0, _slicedToArray2.default)(_useState29, 2),
    checkSize = _useState30[0],
    setCheckSize = _useState30[1];
  var _useState31 = (0, _react.useState)('green-300'),
    _useState32 = (0, _slicedToArray2.default)(_useState31, 2),
    colorCheck = _useState32[0],
    setColorCheck = _useState32[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_baseTheme.default, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: 20
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return _setIsOpen(true);
    },
    style: {
      padding: '10px',
      margin: '50px 50px',
      borderRadius: '5px',
      border: 'none',
      color: 'white',
      backgroundColor: 'green',
      fontSize: '20px'
    }
  }, "Click to Open Modal"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "close",
    style: {
      fontSize: 22
    }
  }, "\xA0 \xA0 Close X \xA0"), /*#__PURE__*/_react.default.createElement("input", {
    id: "close",
    type: "checkbox",
    checked: close,
    onChange: function onChange() {
      return setClose(!close);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "check",
    style: {
      fontSize: 22
    }
  }, "\xA0 \xA0 Check \xA0"), /*#__PURE__*/_react.default.createElement("input", {
    id: "check",
    type: "checkbox",
    checked: check,
    onChange: function onChange() {
      return setCheck(!check);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "mode",
    style: {
      fontSize: 22
    }
  }, "\xA0 \xA0 darkMode \xA0"), /*#__PURE__*/_react.default.createElement("input", {
    id: "mode",
    type: "checkbox",
    checked: darkMode,
    onChange: function onChange() {
      return setDarkMode(!darkMode);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "button",
    style: {
      fontSize: 22
    }
  }, "\xA0 \xA0 Button \xA0"), /*#__PURE__*/_react.default.createElement("input", {
    id: "button",
    type: "checkbox",
    checked: button,
    onChange: function onChange() {
      return setButton(!button);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: 40,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    style: {
      fontSize: 22
    },
    htmlFor: "overlyColor"
  }, ' ', "\xA0 \xA0 overlayColor \xA0"), /*#__PURE__*/_react.default.createElement("input", {
    id: "overlyColor",
    type: "list",
    list: "colors",
    onChange: function onChange(e) {
      setOverlayColor(e.target.value);
    },
    defaultChecked: overlayColor
  }), /*#__PURE__*/_react.default.createElement("datalist", {
    id: "colors"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "green-500"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "blue-200"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "red-200"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "neutral-300"
  }))), isOpen ? /*#__PURE__*/_react.default.createElement(_Modal.default, {
    button: button,
    setIsOpen: function setIsOpen() {
      return _setIsOpen(function (prev) {
        return !prev;
      });
    },
    close: close ? function () {
      return _setIsOpen(false);
    } : false,
    check: check,
    title: title,
    darkMode: darkMode,
    checkSize: '3rem',
    text: 'test',
    overlayColor: overlayColor
  }) : null);
}
var _default = App;
exports.default = _default;