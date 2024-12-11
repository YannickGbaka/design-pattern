// Product class that represents the complex object being built
class Product1 {
    // Array to store the different parts of the product
    public parts: string[];

    constructor() {
        this.parts = [];
    }

    // Displays all parts that have been added to the product
    public listParts(): void {
        console.log(`Product parts: ${this.parts.join('-')}`);
    }
}

export default Product1;