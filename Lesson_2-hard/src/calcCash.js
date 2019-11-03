"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sponsors = exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;

var CalcCash =
/*#__PURE__*/
function () {
  function CalcCash() {
    var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, CalcCash);

    this.own = own;
  }

  _createClass(CalcCash, [{
    key: "calc",
    value: function calc() {
      var cash = sponsors.cash;
      var everyCash = cash;
      var total = this.own;
      everyCash.forEach(function (elem) {
        total += elem;
      });
      return total;
    }
  }]);

  return CalcCash;
}();

exports.default = CalcCash;