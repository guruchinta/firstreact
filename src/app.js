console.log("App.js is running Successfully");


//JSX - JavaScript XML

// var template = /*#__PURE__*/React.createElement("h1", null, "Does this - change");
var template = (
        <div>
            <h1>First Heading</h1>
            <p>First Paragraph</p>
            <ul>
                <li>Number 1</li>
                <li>Number 2</li>
                <li>Number 3</li>
            </ul>
        </div>
    
        );
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);