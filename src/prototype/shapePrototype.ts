// Interface defining the prototype pattern contract
// All shapes that can be cloned must implement this interface
interface ShapePrototype {
    // Creates and returns a new instance of the shape with the same properties
    clone(): ShapePrototype;
}

export default ShapePrototype;