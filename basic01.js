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
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = ""; // ②
        this.age = ""; // ②   
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.info = function () {
        return "My name is " + this.name + " and i am " + this.age + " years old, and i am a " + this.jobTitle;
    };
    Person.prototype.whoAreYou = function () {
        return "Hi , " + this.info();
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Student.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " and i get " + this.salary + " every month, and i work in " + this.jobLocation; // ⑤
    };
    return Student;
}(Person));
var student = new Student("Mario", "110", "programmer", "1000 euro", "Vienna");
console.log(student.info());
console.log(student.whoAreYou());
