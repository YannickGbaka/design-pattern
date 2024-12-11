// Builder interface that declares construction steps for creating a product
// All concrete builders must implement these methods
interface Builder {
    // Builds the first part of the product
    buildPartA(): void;
    
    // Builds the second part of the product
    buildPartB(): void;
    
    // Builds the third part of the product
    buildPartC(): void;
}

export default Builder;