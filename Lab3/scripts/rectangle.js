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
}