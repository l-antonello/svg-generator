// shapes.js
class Shape {
  constructor() {
    this.text = "";
    this.textColor = "";
    this.shapeColor = "";
  }
  setText(text) {
    this.text = text
  }
  setTextColor(color) {
    this.textColor = color
  }
  setShapeColor(shape) {
    this.shapeColor = shape
  }
  render() {
    return ""
  }
}
class Triangle extends Shape{
  render(){
    return `<polygon points="150, 18 244, 182 56, 182 "fill="${this.shapeColor}" />`
  }
}

class Circle extends Shape{
  render(){
    return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`
  }
}
class Square extends Shape{
  render(){
    return `<rect width="300" height="300" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />`
  }
}

module.exports = {
  Shape, Circle, Triangle, Square
};
