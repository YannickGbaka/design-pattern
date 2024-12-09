/* BUILDER PATTERN */

import ConcreateBuilderA from "./builder-pattern/concrete_builder"
import Director from './builder-pattern/director';
import Singleton from './singleton/singleton';

const main = (director: Director) =>{
    // const concreateBuilderA = new ConcreateBuilderA();

    // director.setBuilder(concreateBuilderA);
    // director.buildFullFeaturedProduct();


    // concreateBuilderA.getProduct().listParts();

    // director.buildMinimalViableProduct();
    // concreateBuilderA.getProduct().listParts();
    
    // // build without director 

    // concreateBuilderA.buildPartA();
    // concreateBuilderA.buildPartB();
    // concreateBuilderA.getProduct().listParts();

    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if(s1 === s2){
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
    s1.someBusinessLogic();
    s2.someBusinessLogic();
}

const director = new Director();

main(director);

