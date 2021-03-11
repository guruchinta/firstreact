'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterComponent = function (_React$Component) {
    _inherits(CounterComponent, _React$Component);

    function CounterComponent(props) {
        _classCallCheck(this, CounterComponent);

        var _this = _possibleConstructorReturn(this, (CounterComponent.__proto__ || Object.getPrototypeOf(CounterComponent)).call(this, props));

        _this.AdditionMethod = _this.AdditionMethod.bind(_this);
        _this.SubMethod = _this.SubMethod.bind(_this);
        _this.ResetMethod = _this.ResetMethod.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(CounterComponent, [{
        key: 'AdditionMethod',
        value: function AdditionMethod() {
            this.setState(function (prevStat) {
                return {
                    count: prevStat.count + 1
                };
            });
        }
    }, {
        key: 'SubMethod',
        value: function SubMethod() {
            this.setState(function (prevStat) {
                return {
                    count: prevStat.count - 1
                };
            });
        }
    }, {
        key: 'ResetMethod',
        value: function ResetMethod() {
            this.setState(function (prevStat) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.AdditionMethod },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.SubMethod },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.ResetMethod },
                    'Reset'
                )
            );
        }
    }]);

    return CounterComponent;
}(React.Component);

ReactDOM.render(React.createElement(CounterComponent, null), document.getElementById('app'));
