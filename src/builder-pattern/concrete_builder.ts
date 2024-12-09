import Builder from './interface_builder';
import Product1 from './product';

class ConcreateBuilderA implements Builder {
    private product : Product1;

    constructor(){
        this.reset();
    }

    public reset(){
        this.product = new Product1();
    }
    
    public buildPartA() : void {
        this.product.parts.push('PartA1');
    }

    public buildPartB() : void {
        this.product.parts.push('PartB1');
    }

    public buildPartC() : void {
        this.product.parts.push('ParC1');
    }

    public getProduct() : Product1 {
        const result = this.product;
        this.reset();
        return result;
    }

}

export default ConcreateBuilderA;