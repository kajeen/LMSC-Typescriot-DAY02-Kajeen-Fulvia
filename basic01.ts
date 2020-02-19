class Person { // ①
   name = ""; // ②
   age = ""; // ②   
   jobTitle = "";
constructor(name, age, jobTitle) { // ③
       this.name = name;
       this.age = age;
       this.jobTitle = jobTitle;

   }
   info() { // ④
       return `My name is ${this.name} and i am ${this.age} years old, and i am a ${this.jobTitle}`;
   }
   whoAreYou() { 
       return `Hi , ${this.info()}`; 
   }
 }


class Student extends Person { // ①
   salary;
   jobLocation;
    // ②

   constructor(name, age,jobTitle, salary, jobLocation) {
       super(name, age, jobTitle); // ③
       this.salary = salary;
       this.jobLocation = jobLocation;
   }

   whoAreYou() { // ④
       return `${super.whoAreYou()} and i get ${this.salary} every month, and i work in ${this.jobLocation}`; // ⑤
   }
}

let Student = new Student("Mario", "110", "programmer", "1000 euro","Vienna");


console.log(Student.info());

console.log(Student.whoAreYou());