class ConcreteBuilider1 {
    constructor() {
        this.reset();
    }
    producePartA() {
        this.product.parts.push('PartA1');
    }
    reset() {
        this.product = new Product1();
    }
    produceA() {
        this.product.parts.push('PartA1');
    }
    producePartB() {
        this.product.parts.push('PartB1');
    }
    producePartC() {
        this.product.parts.push('partC1');
    }
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
class Product1 {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log('Product parts: ' + this.parts.join(', '));
    }
}
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildMinimalViableProduct() {
        this.builder.producePartA();
    }
    buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
function clientCode(director) {
    const builder = new ConcreteBuilider1();
    director.setBuilder(builder);
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
const director = new Director();
clientCode(director);
//# sourceMappingURL=index.js.map