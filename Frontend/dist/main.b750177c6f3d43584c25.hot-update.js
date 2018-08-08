webpackHotUpdate("main",{

/***/ "./js/Components/forms/LoginForm.jsx":
/*!*******************************************!*\
  !*** ./js/Components/forms/LoginForm.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginForm = function (_Component) {\n  _inherits(LoginForm, _Component);\n\n  function LoginForm() {\n    _classCallCheck(this, LoginForm);\n\n    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));\n\n    _this.state = {\n      name: ''\n\n    };\n    return _this;\n  }\n\n  _createClass(LoginForm, [{\n    key: 'submitForm',\n    value: function submitForm() {\n      alert(this.state.name);\n    }\n  }, {\n    key: 'updateName',\n    value: function updateName() {\n      this.setState({\n        name: this.state.name\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactstrap.Form,\n        { onSubmit: this.submitForm },\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            { 'for': 'Name' },\n            'Name'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { type: 'text', value: this.state.name, onChange: this.updateName.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            { 'for': 'examplePassword' },\n            'Description'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { type: 'name', name: 'name', id: 'examplePassword', placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            { 'for': 'examplePassword' },\n            'Start time'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { type: 'name', name: 'name', id: 'examplePassword', placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            { 'for': 'examplePassword' },\n            'End time'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { type: 'name', name: 'name', id: 'examplePassword', placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            { 'for': 'examplePassword' },\n            'Day of the week'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { type: 'name', name: 'name', id: 'examplePassword', placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            { 'for': 'examplePassword' },\n            'Date of the event'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { type: 'name', name: 'name', id: 'examplePassword', placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            { 'for': 'examplePassword' },\n            'Event Location'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { type: 'name', name: 'name', id: 'examplePassword', placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.Button,\n          { style: { margin: '20px' }, color: 'danger' },\n          ' Submit '\n        )\n      );\n    }\n  }]);\n\n  return LoginForm;\n}(_react.Component);\n\nexports.default = LoginForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9Db21wb25lbnRzL2Zvcm1zL0xvZ2luRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvQ29tcG9uZW50cy9mb3Jtcy9Mb2dpbkZvcm0uanN4P2JlMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBCdXR0b24sRm9ybSxGb3JtR3JvdXAsTGFiZWwsSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJydcblxuICAgIH07XG4gIH1cbiAgc3VibWl0Rm9ybSgpe1xuICAgIGFsZXJ0KHRoaXMuc3RhdGUubmFtZSlcbiAgfVxuICB1cGRhdGVOYW1lKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYW1lOnRoaXMuc3RhdGUubmFtZVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3ttYXJnaW46ICcyMHB4Jywgd2lkdGg6JzI1MHB4J319PlxuICAgICAgICA8TGFiZWwgZm9yPVwiTmFtZVwiPk5hbWU8L0xhYmVsPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPSB7dGhpcy51cGRhdGVOYW1lLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e21hcmdpbjogJzIwcHgnLCB3aWR0aDonMjUwcHgnfX0+XG4gICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlUGFzc3dvcmRcIj5EZXNjcmlwdGlvbjwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJleGFtcGxlUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3ttYXJnaW46ICcyMHB4Jywgd2lkdGg6JzI1MHB4J319PlxuICAgICAgICA8TGFiZWwgZm9yPVwiZXhhbXBsZVBhc3N3b3JkXCI+U3RhcnQgdGltZTwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJleGFtcGxlUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3ttYXJnaW46ICcyMHB4Jywgd2lkdGg6JzI1MHB4J319PlxuICAgICAgICA8TGFiZWwgZm9yPVwiZXhhbXBsZVBhc3N3b3JkXCI+RW5kIHRpbWU8L0xhYmVsPlxuICAgICAgICA8SW5wdXQgdHlwZT1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIGlkPVwiZXhhbXBsZVBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7bWFyZ2luOiAnMjBweCcsIHdpZHRoOicyNTBweCd9fT5cbiAgICAgICAgPExhYmVsIGZvcj1cImV4YW1wbGVQYXNzd29yZFwiPkRheSBvZiB0aGUgd2VlazwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJleGFtcGxlUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3ttYXJnaW46ICcyMHB4Jywgd2lkdGg6JzI1MHB4J319PlxuICAgICAgICA8TGFiZWwgZm9yPVwiZXhhbXBsZVBhc3N3b3JkXCI+RGF0ZSBvZiB0aGUgZXZlbnQ8L0xhYmVsPlxuICAgICAgICA8SW5wdXQgdHlwZT1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIGlkPVwiZXhhbXBsZVBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7bWFyZ2luOiAnMjBweCcsIHdpZHRoOicyNTBweCd9fT5cbiAgICAgICAgPExhYmVsIGZvcj1cImV4YW1wbGVQYXNzd29yZFwiPkV2ZW50IExvY2F0aW9uPC9MYWJlbD5cbiAgICAgICAgPElucHV0IHR5cGU9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBpZD1cImV4YW1wbGVQYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEJ1dHRvbiBzdHlsZT17e21hcmdpbjonMjBweCd9fWNvbG9yPVwiZGFuZ2VyXCI+IFN1Ym1pdCA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cblxuICAgIFxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTdCQTtBQWtDQTs7OztBQXBEQTtBQUNBO0FBcURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/Components/forms/LoginForm.jsx\n");

/***/ })

})