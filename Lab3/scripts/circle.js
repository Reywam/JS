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
}