function Shape(fillColor, borderColor)
{		
	this.fillColor = fillColor;
	this.borderColor = borderColor;		
}

Shape.prototype.setFillColor = function(fillColor)
{
	this.fillColor = fillColor;
}

Shape.prototype.getFillColor = function()
{
	return this.fillColor;
}

Shape.prototype.setBorderColor = function(borderColor)
{
	this.borderColor = borderColor;
}

Shape.prototype.getBorderColor = function()
{
	return this.borderColor;
}

Shape.prototype.draw = function()
{
	
}

Shape.prototype.calculateArea = function()
{
	
}

Shape.prototype.calculatePerimeter = function()
{
	
};
function Circle(radius, centerX, centerY) 
{			
	this.radius = radius;
	this.centerX = centerX;
	this.centerY = centerY;	
}

Circle.prototype = Object.create(Shape.prototype);
 
 Circle.prototype.changeProperties = function (radius, centerX, centerY, fillColor, borderColor)
 {
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;		
		
		this.fillColor = fillColor;
		this.borderColor = borderColor;
 }
 
 Circle.prototype.calculateArea = function()
{
	return Math.round(this.radius * this.radius * Math.PI);
}

Circle.prototype.calculatePerimeter = function()
{
	return Math.round(this.radius * 2 * Math.PI);
}

