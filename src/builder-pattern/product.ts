class Product1 {
    public parts : string[];

    constructor(){
        this.parts = [];
    }

    public listParts() : void {
        console.log(`Product parts: ${this.parts.join('-')}`);
    }
}

export default Product1;