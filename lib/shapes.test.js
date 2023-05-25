const Shape = require("./shapes");

describe("Shape", () => {
  describe("renderShape", () => {
    it("should return a corresponding string representing a circle svg given the shape color", () => {
      const expected = ``;
      const shape = new Shape();
      shape.shapeColor = "blue";
      expect(shape.renderShape()).toEqual(expected);
    });
  });
});
