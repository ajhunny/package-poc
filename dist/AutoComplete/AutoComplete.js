"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

var _excluded = ["id", "label", "options", "onChange", "onInputChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AutoComplete = function AutoComplete(_ref) {
  var id = _ref.id,
      label = _ref.label,
      options = _ref.options,
      onChange = _ref.onChange,
      onInputChange = _ref.onInputChange,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    htmlFor: id
  }, label), /*#__PURE__*/_react.default.createElement(_lab.Autocomplete, _extends({
    id: id,
    size: "small",
    onChange: onChange,
    onInputChange: onInputChange,
    options: options,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react.default.createElement(_core.TextField, _extends({}, params, {
        variant: "outlined"
      }));
    }
  }, props)));
};

var _default = AutoComplete;
exports.default = _default;