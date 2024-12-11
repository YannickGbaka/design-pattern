import Product from "./product";

class ConcreteProduct1 implements Product{
    public operation() : string {
        return 'result of concreate product1';
    }
}

export default ConcreteProduct1;