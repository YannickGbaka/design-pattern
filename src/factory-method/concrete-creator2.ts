import ConcreteProduct2 from "./concrete-product2";
import Creator from "./creator";
import Product from "./product";

class ConcreteCreator2 implements Creator{
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

export default ConcreteCreator2;