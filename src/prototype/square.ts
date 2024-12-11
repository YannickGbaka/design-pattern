import ShapePrototype from "./shapePrototype";

class Square implements ShapePrototype{
    private side: number;

    constructor(side: number){
        this.side = side;
    }

    public clone() : ShapePrototype{
        return new Square(this.side);
    }
}

export default Square;