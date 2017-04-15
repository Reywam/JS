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
    var CShape_1, CTriangle;
    return {
        setters: [
            function (CShape_1_1) {
                CShape_1 = CShape_1_1;
            }
        ],
        execute: function () {
            CTriangle = (function (_super) {
                __extends(CTriangle, _super);
                function CTriangle(x1, y1, x2, y2, x3, y3, fillColor, borderColor) {
                    var _this = _super.call(this, fillColor, borderColor) || this;
                    _this.x1 = x1;
                    _this.y1 = y1;
                    _this.x2 = x2;
                    _this.y2 = y2;
                    _this.x3 = x3;
                    _this.y3 = y3;
                    return _this;
                }
                CTriangle.prototype.calculatePerimeter = function () {
                    return Math.round(Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2))
                        + Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2))
                        + Math.sqrt(Math.pow(this.x1 - this.x3, 2) + Math.pow(this.y1 - this.y3, 2)));
                };
                CTriangle.prototype.calculateArea = function () {
                    return Math.round(0.5 * Math.abs((this.x1 - this.x3) * (this.y2 - this.y3) + (this.x2 - this.x3) * (this.y1 - this.y3)));
                };
                CTriangle.prototype.changeProperties = function (x1, y1, x2, y2, x3, y3, fillColor, borderColor) {
                    this.x1 = x1;
                    this.y1 = y1;
                    this.x2 = x2;
                    this.y2 = y2;
                    this.x3 = x3;
                    this.y3 = y3;
                    this.setFillColor(fillColor);
                    this.setBorderColor(borderColor);
                };
                CTriangle.prototype.draw = function (context) {
                    context.fillStyle = this.getFillColor();
                    context.beginPath();
                    context.moveTo(this.x1, this.y1);
                    context.lineTo(this.x2, this.y2);
                    context.lineTo(this.x3, this.y3);
                    context.fill();
                    context.closePath();
                    context.lineWidth = 5;
                    context.strokeStyle = this.getBorderColor();
                    context.stroke();
                };
                return CTriangle;
            }(CShape_1.CShape));
            exports_1("CTriangle", CTriangle);
        }
    };
});
