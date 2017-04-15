System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CShape;
    return {
        setters: [],
        execute: function () {
            CShape = (function () {
                function CShape(fillColor, borderColor) {
                    this.fillColor = fillColor;
                    this.borderColor = borderColor;
                }
                CShape.prototype.setFillColor = function (color) {
                    this.fillColor = color;
                };
                CShape.prototype.getFillColor = function () {
                    return this.fillColor;
                };
                CShape.prototype.setBorderColor = function (color) {
                    this.borderColor = color;
                };
                CShape.prototype.getBorderColor = function () {
                    return this.borderColor;
                };
                return CShape;
            }());
            exports_1("CShape", CShape);
        }
    };
});
