"use strict";
class Invoice {
    constructor() {
        this.name = "";
        this.quantity = 0;
    }
}
var Unit;
(function (Unit) {
    Unit[Unit["kg"] = 0] = "kg";
    Unit[Unit["sztuka"] = 1] = "sztuka";
})(Unit || (Unit = {}));
var Tax;
(function (Tax) {
    Tax[Tax["t23"] = 0.23] = "t23";
    Tax[Tax["t8"] = 0.08] = "t8";
    Tax[Tax["t5"] = 0.05] = "t5";
})(Tax || (Tax = {}));
