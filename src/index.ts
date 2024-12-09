import ConcreateBuilderA from "./builder-pattern/concrete_builder"
import Director from './builder-pattern/director';

const main = (director: Director) =>{
    const concreateBuilderA = new ConcreateBuilderA();

    director.setBuilder(concreateBuilderA);
    director.buildFullFeaturedProduct();


    concreateBuilderA.getProduct().listParts();

    director.buildMinimalViableProduct();
    concreateBuilderA.getProduct().listParts();
    
    // build without director 

    concreateBuilderA.buildPartA();
    concreateBuilderA.buildPartB();
    concreateBuilderA.getProduct().listParts();
}

const director = new Director();

main(director);
