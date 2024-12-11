// Singleton class that ensures only one instance exists
// Provides a global point of access to that instance
class Singleton {
    // Static instance property to hold the single instance
    private static instance: Singleton;

    // Private constructor prevents direct construction calls with 'new'
    private constructor() {
    }

    // Static method that controls access to the singleton instance
    // Creates the instance on first access and reuses it thereafter
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    // Example business logic that can be executed on the singleton instance
    public someBusinessLogic(): void {
        console.log('doing something business logic related');
    }
}

export default Singleton;