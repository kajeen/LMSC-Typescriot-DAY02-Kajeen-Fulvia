class Person { // ①
   name = ""; // ②
   age = ""; // ②   
   jobTitle = "";

    constructor(name, age, jobTitle) { // ③
       this.name = name;
       this.age = age;
       this.jobTitle = jobTitle;

   }
   info() {
       return `My name is ${this.name} and i am ${this.age} years old, and i am a ${this.jobTitle}`;
   }
   whoAreYou() { 
       return `Hi , ${this.info()}`; 
   }
 }


class Student extends Person { 
   salary;
   jobLocation;

   constructor(name, age,jobTitle, salary, jobLocation) {
       super(name, age, jobTitle); 
       this.salary = salary;
       this.jobLocation = jobLocation;
   }

   whoAreYou() { 
       return `${super.whoAreYou()} and i get ${this.salary} every month, and i work in ${this.jobLocation}`; // ⑤
   }
}

let student = new Student("Mario", "110", "programmer", "1000 euro","Vienna");


console.log(student.info());

console.log(student.whoAreYou());