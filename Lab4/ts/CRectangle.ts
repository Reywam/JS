import { CShape } from "./CShape";

export class CRectangle extends CShape {
  private x1: number;
  private y1: number;

  private x2: number;
  private y2: number;

  constructor(x1: number, y1: number, x2: number, y2: number, fillColor: string, borderColor: string) {
    super(fillColor, borderColor);

    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;
  }

  public calculateArea(): number {
    return Math.round((this.x2 - this.x1) * (this.y2 - this.y1));
  }

  public calculatePerimeter(): number {
    return Math.round(2 * ((this.x2 - this.x1) + (this.y2 - this.y1)));
  }

  public changeProperties(x1: number, y1: number, x2: number, y2: number, fillColor: string, borderColor: string) {
    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;

    this.setFillColor(fillColor);
    this.setBorderColor(borderColor);
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.getFillColor();
    context.fillRect(this.x1, this.y1, this.x2, this.y2);

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = this.getBorderColor();
    context.rect(this.x1, this.y1, this.x2, this.y2);
    context.stroke();
  }
}
