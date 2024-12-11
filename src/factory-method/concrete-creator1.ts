import ConcreteProduct1 from "./concrete-product1";
import Creator from "./creator";
import Product from './product';
class ConcreteCreator1 implements Creator{
    public factoryMethod() : Product{
        return new ConcreteProduct1();
    }
}

export default ConcreteCreator1;