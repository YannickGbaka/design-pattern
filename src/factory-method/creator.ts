import Product from "./product";

interface Creator {
    factoryMethod(): Product;
}

export default Creator;