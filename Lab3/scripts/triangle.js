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
}