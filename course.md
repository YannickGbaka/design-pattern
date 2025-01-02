# **Why Patterns ?**

- we don't want to reinvent the wheel!
- To avoid the telescoping pattern (called an anti-pattern: how not to do things)

# **Suggestions for Object Oriented Design**

- Separate out parts of code that vary or change from those that remain the same.
- Always code to an interface and not against a concrete implementation.
- Encapsulate behaviors as much as possible.
- Favor composition over inheritance. Inheritance can result in explosion of classes and also sometimes the base class is fitted with new functionality that isn't applicable to some of its derived classes.
- Interacting components within a system should be as loosely coupled as possible.
- class design should inhibit modification and encourage extension.
- Using patterns in your day to day work, allows exchanging entire implementation concepts with other developers via shared pattern vocabulary.

# **Types of Design Patterns**

divided into three broad categories listed down below : 

- Creational
- Structural
- Behavioural

## Creational Design pattern ( relate to how objects are constructed from classes. ):

- Builder
- Prototype
- Singleton
- Abstract Factory

## **Structural :**

Structural patterns are concerned with the composition of classes i.e. how the classes are made up or constructed. These include:

- Adapter
- Bridge
- Composite
- **Decoration**
- Facade
- Flyweight
- **Proxy**

## **Behavioral**

Behavioral design patterns dictate the interaction of classes and objects amongst each other and the delegation of responsibility. These include:

- Interpereter
- Template
- Chain of Responsability
- Command
- Interator
- Mediator
- Memento
- **Observer**
- State
- Strategy
- **Visitor**

TIPS for interview prep :  going through all the **creational design patterns**, **decorator**, **proxy**, **iterator**, **observer** and **visitor** patterns.

# Builder Pattern : https://refactoring.guru/design-patterns/builder

- *builder pattern encapsulates or hides the process of building a complex object*
- *separates the representation of the object and its construction.*
- **Builder** is a creational design pattern that lets you construct complex objects step by step.
- The pattern allows you to produce different types and representations of an object using the same construction code.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/c81764a1-5504-4562-bd71-580c51ff723b/image.png)

1. Make sure that you can clearly define the common construction steps for building all available product representations. Otherwise, you won’t be able to proceed with implementing the pattern.

1. Declare these steps in the base builder interface.
2. Create a concrete builder class for each of the product representations and implement their construction steps.  Don’t forget about implementing a method for fetching the result of the construction. The reason why this method can’t be declared inside the builder interface is that various builders may construct products that don’t have a common interface. Therefore, you don’t know what would be the return type for such a method. However, if you’re dealing with products from a single hierarchy, the fetching method can be safely added to the base interface.
3. Think about creating a director class. It may encapsulate various ways to construct a product using the same builder object.
4. The client code creates both the builder and the director objects. Before construction starts, the client must pass a builder object to the director. Usually, the client does this only once, via parameters of the director’s class constructor. The director uses the builder object in all further construction. There’s an alternative approach, where the builder is passed to a specific product construction method of the director.
5. The construction result can be obtained directly from the director only if all products follow the same interface. Otherwise, the client should fetch the result from the builder.

# Singleton Pattern : https://refactoring.guru/design-patterns/singleton

- **Singleton** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
- is used to create one and only instance of a class
- Formally the Singleton pattern is defined as ***ensuring that only a single instance of a class exists and a global point of access to it exists***.

## **Solution**

All implementations of the Singleton have these two steps in common:

- **Make the default constructor private**, to prevent other objects from using the `new` operator with the Singleton class.
- **Create a static creation method that acts as a constructor**. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/64b0cdd9-ab7e-4a56-91f6-fbfae7916b41/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/b5b1731f-2f57-48c6-9579-74a018b6c7ea/image.png)

**How to Implement**
1. Add a private static field to the class for storing the singleton instance.

2. Declare a public static creation method for getting the singleton instance.

3. Implement “lazy initialization” inside the static method. It should create a new object on its first call and put it into the static field. The method should always return that instance on all subsequent calls.

4. Make the constructor of the class private. The static method of the class will still be able to call the constru s.

5. Go over the client code and replace all direct calls to the singleton’s constructor with calls to its static creation method.

# Prototype pattern

- The Prototype is a creational design pattern that allows an object to copy itself.
- creating new objects by copying existing objects.
- the object whose copies are made is called the prototype.

Class diagram 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/50a991b9-17af-4932-9ca1-28be98390aa6/image.png)

## why prototype pattern :

- not all objects can be copied by going through all the fields of the original object and copy their values over the new object because some of the object’s fields may be private and not visible from outside of the object itself.
- To avoid redundancy

## Solution

- The Prototype pattern delegates the cloning process to the actual objects that are being cloned.
- The pattern declares a common interface for all objects that support cloning.
- An object that supports cloning is called a *prototype*.
- When you need an object like the one you’ve configured, you just clone a prototype instead of constructing a new object from scratch.

