/* BUILDER PATTERN */

import ConcreteCreator1 from './factory-method/concrete-creator1';
import Circle from './prototype/circle';

const main = () => {
    // Builder Pattern Example (commented out)
    // Demonstrates creating objects using the Builder pattern with and without a director
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

    // Singleton Pattern Example (commented out)
    // Demonstrates that multiple calls to getInstance() return the same instance
    // const s1 = Singleton.getInstance();
    // const s2 = Singleton.getInstance();

    // if(s1 === s2){
    //     console.log('Singleton works, both variables contain the same instance.');
    // } else {
    //     console.log('Singleton failed, variables contain different instances.');
    // }
    // s1.someBusinessLogic();
    // s2.someBusinessLogic();

    // Prototype Pattern Example
    // Demonstrates creating a deep copy of an object using the clone method
    // const circle1 = new Circle(10);
    // const circle2 = circle1.clone();
    
    // // Verify that we have two distinct objects (not the same reference)
    // if (circle1 === circle2) {
    //     console.log('Same object');
    // } else {
    //     console.log('real clone of circle');
    // }

    const concreteCreator1 = new ConcreteCreator1();
    const concreteProduct1 = concreteCreator1.factoryMethod();
}

// Create director instance for builder pattern (commented out)
// const director = new Director();
main();
// main(director);

