System.register(["./CShape"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var CShape_1, CCircle;
    return {
        setters: [
            function (CShape_1_1) {
                CShape_1 = CShape_1_1;
            }
        ],
        execute: function () {
            CCircle = (function (_super) {
                __extends(CCircle, _super);
                function CCircle(radius, x, y, fillColor, borderColor) {
                    var _this = _super.call(this, fillColor, borderColor) || this;
                    _this.x = x;
                    _this.y = y;
                    _this.radius = radius;
                    return _this;
                }
                CCircle.prototype.calculateArea = function () {
                    return Math.round(this.radius * this.radius * Math.PI);
                };
                CCircle.prototype.calculatePerimeter = function () {
                    return Math.round(this.radius * 2 * Math.PI);
                };
                CCircle.prototype.changeProperties = function (radius, x, y, fillColor, borderColor) {
                    this.x = x;
                    this.y = y;
                    this.radius = radius;
                    this.setFillColor(fillColor);
                    this.setBorderColor(borderColor);
                };
                CCircle.prototype.draw = function (context) {
                    context.beginPath();
                    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                    context.fillStyle = this.getFillColor();
                    context.fill();
                    context.lineWidth = 3;
                    context.strokeStyle = this.getBorderColor();
                    context.stroke();
                };
                return CCircle;
            }(CShape_1.CShape));
            exports_1("CCircle", CCircle);
        }
    };
});