When to use it : 

- Use the Prototype pattern when your code shouldn’t depend on the concrete classes of objects that you need to copy.
    - Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects

## **Relations with Other Patterns**

- Many designs start by using [**Factory Method**](https://refactoring.guru/design-patterns/factory-method) (less complicated and more customizable via subclasses) and evolve toward [**Abstract Factory**](https://refactoring.guru/design-patterns/abstract-factory), [**Prototype**](https://refactoring.guru/design-patterns/prototype), or [**Builder**](https://refactoring.guru/design-patterns/builder) (more flexible, but more complicated).

# **Factory Method**

- creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
- The Factory Method pattern suggests that you replace direct object construction calls (using the `new` operator) with calls to a special *factory* method
- the objects are still created via the `new` operator, but it’s being called from within the factory method

When to use the factory method : 

- Use a factory to instantiate objects like ordering a burger, specifying the type of object you want without worrying about its creation details.
- Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.
- Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.

# **Abstract Factory Method ⇒** https://refactoring.guru/design-patterns/abstract-factory

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/7bdeed0d-c407-45e6-98bd-74a8e5597aed/image.png)

- *interface to create families of related or dependent objects without specifying their concrete classes*.
- An abstract factory can be thought of as a super factor or a factory of factories
- The pattern achieves the creation of a family of products without revealing concrete classes to the client
- 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/8154dead-8173-4535-b6dd-3dbab40853ed/image.png)

When to use it ? 

- Use the Abstract Factory when your code needs to work with various families of related products, but you don’t want it to depend on the concrete classes of those products—they might be unknown beforehand or you simply want to allow for future extensibility.
- Consider implementing the Abstract Factory when you have a class with a set of [Factory Methods](https://refactoring.guru/design-patterns/factory-method) that blur its primary responsibility

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/eb2acb5e-7b09-49ed-ab99-49df1520bca0/image.png)

# **Adapter Pattern**

- the adapter pattern is defined as ***allowing incompatible classes to work together by converting the interface of one class into another expected by the clients***
- The Adapter sits between two incompatible classes that otherwise can't work with each other and let them work together

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/5eb21cda-be6c-438a-976e-62925a7b784e/image.png)

# Decorator

- **Decorator** is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
- Wrapper” is the alternative nickname for the Decorator pattern that clearly expresses the main idea of the pattern
- A *wrapper* is an object that can be linked with some *target* object.
- The wrapper contains the same set of methods as the target and delegates to it all requests it receives

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/178cd51c-b730-43d0-b1b7-1a6335c270d3/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/f3e5746b-d36f-4921-85b7-2a8304bc0701/image.png)

- **Identification:** Decorator can be recognized by creation methods or constructors that accept objects of the same class or interface as a current class.

# FACADE

- defined as ***a single user interface to one or more subsystems or interfaces intending to make use of the subsystems easier***.

# **Proxy Pattern**

- The literal definition of proxy is ***the authority to represent someone else***
- Formally, the pattern is defined as ***a mechanism to provide a surrogate or placeholder for another object to control access to it***.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/42769fe3-86b3-43cd-ab1a-d0722709e18a/image.png)

Ex: 

## **Remote Proxy**

An ambassador appointed by a country to another acts like a proxy for his/her country

# **Chain of Responsibility Pattern ⇒**https://refactoring.guru/design-patterns/chain-of-responsibility

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/834b5115-965f-485f-bf5d-aba0832c064a/image.png)

# **Observer Pattern / Publish n Subscribe ⇒** https://refactoring.guru/design-patterns/observer

- notify multiple objects about any events that happen to the object they’re observing.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/163d4866-32e0-45d9-9ea8-66ecbe4a1053/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/86bdcf6c-a8cb-44d3-b3d1-98f64b8d3633/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/a91a4215-c7cb-4bbb-81e2-d9e4fb6aae87/image.png)

# **Iterator ⇒** https://refactoring.guru/design-patterns/iterator

- Extract the traversal behavior of a collection into a separate object called an *iterator*.

You plan to visit Rome for a few days and visit all of its main sights and attractions. But once there, you could waste a lot of time walking in circles, unable to find even the Colosseum.

On the other hand, you could buy a virtual guide app for your smartphone and use it for navigation. It’s smart and inexpensive, and you could be staying at some interesting places for as long as you want.

A third alternative is that you could spend some of the trip’s budget and hire a local guide who knows the city like the back of his hand. The guide would be able to tailor the tour to your likings, show you every attraction and tell a lot of exciting stories. That’ll be even more fun; but, alas, more expensive, too.

All of these options—the random directions born in your head, the smartphone navigator or the human guide—act as iterators over the vast collection of sights and attractions located in Rome.

## 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6e433484-f0e7-4e4c-a5c5-119a8ac1f0f1/e26bc445-92e4-4e90-9fec-da566ae9b2ca/image.png)