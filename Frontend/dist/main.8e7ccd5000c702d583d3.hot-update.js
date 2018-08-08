webpackHotUpdate("main",{

/***/ "./js/Components/forms/LoginForm.jsx":
/*!*******************************************!*\
  !*** ./js/Components/forms/LoginForm.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginForm = function (_Component) {\n  _inherits(LoginForm, _Component);\n\n  function LoginForm() {\n    _classCallCheck(this, LoginForm);\n\n    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));\n\n    _this.state = {\n      name: '',\n      description: '',\n      start_time: '',\n      end_time: '',\n      day_week: '',\n      date_event: '',\n      event_location: ''\n    };\n    return _this;\n  }\n\n  _createClass(LoginForm, [{\n    key: 'submitForm',\n    value: function submitForm() {\n      /*alert(this.state.name)\n      alert(this.state.description)\n      alert(this.state.start_time)\n      alert(this.state.end_time)\n      alert(this.state.day_week)\n      alert(this.state.date_event)\n      alert(this.state.event_location)*/\n\n      fetch('https://agile-headland-18478.herokuapp.com/clubs/register', {\n        method: 'POST',\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          name: this.state.name,\n          description: this.state.description,\n          time_start: this.state.start_time,\n          time_end: this.state.end_time,\n          date_week: this.state.day_week,\n          event_date: this.state.date_event,\n          location: this.state.event_location\n        })\n      }).then(function (response) {}).then(function (data) {\n        alert(data.message);\n        alert(data.secret_id);\n      });\n    }\n  }, {\n    key: 'updateInput',\n    value: function updateInput(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactstrap.Form,\n        null,\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Name'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'name', type: 'text', value: this.state.name, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Description'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'description', type: 'text', value: this.state.description, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Start time'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'start_time', type: 'text', value: this.state.start_time, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'End time'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'end_time', type: 'text', value: this.state.end_time, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Day of the week'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'day_week', type: 'text', value: this.state.day_week, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Date of the event'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'date_event', type: 'text', value: this.state.date_event, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Event Location'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'event_location', type: 'text', value: this.state.event_location, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.Button,\n          { onClick: this.submitForm.bind(this), style: { margin: '20px' }, color: 'danger' },\n          ' Submit '\n        )\n      );\n    }\n  }]);\n\n  return LoginForm;\n}(_react.Component);\n\nexports.default = LoginForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9Db21wb25lbnRzL2Zvcm1zL0xvZ2luRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvQ29tcG9uZW50cy9mb3Jtcy9Mb2dpbkZvcm0uanN4P2JlMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBCdXR0b24sRm9ybSxGb3JtR3JvdXAsTGFiZWwsSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBzdGFydF90aW1lOiAnJyxcbiAgICAgIGVuZF90aW1lOiAnJyxcbiAgICAgIGRheV93ZWVrOiAnJyxcbiAgICAgIGRhdGVfZXZlbnQ6ICcnLFxuICAgICAgZXZlbnRfbG9jYXRpb246JycsXG4gICAgfTtcbiAgfVxuICAgc3VibWl0Rm9ybSgpe1xuICAgIC8qYWxlcnQodGhpcy5zdGF0ZS5uYW1lKVxuICAgIGFsZXJ0KHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pXG4gICAgYWxlcnQodGhpcy5zdGF0ZS5zdGFydF90aW1lKVxuICAgIGFsZXJ0KHRoaXMuc3RhdGUuZW5kX3RpbWUpXG4gICAgYWxlcnQodGhpcy5zdGF0ZS5kYXlfd2VlaylcbiAgICBhbGVydCh0aGlzLnN0YXRlLmRhdGVfZXZlbnQpXG4gICAgYWxlcnQodGhpcy5zdGF0ZS5ldmVudF9sb2NhdGlvbikqL1xuXG4gICAgZmV0Y2goJ2h0dHBzOi8vYWdpbGUtaGVhZGxhbmQtMTg0NzguaGVyb2t1YXBwLmNvbS9jbHVicy9yZWdpc3RlcicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgdGltZV9zdGFydDogdGhpcy5zdGF0ZS5zdGFydF90aW1lLFxuICAgICAgICB0aW1lX2VuZCA6IHRoaXMuc3RhdGUuZW5kX3RpbWUsXG4gICAgICAgIGRhdGVfd2VlazogdGhpcy5zdGF0ZS5kYXlfd2VlayxcbiAgICAgICAgZXZlbnRfZGF0ZTogdGhpcy5zdGF0ZS5kYXRlX2V2ZW50LFxuICAgICAgICBsb2NhdGlvbiA6IHRoaXMuc3RhdGUuZXZlbnRfbG9jYXRpb24sXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKVxuICAgICAgICBhbGVydChkYXRhLnNlY3JldF9pZClcbiAgICAgIH0pXG4gIH1cbiAgdXBkYXRlSW5wdXQoZXZlbnQpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybT5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3ttYXJnaW46ICcyMHB4Jywgd2lkdGg6JzI1MHB4J319PlxuICAgICAgICA8TGFiZWw+TmFtZTwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCBuYW1lPSBcIm5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlID0ge3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9IHt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e21hcmdpbjogJzIwcHgnLCB3aWR0aDonMjUwcHgnfX0+XG4gICAgICAgIDxMYWJlbD5EZXNjcmlwdGlvbjwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCBuYW1lPSBcImRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBvbkNoYW5nZT0ge3RoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7bWFyZ2luOiAnMjBweCcsIHdpZHRoOicyNTBweCd9fT5cbiAgICAgICAgPExhYmVsPlN0YXJ0IHRpbWU8L0xhYmVsPlxuICAgICAgICA8SW5wdXQgbmFtZT0gXCJzdGFydF90aW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLnN0YXJ0X3RpbWV9IG9uQ2hhbmdlPSB7dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3ttYXJnaW46ICcyMHB4Jywgd2lkdGg6JzI1MHB4J319PlxuICAgICAgICA8TGFiZWw+RW5kIHRpbWU8L0xhYmVsPlxuICAgICAgICA8SW5wdXQgbmFtZT0gXCJlbmRfdGltZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSB7dGhpcy5zdGF0ZS5lbmRfdGltZX0gb25DaGFuZ2U9IHt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e21hcmdpbjogJzIwcHgnLCB3aWR0aDonMjUwcHgnfX0+XG4gICAgICAgIDxMYWJlbD5EYXkgb2YgdGhlIHdlZWs8L0xhYmVsPlxuICAgICAgICA8SW5wdXQgbmFtZT0gXCJkYXlfd2Vla1wiIHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSB7dGhpcy5zdGF0ZS5kYXlfd2Vla30gb25DaGFuZ2U9IHt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e21hcmdpbjogJzIwcHgnLCB3aWR0aDonMjUwcHgnfX0+XG4gICAgICAgIDxMYWJlbD5EYXRlIG9mIHRoZSBldmVudDwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCBuYW1lPSBcImRhdGVfZXZlbnRcIiB0eXBlPVwidGV4dFwiIHZhbHVlID0ge3RoaXMuc3RhdGUuZGF0ZV9ldmVudH0gb25DaGFuZ2U9IHt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e21hcmdpbjogJzIwcHgnLCB3aWR0aDonMjUwcHgnfX0+XG4gICAgICAgIDxMYWJlbD5FdmVudCBMb2NhdGlvbjwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCBuYW1lPSBcImV2ZW50X2xvY2F0aW9uXCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLmV2ZW50X2xvY2F0aW9ufSBvbkNoYW5nZT0ge3RoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyl9c3R5bGU9e3ttYXJnaW46JzIwcHgnfX1jb2xvcj1cImRhbmdlclwiID4gU3VibWl0IDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgXG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBRkE7QUFXQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQU5BO0FBbUJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0JBO0FBa0NBOzs7O0FBcEZBO0FBQ0E7QUFxRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/Components/forms/LoginForm.jsx\n");

/***/ })

})