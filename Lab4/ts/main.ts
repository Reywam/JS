import { IShape } from "./IShape";
import { CShape } from "./CShape";
import { CCircle } from "./CCircle";
import { CTriangle } from "./CTriangle";
import { CRectangle } from "./CRectangle";

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

let shapesList: HTMLInputElement = <HTMLInputElement> document.getElementById("shapes");

let circle: CCircle;
circle = new CCircle(10, 20, 20, "red", "blue");

let triangle: CTriangle;
triangle = new CTriangle(100, 50, 200, 200, 200, 300, "red", "black");

let rectangle: CRectangle;
rectangle = new CRectangle(200, 200, 400, 400, "pink", "black");

function ChooseCurrentShape(value: string): CShape
{
	let currentShape: CShape;
	
	switch(value)
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
};

function ChangeShapeProperties(currentShape: CShape, fillColor: HTMLInputElement, borderColor: HTMLInputElement)
{	
	switch(currentShape)
	{			
		case circle:
			let circleProperties: HTMLInputElement = <HTMLInputElement> document.getElementById("circleProperties");
			circleProperties.style.display = "block";
			
			let x: HTMLInputElement = <HTMLInputElement> document.getElementById("centerX");
			let y: HTMLInputElement = <HTMLInputElement> document.getElementById("centerY");
			let r: HTMLInputElement = <HTMLInputElement> document.getElementById("radius");	
						
			if(x.value != ""
			|| y.value != ""
			|| r.value != ""
			|| fillColor.value != ""
			|| borderColor.value != "")
			{
				circle.changeProperties(Number(r.value), Number(x.value), Number(y.value), fillColor.value, borderColor.value);			
			}
			
			currentShape = circle;
			break;
		case triangle:
			let triangleProperties = document.getElementById("triangleProperties");
			triangleProperties.style.display = "block";
			
			let trX1: HTMLInputElement = <HTMLInputElement> document.getElementById("trX1");
			let trY1: HTMLInputElement = <HTMLInputElement> document.getElementById("trY1");
			
			let trX2: HTMLInputElement = <HTMLInputElement> document.getElementById("trX2");
			let trY2: HTMLInputElement = <HTMLInputElement> document.getElementById("trY2");
			
			let trX3: HTMLInputElement = <HTMLInputElement> document.getElementById("trX3");
			let trY3: HTMLInputElement = <HTMLInputElement> document.getElementById("trY3");
			
			if(trX1.value != ""
			|| trY1.value != ""
			|| trX2.value != ""
			|| trY2.value != ""
			|| trX3.value != ""
			|| trY3.value != ""
			|| fillColor.value != ""
			|| borderColor.value != "")
			{
				triangle.changeProperties(Number(trX1.value), Number(trY1.value), Number(trX2.value),
				Number(trY2.value), Number(trX3.value), Number(trY3.value), fillColor.value, borderColor.value);
			}
			currentShape = triangle;
			break;
		case rectangle:
			let rectangleProperties = document.getElementById("rectangleProperties");
			rectangleProperties.style.display = "block";
		
			let rectX1: HTMLInputElement = <HTMLInputElement> document.getElementById("rectX1");
			let rectY1: HTMLInputElement = <HTMLInputElement> document.getElementById("rectY1");
			
			let rectX2: HTMLInputElement = <HTMLInputElement> document.getElementById("rectX2");
			let rectY2: HTMLInputElement = <HTMLInputElement> document.getElementById("rectY2");
			
			if(rectX1.value != ""
			|| rectY1.value != ""
			|| rectX2.value != ""
			|| rectY2.value != ""
			|| fillColor.value != ""
			|| borderColor.value != "")
			{
				rectangle.changeProperties(Number(rectX1.value), Number(rectY1.value),
				Number(rectX2.value), Number(rectY2.value), fillColor.value, borderColor.value);
			}
			currentShape = rectangle;
			break;
		default:
			break;
	}
}

function HideProperties(currentShape: CShape): void
{
	if(currentShape != circle)
	{
		let circleProperties = document.getElementById("circleProperties");
		circleProperties.style.display = "none";
	}
	
	if(currentShape != triangle)
	{
		let triangleProperties = document.getElementById("triangleProperties");
		triangleProperties.style.display = "none";
	}
	
	if(currentShape != rectangle)
	{
		let rectangleProperties = document.getElementById("rectangleProperties");
		rectangleProperties.style.display = "none";
	}
}

setInterval(()=>
{	
	let currentShape: CShape;
  currentShape = ChooseCurrentShape(shapesList.value);	
	
	let fillColor: HTMLInputElement = <HTMLInputElement> document.getElementById("fillColor");
	let borderColor: HTMLInputElement = <HTMLInputElement> document.getElementById("borderColor");
	
	ChangeShapeProperties(currentShape, fillColor, borderColor);
	
	HideProperties(currentShape);
	
	context.clearRect(0, 0, canvas.width, canvas.height);		
	
	if(currentShape != undefined)
	{
		currentShape.draw(context);		
		context.fillStyle = "blue";
		context.font = "italic 30pt Arial";
		context.fillText("Area: " + currentShape.calculateArea(), 20, canvas.height - 35);
		context.fillText("Perimeter: " + currentShape.calculatePerimeter(), 20, canvas.height);		
	}			
}, 100)