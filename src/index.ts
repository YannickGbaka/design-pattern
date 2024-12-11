/* BUILDER PATTERN */

import Director from './builder-pattern/director';
import Singleton from './singleton/singleton';
import Circle from './prototype/circle';

const main = () =>{
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

    // const s1 = Singleton.getInstance();
    // const s2 = Singleton.getInstance();

    // if(s1 === s2){
    //     console.log('Singleton works, both variables contain the same instance.');
    // } else {
    //     console.log('Singleton failed, variables contain different instances.');
    // }
    // s1.someBusinessLogic();
    // s2.someBusinessLogic();

    const circle1 = new Circle(10);
    const circle2 = circle1.clone();
    

    if(circle1 === circle2){
        console.log('Same object');
    }else{
        console.log('real clone of circle');
    }
}

// const director = new Director();
main();
// main(director);

