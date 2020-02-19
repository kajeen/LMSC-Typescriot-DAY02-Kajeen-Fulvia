var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(name, price, color) {
        this.name = "";
        this.price = "";
        this.color = "";
        this.name = name;
        this.price = price;
        this.color = color;
    }
    Vehicles.prototype.info = function () {
        return this.name + ": price " + this.price + " and color " + this.color;
    };
    return Vehicles;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(name, price, color, year) {
        var _this = _super.call(this, name, price, color) || this;
        _this.year = "";
        _this.year = year;
        return _this;
    }
    Motor.prototype.MotorInfo = function () {
        return _super.prototype.info.call(this) + ".year: " + this.year;
    };
    return Motor;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, price, color, horsePower, year) {
        var _this = _super.call(this, name, price, color) || this;
        _this.horsePower = "";
        _this.year = "";
        _this.horsePower = horsePower;
        _this.year = year;
        return _this;
    }
    Truck.prototype.TruckInfo = function () {
        return _super.prototype.info.call(this) + ". Horse power: " + this.horsePower;
    };
    return Truck;
}(Vehicles));
