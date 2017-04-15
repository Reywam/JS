import { CShape } from "./CShape";

export class CCircle extends CShape {
  private x: number;
  private y: number;
  private radius: number;

  constructor(radius: number, x: number, y: number, fillColor: string, borderColor: string) {
    super(fillColor, borderColor);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.round(this.radius * this.radius * Math.PI);
  }

  public calculatePerimeter(): number {
    return Math.round(this.radius * 2 * Math.PI);
  }

  public changeProperties(radius: number, x: number, y: number, fillColor: string, borderColor: string): void {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.setFillColor(fillColor);
    this.setBorderColor(borderColor);
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = this.getBorderColor();
    context.stroke();
  }
}
