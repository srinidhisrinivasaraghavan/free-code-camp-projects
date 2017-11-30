"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading = function (_React$Component) {
  _inherits(Heading, _React$Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Heading.prototype.render = function render() {
    return React.createElement(
      "h2",
      { className: "heading text-center" },
      this.props.text
    );
  };

  return Heading;
}(React.Component);

var Box = function (_React$Component2) {
  _inherits(Box, _React$Component2);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Box.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "box" },
      this.props.boxContent
    );
  };

  return Box;
}(React.Component);

var Button = function (_React$Component3) {
  _inherits(Button, _React$Component3);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  Button.prototype.render = function render() {
    return React.createElement(
      "button",
      { type: "button", className: "button",
        onClick: this.props.onClick },
      this.props.buttonText
    );
  };

  return Button;
}(React.Component);

var Footer = function (_React$Component4) {
  _inherits(Footer, _React$Component4);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  Footer.prototype.render = function render() {
    return React.createElement(
      "h6",
      { className: "footer text-center" },
      this.props.footerText
    );
  };

  return Footer;
}(React.Component);

var QuoteAuthor = function (_React$Component5) {
  _inherits(QuoteAuthor, _React$Component5);

  function QuoteAuthor() {
    _classCallCheck(this, QuoteAuthor);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  QuoteAuthor.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        this.props.quote
      ),
      React.createElement(
        "div",
        { className: "pull-right" },
        "- ",
        this.props.author
      )
    );
  };

  return QuoteAuthor;
}(React.Component);

var AppComponent = function (_React$Component6) {
  _inherits(AppComponent, _React$Component6);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
  }

  AppComponent.prototype.render = function render() {
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + this.props.quote + " - By " + this.props.author + "&hashtags=freecodecamp,codepen,randomquotegenerator";

    return React.createElement(
      "div",
      { className: "app" },
      React.createElement(Heading, { text: "Random Quote Generator" }),
      React.createElement(
        "div",
        { className: "content row col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2 col-lg-8 col-md-8 col-sm-8 col-xs-8" },
        React.createElement(
          "div",
          { className: "pull-right" },
          React.createElement(Button, { buttonText: "New Quote", onClick: this.props.getQuote })
        ),
        React.createElement(
          "div",
          { className: "pull-left" },
          React.createElement(
            "a",
            { target: "_blank", className: "twitter-share-button",
              href: tweetUrl },
            "Tweet ",
            React.createElement("i", { className: "fa fa-twitter", "aria-hidden": "true" })
          ),
          " "
        )
      ),
      React.createElement(
        "div",
        { className: "col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2 col-lg-8 col-md-8 col-sm-8 col-xs-8" },
        React.createElement(Box, { boxContent: React.createElement(QuoteAuthor, { quote: this.props.quote, author: this.props.author }) })
      ),
      React.createElement(Footer, { footerText: "Written and coded by Srinidhi Srinivasa Raghavan" })
    );
  };

  return AppComponent;
}(React.Component);

var App = function (_React$Component7) {
  _inherits(App, _React$Component7);

  function App(props) {
    _classCallCheck(this, App);

    var _this7 = _possibleConstructorReturn(this, _React$Component7.call(this, props));

    _this7.state = {
      author: "",
      quote: ""
    };
    _this7.getQuote = _this7.getQuote.bind(_this7);
    return _this7;
  }

  App.prototype.componentWillMount = function componentWillMount() {
    this.getQuote();
  };

  App.prototype.getQuote = function getQuote() {
    var _this8 = this;

    $.ajax({
      headers: {
        "X-Mashape-Key": "1jxbUQ3u28mshqPhejtRXPU2DG6qp1aEcWhjsnBiSxPFXVcA8B"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      type: 'get',
      dataType: 'json',
      error: function error(data) {
        alert("Error in fetching quotes" + JSON.stringify(data));
      },
      success: function success(data) {
        _this8.setState({
          author: data.author,
          quote: data.quote
        });
      }
    });
  };

  App.prototype.render = function render() {
    return React.createElement(AppComponent, {
      author: this.state.author,
      quote: this.state.quote,
      getQuote: this.getQuote
    });
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));