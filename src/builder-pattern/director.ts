import Builder from './interface_builder';

// Director class that defines the order of building steps
// Works with any builder that implements the Builder interface
class Director {
    private builder: Builder;

    // Sets the builder instance to be used by the director
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    // Constructs a minimal version of the product
    // Only builds part A
    public buildMinimalViableProduct(): void {
        this.builder.buildPartA();
    }

    // Constructs the full version of the product
    // Builds all parts in a specific order
    public buildFullFeaturedProduct(): void {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }
}

export default Director;