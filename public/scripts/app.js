"use strict";

console.log("App.js is running Successfully");

//JSX - JavaScript XML

// var template = /*#__PURE__*/React.createElement("h1", null, "Does this - change");
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "First Heading"
    ),
    React.createElement(
        "p",
        null,
        "First Paragraph"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Number 1"
        ),
        React.createElement(
            "li",
            null,
            "Number 2"
        ),
        React.createElement(
            "li",
            null,
            "Number 3"
        )
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
