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
    var CShape_1, CRectangle;
    return {
        setters: [
            function (CShape_1_1) {
                CShape_1 = CShape_1_1;
            }
        ],
        execute: function () {
            CRectangle = (function (_super) {
                __extends(CRectangle, _super);
                function CRectangle(x1, y1, x2, y2, fillColor, borderColor) {
                    var _this = _super.call(this, fillColor, borderColor) || this;
                    _this.x1 = x1;
                    _this.y1 = y1;
                    _this.x2 = x2;
                    _this.y2 = y2;
                    return _this;
                }
                CRectangle.prototype.calculateArea = function () {
                    return Math.round((this.x2 - this.x1) * (this.y2 - this.y1));
                };
                CRectangle.prototype.calculatePerimeter = function () {
                    return Math.round(2 * ((this.x2 - this.x1) + (this.y2 - this.y1)));
                };
                CRectangle.prototype.changeProperties = function (x1, y1, x2, y2, fillColor, borderColor) {
                    this.x1 = x1;
                    this.y1 = y1;
                    this.x2 = x2;
                    this.y2 = y2;
                    this.setFillColor(fillColor);
                    this.setBorderColor(borderColor);
                };
                CRectangle.prototype.draw = function (context) {
                    context.fillStyle = this.getFillColor();
                    context.fillRect(this.x1, this.y1, this.x2, this.y2);
                    context.beginPath();
                    context.lineWidth = 5;
                    context.strokeStyle = this.getBorderColor();
                    context.rect(this.x1, this.y1, this.x2, this.y2);
                    context.stroke();
                };
                return CRectangle;
            }(CShape_1.CShape));
            exports_1("CRectangle", CRectangle);
        }
    };
});
