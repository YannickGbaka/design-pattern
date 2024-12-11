import ShapePrototype from "./shapePrototype";

// Concrete implementation of the Prototype pattern for Circle shapes
class Circle implements ShapePrototype {
    // Stores the radius of the circle
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Creates a new Circle instance with the same radius
    // Implementation of the Prototype pattern's clone method
    public clone(): ShapePrototype {
        return new Circle(this.radius);
    }

    // Validates and sets the radius value
    // Throws an error if attempting to set a negative radius
    setRadius(value: number) {
        if (value < 0)
            throw new Error("Radius can't be negative");
        this.radius = value;
    }
}

export default Circle;