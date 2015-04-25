var React = require('react');
var _ = require('lodash');
var d3 = require('d3');

var dataMap = React.createClass({
	render: function()
	{
		return(
			<div className = "row">
				<div className = "col-md-12">
					<svg width = "700" height = "500">

					</svg>
				</div>
			</div>
		);
	}
});

React.render(<dataMap/>, document.querySelectorAll('.worldMap')[0]);