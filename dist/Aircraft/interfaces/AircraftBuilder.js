class AircraftBuilder {
    constructor() {
        if (this.constructor === AircraftBuilder) {
            throw new Error("Abstract classes cannot be instantiated");
        }
    }
    buildEngine() { }
    buildWinds() { }
    buildBathrooms() { }
    buildCockpit() { }
    getResult() { }
}
module.exports = AircraftBuilder;
//# sourceMappingURL=AircraftBuilder.js.map