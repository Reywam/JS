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