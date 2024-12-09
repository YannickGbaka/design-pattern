import Builder from './interface_builder';
class Director {
    private builder : Builder;

    public setBuilder(builder : Builder) : void{
        this.builder = builder;
    }

    public buildMinimalViableProduct() : void {
        this.builder.buildPartA();
    }

    public buildFullFeaturedProduct() : void {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }
}

export default Director;