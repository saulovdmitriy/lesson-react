"use strict";

var _makeBusiness = _interopRequireDefault(require("./makeBusiness"));

var _calcCash = _interopRequireDefault(require("./calcCash"));

var _employers = _interopRequireDefault(require("./employers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var employers = new _employers.default(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
var emp = employers.filterEmployers();
var calcCash = new _calcCash.default();
var money = calcCash.calc();
var makeBusiness = new _makeBusiness.default('Sam', 'Viktor', money, emp);
makeBusiness.make();