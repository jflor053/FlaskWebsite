webpackHotUpdate("main",{

/***/ "./js/Components/forms/LoginForm.jsx":
/*!*******************************************!*\
  !*** ./js/Components/forms/LoginForm.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginForm = function (_Component) {\n  _inherits(LoginForm, _Component);\n\n  function LoginForm() {\n    _classCallCheck(this, LoginForm);\n\n    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));\n\n    _this.state = {\n      name: '',\n      description: '',\n      start_time: '',\n      end_time: '',\n      day_week: '',\n      date_event: '',\n      event_location: ''\n    };\n    return _this;\n  }\n\n  _createClass(LoginForm, [{\n    key: 'submitForm',\n    value: async function submitForm() {\n      /*alert(this.state.name)\n      alert(this.state.description)\n      alert(this.state.start_time)\n      alert(this.state.end_time)\n      alert(this.state.day_week)\n      alert(this.state.date_event)\n      alert(this.state.event_location)*/\n\n      var response = await fetch('https://agile-headland-18478.herokuapp.com/clubs/register', {\n        method: 'POST',\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          name: this.state.name,\n          description: this.state.description,\n          time_start: this.state.start_time,\n          time_end: this.state.end_time,\n          date_week: this.state.day_week,\n          event_date: this.state.date_event,\n          location: this.state.event_location\n        })\n      }).then(async function (res) {\n        alert(res[0].message);\n        alert(res.secret_id);\n      });\n    }\n  }, {\n    key: 'updateInput',\n    value: function updateInput(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactstrap.Form,\n        null,\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Name'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'name', type: 'text', value: this.state.name, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Description'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'description', type: 'text', value: this.state.description, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Start time'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'start_time', type: 'text', value: this.state.start_time, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'End time'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'end_time', type: 'text', value: this.state.end_time, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Day of the week'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'day_week', type: 'text', value: this.state.day_week, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Date of the event'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'date_event', type: 'text', value: this.state.date_event, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.FormGroup,\n          { style: { margin: '20px', width: '250px' } },\n          _react2.default.createElement(\n            _reactstrap.Label,\n            null,\n            'Event Location'\n          ),\n          _react2.default.createElement(_reactstrap.Input, { name: 'event_location', type: 'text', value: this.state.event_location, onChange: this.updateInput.bind(this), placeholder: '' })\n        ),\n        _react2.default.createElement(\n          _reactstrap.Button,\n          { onClick: this.submitForm.bind(this), style: { margin: '20px' }, color: 'danger' },\n          ' Submit '\n        )\n      );\n    }\n  }]);\n\n  return LoginForm;\n}(_react.Component);\n\nexports.default = LoginForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9Db21wb25lbnRzL2Zvcm1zL0xvZ2luRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvQ29tcG9uZW50cy9mb3Jtcy9Mb2dpbkZvcm0uanN4P2JlMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBCdXR0b24sRm9ybSxGb3JtR3JvdXAsTGFiZWwsSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBzdGFydF90aW1lOiAnJyxcbiAgICAgIGVuZF90aW1lOiAnJyxcbiAgICAgIGRheV93ZWVrOiAnJyxcbiAgICAgIGRhdGVfZXZlbnQ6ICcnLFxuICAgICAgZXZlbnRfbG9jYXRpb246JycsXG4gICAgfTtcbiAgfVxuICBhc3luYyBzdWJtaXRGb3JtKCl7XG4gICAgLyphbGVydCh0aGlzLnN0YXRlLm5hbWUpXG4gICAgYWxlcnQodGhpcy5zdGF0ZS5kZXNjcmlwdGlvbilcbiAgICBhbGVydCh0aGlzLnN0YXRlLnN0YXJ0X3RpbWUpXG4gICAgYWxlcnQodGhpcy5zdGF0ZS5lbmRfdGltZSlcbiAgICBhbGVydCh0aGlzLnN0YXRlLmRheV93ZWVrKVxuICAgIGFsZXJ0KHRoaXMuc3RhdGUuZGF0ZV9ldmVudClcbiAgICBhbGVydCh0aGlzLnN0YXRlLmV2ZW50X2xvY2F0aW9uKSovXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FnaWxlLWhlYWRsYW5kLTE4NDc4Lmhlcm9rdWFwcC5jb20vY2x1YnMvcmVnaXN0ZXInLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXG4gICAgICAgIHRpbWVfc3RhcnQ6IHRoaXMuc3RhdGUuc3RhcnRfdGltZSxcbiAgICAgICAgdGltZV9lbmQgOiB0aGlzLnN0YXRlLmVuZF90aW1lLFxuICAgICAgICBkYXRlX3dlZWs6IHRoaXMuc3RhdGUuZGF5X3dlZWssXG4gICAgICAgIGV2ZW50X2RhdGU6IHRoaXMuc3RhdGUuZGF0ZV9ldmVudCxcbiAgICAgICAgbG9jYXRpb24gOiB0aGlzLnN0YXRlLmV2ZW50X2xvY2F0aW9uLFxuICAgICAgfSlcbiAgICB9KS50aGVuKCBhc3luYyByZXMgPT4ge1xuICAgICAgICBhbGVydChyZXNbMF0ubWVzc2FnZSlcbiAgICAgICAgYWxlcnQocmVzLnNlY3JldF9pZClcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVJbnB1dChldmVudCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e21hcmdpbjogJzIwcHgnLCB3aWR0aDonMjUwcHgnfX0+XG4gICAgICAgIDxMYWJlbD5OYW1lPC9MYWJlbD5cbiAgICAgICAgPElucHV0IG5hbWU9IFwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSB7dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT0ge3RoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7bWFyZ2luOiAnMjBweCcsIHdpZHRoOicyNTBweCd9fT5cbiAgICAgICAgPExhYmVsPkRlc2NyaXB0aW9uPC9MYWJlbD5cbiAgICAgICAgPElucHV0IG5hbWU9IFwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHZhbHVlID0ge3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IG9uQ2hhbmdlPSB7dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3ttYXJnaW46ICcyMHB4Jywgd2lkdGg6JzI1MHB4J319PlxuICAgICAgICA8TGFiZWw+U3RhcnQgdGltZTwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCBuYW1lPSBcInN0YXJ0X3RpbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlID0ge3RoaXMuc3RhdGUuc3RhcnRfdGltZX0gb25DaGFuZ2U9IHt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e21hcmdpbjogJzIwcHgnLCB3aWR0aDonMjUwcHgnfX0+XG4gICAgICAgIDxMYWJlbD5FbmQgdGltZTwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCBuYW1lPSBcImVuZF90aW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLmVuZF90aW1lfSBvbkNoYW5nZT0ge3RoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7bWFyZ2luOiAnMjBweCcsIHdpZHRoOicyNTBweCd9fT5cbiAgICAgICAgPExhYmVsPkRheSBvZiB0aGUgd2VlazwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCBuYW1lPSBcImRheV93ZWVrXCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt0aGlzLnN0YXRlLmRheV93ZWVrfSBvbkNoYW5nZT0ge3RoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7bWFyZ2luOiAnMjBweCcsIHdpZHRoOicyNTBweCd9fT5cbiAgICAgICAgPExhYmVsPkRhdGUgb2YgdGhlIGV2ZW50PC9MYWJlbD5cbiAgICAgICAgPElucHV0IG5hbWU9IFwiZGF0ZV9ldmVudFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSB7dGhpcy5zdGF0ZS5kYXRlX2V2ZW50fSBvbkNoYW5nZT0ge3RoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7bWFyZ2luOiAnMjBweCcsIHdpZHRoOicyNTBweCd9fT5cbiAgICAgICAgPExhYmVsPkV2ZW50IExvY2F0aW9uPC9MYWJlbD5cbiAgICAgICAgPElucHV0IG5hbWU9IFwiZXZlbnRfbG9jYXRpb25cIiB0eXBlPVwidGV4dFwiIHZhbHVlID0ge3RoaXMuc3RhdGUuZXZlbnRfbG9jYXRpb259IG9uQ2hhbmdlPSB7dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxCdXR0b24gb25DbGljayA9IHt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX1zdHlsZT17e21hcmdpbjonMjBweCd9fWNvbG9yPVwiZGFuZ2VyXCIgPiBTdWJtaXQgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG5cbiAgICBcbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFGQTtBQVdBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBTkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3QkE7QUFrQ0E7Ozs7QUFqRkE7QUFDQTtBQWtGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/Components/forms/LoginForm.jsx\n");

/***/ })

})