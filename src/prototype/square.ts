import ShapePrototype from "./shapePrototype";

// Concrete implementation of the Prototype pattern for Square shapes
class Square implements ShapePrototype {
    // Stores the length of the square's side
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    // Creates a new Square instance with the same side length
    // Implementation of the Prototype pattern's clone method
    public clone(): ShapePrototype {
        return new Square(this.side);
    }
}

export default Square;