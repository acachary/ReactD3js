
var React = require('react'),
    _ = require('lodash'),
    d3 = require('d3');

var DataMap = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <svg width = "700" height = "500">
                        
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
});

React.render(<DataMap />, document.querySelectorAll('.worldMap')[0]);
