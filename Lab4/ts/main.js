System.register(["./CCircle", "./CRectangle", "./CTriangle"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ChooseCurrentShape(value) {
        var currentShape;
        switch (value) {
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
    function ChangeShapeProperties(currentShape, fillColor, borderColor) {
        switch (currentShape) {
            case circle:
                var circleProperties = document.getElementById("circleProperties");
                circleProperties.style.display = "block";
                var x = document.getElementById("centerX");
                var y = document.getElementById("centerY");
                var r = document.getElementById("radius");
                if (x.value !== ""
                    || y.value !== ""
                    || r.value !== ""
                    || fillColor.value !== ""
                    || borderColor.value !== "") {
                    circle.changeProperties(Number(r.value), Number(x.value), Number(y.value), fillColor.value, borderColor.value);
                }
                currentShape = circle;
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
                if (trX1.value !== ""
                    || trY1.value !== ""
                    || trX2.value !== ""
                    || trY2.value !== ""
                    || trX3.value !== ""
                    || trY3.value !== ""
                    || fillColor.value !== ""
                    || borderColor.value !== "") {
                    triangle.changeProperties(Number(trX1.value), Number(trY1.value), Number(trX2.value), Number(trY2.value), Number(trX3.value), Number(trY3.value), fillColor.value, borderColor.value);
                }
                currentShape = triangle;
                break;
            case rectangle:
                var rectangleProperties = document.getElementById("rectangleProperties");
                rectangleProperties.style.display = "block";
                var rectX1 = document.getElementById("rectX1");
                var rectY1 = document.getElementById("rectY1");
                var rectX2 = document.getElementById("rectX2");
                var rectY2 = document.getElementById("rectY2");
                if (rectX1.value !== ""
                    || rectY1.value !== ""
                    || rectX2.value !== ""
                    || rectY2.value !== ""
                    || fillColor.value !== ""
                    || borderColor.value !== "") {
                    rectangle.changeProperties(Number(rectX1.value), Number(rectY1.value), Number(rectX2.value), Number(rectY2.value), fillColor.value, borderColor.value);
                }
                currentShape = rectangle;
                break;
            default:
                break;
        }
    }
    function HideProperties(currentShape) {
        if (currentShape !== circle) {
            var circleProperties = document.getElementById("circleProperties");
            circleProperties.style.display = "none";
        }
        if (currentShape !== triangle) {
            var triangleProperties = document.getElementById("triangleProperties");
            triangleProperties.style.display = "none";
        }
        if (currentShape !== rectangle) {
            var rectangleProperties = document.getElementById("rectangleProperties");
            rectangleProperties.style.display = "none";
        }
    }
    var CCircle_1, CRectangle_1, CTriangle_1, canvas, context, shapesList, circle, triangle, rectangle;
    return {
        setters: [
            function (CCircle_1_1) {
                CCircle_1 = CCircle_1_1;
            },
            function (CRectangle_1_1) {
                CRectangle_1 = CRectangle_1_1;
            },
            function (CTriangle_1_1) {
                CTriangle_1 = CTriangle_1_1;
            }
        ],
        execute: function () {
            canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");
            shapesList = document.getElementById("shapes");
            circle = new CCircle_1.CCircle(10, 20, 20, "red", "blue");
            triangle = new CTriangle_1.CTriangle(100, 50, 200, 200, 200, 300, "red", "black");
            rectangle = new CRectangle_1.CRectangle(200, 200, 400, 400, "pink", "black");
            ;
            setInterval(function () {
                var currentShape;
                currentShape = ChooseCurrentShape(shapesList.value);
                var fillColor = document.getElementById("fillColor");
                var borderColor = document.getElementById("borderColor");
                ChangeShapeProperties(currentShape, fillColor, borderColor);
                HideProperties(currentShape);
                context.clearRect(0, 0, canvas.width, canvas.height);
                if (currentShape !== undefined) {
                    currentShape.draw(context);
                    context.fillStyle = "blue";
                    context.font = "italic 30pt Arial";
                    context.fillText("Area: " + currentShape.calculateArea(), 20, canvas.height - 35);
                    context.fillText("Area: " + currentShape.calculatePerimeter(), 20, canvas.height);
                }
            }, 100);
        }
    };
});