Circle.prototype.draw = function(context)
{
	context.beginPath();
	context.arc(this.centerX, this.centerY, circle.radius, 0, 2 * Math.PI, false);
	context.fillStyle = this.fillColor;
	context.fill();
	context.lineWidth = 3;
	context.strokeStyle = circle.borderColor;
	context.stroke();
};
function Triangle(X1, Y1, X2, Y2, X3, Y3)
{	
		this.X1 = X1;
		this.Y1 = Y1;
		
		this.X2 = X2;
		this.Y2 = Y2;
		
		this.X3 = X3;
		this.Y3 = Y3;	
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.calculatePerimeter = function()
{
	return Math.round(
		Math.sqrt(Math.pow(this.X2 - this.X1, 2) + Math.pow(this.Y2 - this.Y1, 2))
		+ Math.sqrt(Math.pow(this.X3 - this.X2, 2) + Math.pow(this.Y3 - this.Y2, 2))
		+ Math.sqrt(Math.pow(this.X1 - this.X3, 2) + Math.pow(this.Y1 - this.Y3, 2))
		)				
}
	
Triangle.prototype.calculateArea = function()
{
	return Math.round(
		0.5 * Math.abs((this.X1 - this.X3) * (this.Y2 - this.Y3) + (this.X2 - this.X3) * (this.Y1 - this.Y3))
	)
}

Triangle.prototype.changeProperties = function(X1, Y1, X2, Y2, X3, Y3, fillColor, borderColor)
{
	this.X1 = X1;
	this.Y1 = Y1;
	
	this.X2 = X2;
	this.Y2 = Y2;
	
	this.X3 = X3;
	this.Y3 = Y3;
	
	this.fillColor = fillColor;
	this.borderColor = borderColor;
}

Triangle.prototype.draw = function(context)
{
	context.fillStyle = this.fillColor;
	
	context.beginPath();
	context.moveTo(this.X1, this.Y1);
	context.lineTo(this.X2, this.Y2);
	context.lineTo(this.X3, this.Y3);
	context.fill();
	context.closePath();
	
	context.lineWidth = 5;
	context.strokeStyle = this.borderColor;
	context.stroke();
};
function Rectangle(X1, Y1, X2, Y2)
{
	this.X1 = X1;
	this.Y1 = Y1;
	
	this.X2 = X2;
	this.Y2 = Y2;	
}

Rectangle.prototype = Object.create(Shape.prototype);
	
Rectangle.prototype.changeProperties = function(X1, Y1, X2, Y2, fillColor, borderColor)
{
	this.X1 = X1;
	this.Y1 = Y1;
	
	this.X2 = X2;
	this.Y2 = Y2;
	
	this.fillColor = fillColor;
	this.borderColor = borderColor;
}

Rectangle.prototype.calculateArea = function()
{
	return Math.round((this.X2 - this.X1)*(this.Y2 - this.Y1));
}

Rectangle.prototype.calculatePerimeter = function()
{
	return Math.round(2 * ((this.X2 - this.X1) + (this.Y2 - this.Y1)));
}

Rectangle.prototype.draw = function(context)
{
	context.fillStyle = this.fillColor;
	context.fillRect(this.X1, this.Y1, this.X2, this.Y2);
	
	context.beginPath();
	context.lineWidth = "5";
	context.strokeStyle = this.borderColor;
	context.rect(this.X1, this.Y1, this.X2, this.Y2); 
	context.stroke();		
};
var canvas = document.getElementById("canvas"),
				ctx = canvas.getContext('2d');														
				
// Список фигур
var shapesList = document.getElementById("shapes");

var circle = new Circle();
var triangle = new Triangle();
var rectangle = new Rectangle();

function ChooseCurrentShape(shapesList)
{
	var currentShape;
	switch(shapesList.value)
		{
			case "Circle":
				currentShape = circle;
				break;
			case "Rectangle":
				currentShape = rectangle;
				break;
			case "Triangle":
				currentShape = triangle;
				break;							
			default:
				break;
		}
		
		return currentShape;
}

function ChangeShapeProperties(currentShape, fillColor, borderColor)
{
	switch(currentShape)
		{			
			case circle:
				var circleProperties = document.getElementById("circleProperties");
				circleProperties.style.display = "block";
				
				var x = document.getElementById("centerX");
				var y = document.getElementById("centerY");
				var r = document.getElementById("radius");
				
				currentShape.changeProperties(r.value, x.value, y.value, fillColor.value, borderColor.value);				
				break;
			case triangle:
				var triangleProperties = document.getElementById("triangleProperties");
				triangleProperties.style.display = "block";
				
				var trX1 = document.getElementById("trX1");
				var trY1 = document.getElementById("trY1");
				
				var trX2 = document.getElementById("trX2");
				var trY2 = document.getElementById("trY2");
				
				var trX3 = document.getElementById("trX3");
				var trY3 = document.getElementById("trY3");
				
				currentShape.changeProperties(trX1.value, trY1.value, trX2.value, trY2.value, trX3.value, trY3.value, fillColor.value, borderColor.value);
				break;
			case rectangle:
				var rectangleProperties = document.getElementById("rectangleProperties");
				rectangleProperties.style.display = "block";
			
				var rectX1 = document.getElementById("rectX1");
				var rectY1 = document.getElementById("rectY1");
				
				var rectX2 = document.getElementById("rectX2");
				var rectY2 = document.getElementById("rectY2");
				
				currentShape.changeProperties(rectX1.value, rectY1.value, rectX2.value, rectY2.value, fillColor.value, borderColor.value);
				break;
			default:
				break;
		}
}

function HideProperties(currentShape)
{
	if(currentShape != circle)
		{
			var circleProperties = document.getElementById("circleProperties");
			circleProperties.style.display = "none";
		}
		
		if(currentShape != triangle)
		{
			var triangleProperties = document.getElementById("triangleProperties");
			triangleProperties.style.display = "none";
		}
		
		if(currentShape != rectangle)
		{
			var rectangleProperties = document.getElementById("rectangleProperties");
			rectangleProperties.style.display = "none";
		}
}

// Цикл для отрисовки сцены
setInterval(
	function()
	{		
		var currentShape = ChooseCurrentShape(shapesList);
		
		var fillColor = document.getElementById("fillColor");
		var borderColor = document.getElementById("borderColor");
		
		ChangeShapeProperties(currentShape, fillColor, borderColor);
		
		HideProperties(currentShape);
		
		// Очистка канваса
		ctx.clearRect(0, 0, canvas.width, canvas.height);		
				
		if(currentShape != undefined)
		{
			currentShape.draw(ctx);
			// Отрисовка периметра и площади
			ctx.fillStyle = "blue";
			ctx.font = "italic 30pt Arial";
			ctx.fillText("Area: " + currentShape.calculateArea(), 20, canvas.height - 35);
			ctx.fillText("Perimeter: " + currentShape.calculatePerimeter(), 20, canvas.height);		
		}
	}
	, 100
)