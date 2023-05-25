import { Triangle, Circle, Square } from './lib/shapes.js';


describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle(0, 0, 100);
    const expected = '`<polygon points="150, 18 244, 182 56, 182 "fill="${this.shapeColor} />`>';
    expect(triangle.render()).toBe(expected);
  });

  test('Circle should render correctly', () => {
    const circle = new Circle(0, 0, 50);
    const expected = `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`;
    expect(circle.render()).toBe(expected);
  });

  test('Square should render correctly', () => {
    const square = new Square(0, 0, 100);
    const expected = `<rect width="300" height="300" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />`
    expect(square.render()).toBe(expected);
  });
});