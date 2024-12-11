import Product from './product';

class ConcreteProduct2 implements Product{
    public operation(): string {
        return "Result of the concreate product2";
    }
}

export default ConcreteProduct2;