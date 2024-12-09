interface Builder{
    producePartA() : void ;
    producePartB() : void ;
    producePartC() : void ;
}

class ConcreteBuilider1 implements Builder{
    private product : Product1;

    constructor(){
        this.reset();
    }
    producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public reset() : void {
        this.product = new Product1();
    }

    public produceA() : void {
        this.product.parts.push('PartA1');
    }

    public producePartB()  : void{
        this.product.parts.push('PartB1');
    }
    public producePartC() : void {
        this.product.parts.push('partC1')
    }


    public getProduct() : Product1{
        const result = this.product;
        this.reset();
        return result;
    }
}


class Product1{
    public parts: string[] = [];

    public listParts() : void{
        console.log('Product parts: ' + this.parts.join(', '))
    }
}

class Director{
    private builder: Builder;

    public setBuilder(builder: Builder) : void{
        this.builder = builder;
    }

    public buildMinimalViableProduct() : void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct() : void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

function clientCode(director : Director){
    const builder = new ConcreteBuilider1();
    director.setBuilder(builder);

     
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