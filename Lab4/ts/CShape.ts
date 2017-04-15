import { IShape } from "./IShape";

export abstract class CShape implements IShape {
  private fillColor: string;
  private borderColor: string;

  constructor(fillColor: string, borderColor: string) {
    this.fillColor = fillColor;
    this.borderColor = borderColor;
  }

  public setFillColor(color: string): void {
    this.fillColor = color;
  }

  public getFillColor(): string {
    return this.fillColor;
  }

  public setBorderColor(color: string): void {
    this.borderColor = color;
  }

  public getBorderColor(): string {
    return this.borderColor;
  }

  public abstract calculateArea(): number;
  public abstract calculatePerimeter(): number;

  public abstract draw(context: CanvasRenderingContext2D): void;
}
