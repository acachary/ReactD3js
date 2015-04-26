
var React = require('react'),
    _ = require('lodash'),
    d3 = require('d3');

var DataMap = React.createClass({
	componentWillMount: function()
	{
		this.loadRawData();
	},

	getInitialState: function()
	{
		return{rawData:[]};
	},

	loadRawData: function()
	{

	},

    render: function ()
    {
    	if(this.state.rawData.length == 0)
    	{
    		return(
    			<div>
    				<h3 class="loading">Loading...</h3>
	    			<div class="spinner">
	    			  <div class="bounce1"></div>
	    			  <div class="bounce2"></div>
	    			  <div class="bounce3"></div>
	    			</div>
    			</div>
    		);
    	}
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
