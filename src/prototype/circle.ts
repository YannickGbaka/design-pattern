import ShapePrototype from "./shapePrototype";

class Circle implements ShapePrototype{
    private radius: number;

    constructor(radius: number){
        this.radius = radius;
    }

    public clone() : ShapePrototype{
        return new Circle(this.radius);
    }

    setRadius(value: number){
        if(value < 0)
            throw new Error("Radius can't be negative");
        this.radius =  value;
    }
}

export default Circle;