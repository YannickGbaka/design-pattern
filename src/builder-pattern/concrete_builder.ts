import Builder from './interface_builder';
import Product1 from './product';

// Concrete Builder implementation that constructs and assembles parts of the product
// by implementing the Builder interface
class ConcreateBuilderA implements Builder {
    // The builder instance maintains the product being built
    private product: Product1;

    constructor() {
        this.reset();
    }

    // Creates a fresh instance of the product
    public reset(): void {
        this.product = new Product1();
    }
    
    // Builds part A of the product
    public buildPartA(): void {
        this.product.parts.push('PartA1');
    }

    // Builds part B of the product
    public buildPartB(): void {
        this.product.parts.push('PartB1');
    }

    // Builds part C of the product
    public buildPartC(): void {
        this.product.parts.push('ParC1');
    }

    // Returns the final product and resets the builder
    // This allows the builder to be reused for building another product
    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

export default ConcreateBuilderA;