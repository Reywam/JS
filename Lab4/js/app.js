var ShapesList = React.createClass({			
  render: function() {
    return (
      <div className = "container-fluid">
				<span>Shape:</span>			
				<select className = "pull-right" id = "shapes">
					<option>Choose shape</option>
					<option id = "circle">Circle</option>
					<option id = "triangle">Triangle</option>
					<option id = "rectangle">Rectangle</option>
				</select>
			</div>
    );
  }
});

var ShapeFillColor = React.createClass({
  render: function() {
    return (
      <div className = "container-fluid">
				<span>Fill Color:</span> 
				<input type = "text" className = "pull-right span3 form-control" id = "fillColor"></input>
			</div>
    );
  }
});

var ShapeBorderColor = React.createClass({
  render: function() {
    return (
      <div className = "container-fluid">
				<span>Border Color:</span> 
				<input type = "text" className = "pull-right span3 form-control" id = "borderColor"></input>
			</div>
    );
  }
});

var CircleProperties = React.createClass({
	
	getInitialState: function() {
    return {
      visible: false
    };
  },
	
  render: function() {
		
		var visible = this.state.visible;
		
    return (
      <div className = {'pull-right' + (visible ? '': 'collapse')}  id = "circleProperties">
				<div className = "container-fluid">
					<span>CenterX:</span>
					<input type = "text" className = "pull-right  form-control" state = "200" id = "centerX"></input>
				</div>
				<div className = "container-fluid">
					<span>CenterY:</span>
					<input type = "text" className = "pull-right  form-control" state = "340" id = "centerY"></input>
				</div>
				<div className = "container-fluid">
					<span>Radius:</span>
					<input type = "text" className = "pull-right form-control" state = "20" id = "radius"></input>
				</div>				
			</div>
    );
  }
});

var TriangleProperties = React.createClass({
	
	getInitialState: function() {
    return {
      visible: false
    };
  },
	
  render: function() {
		
		var visible = this.state.visible;
		
    return (
      <div className = {'pull-right ' + (visible ? '': 'collapse')} id = "triangleProperties">
				<div className= "container-fluid">
					<span>X1:</span>
					<input type = "text" className = "container-fluid form-control" state = "400" id = "trX1"></input>
				</div>
				<div className = "container-fluid">
					<span>Y1:</span>
					<input type = "text" className = "container-fluid form-control" state = "250" id = "trY1"></input>
				</div>
				
				<div className = "container-fluid">
					<span>X2:</span>
					<input type = "text" className = "container-fluid form-control" state = "300" id = "trX2"></input>
				</div>
				<div className = "container-fluid">
					<span>Y2:</span>
					<input type = "text" className = "container-fluid form-control" state = "360" id = "trY2"></input>
				</div>
				
				<div className = "container-fluid">
					<span>X3:</span>
					<input type = "text" className = "container-fluid form-control" state = "500" id = "trX3"></input>
				</div>
				<div className = "container-fluid">
					<span>Y3:</span>
					<input type = "text" className = "container-fluid form-control" state = "360" id = "trY3"></input>
				</div>
			</div>
    );
  }
});

var RectangleProperties = React.createClass({
	
	getInitialState: function() {
    return {
      visible: false
    };
  },
	
  render: function() {
		
		var visible = this.state.visible;		
		
    return (						
      <div className = {'pull-right ' + (visible ? '': 'collapse')} id = "rectangleProperties">
				<div className = "container-fluid">
					<span>X1:</span>
					<input type = "text" className = "container-fluid form-control" state = "100" id = "rectX1"></input>
				</div>
				<div className = "container-fluid">
					<span>Y1:</span>
					<input type = "text" className = "container-fluid form-control" state = "100"  id = "rectY1"></input>
				</div>
				
				<div className = "container-fluid">
					<span>X2:</span>
					<input type = "text" className = "container-fluid form-control" state = "200" id = "rectX2"></input>
				</div>
				<div className = "container-fluid">
					<span>Y2:</span>
					<input type = "text" className = "container-fluid form-control" state = "200" id = "rectY2"></input>
				</div>
			</div>			
    );
  }
});

var Interface = React.createClass({
	
  render: function() {
    return (			
      <div className = "alert-block pull-left">				
				<ShapesList />
				<ShapeFillColor />
				<ShapeBorderColor />								
				<CircleProperties />
				<TriangleProperties />
				<RectangleProperties />
			</div>
    );
  }
});

var Canvas = React.createClass({
	
  render: function() {
    return (			
      <div>
				<canvas height = "680" width = "900" id = "canvas" className = "canvas pull-left">Обновите браузер</canvas>		
			</div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className = "app">				
				<Interface/>
				<Canvas />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);