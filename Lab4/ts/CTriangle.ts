import { CShape } from "./CShape";

export class CTriangle extends CShape {
  private x1: number;
  private y1: number;

  private x2: number;
  private y2: number;

  private x3: number;
  private y3: number;

  constructor(
  x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, fillColor: string, borderColor: string) {
    super(fillColor, borderColor);

    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;

    this.x3 = x3;
    this.y3 = y3;
  }

  public calculatePerimeter(): number {
    return Math.round(
      Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2))
      + Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2))
      + Math.sqrt(Math.pow(this.x1 - this.x3, 2) + Math.pow(this.y1 - this.y3, 2)));
  }

  public calculateArea(): number {
    return Math.round(
      0.5 * Math.abs((this.x1 - this.x3) * (this.y2 - this.y3) + (this.x2 - this.x3) * (this.y1 - this.y3)));
  }

  public changeProperties(
  x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, fillColor: string, borderColor: string) {
    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;

    this.x3 = x3;
    this.y3 = y3;

    this.setFillColor(fillColor);
    this.setBorderColor(borderColor);
  }

  public draw(context: CanvasRenderingContext2D): void {
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
  }
}
