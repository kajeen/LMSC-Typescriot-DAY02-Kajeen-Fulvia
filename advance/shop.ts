class Vehicles { 
   name = ""; 
   price = "";   
   color = "";

    constructor(name, price, color) { // ③
       this.name = name;
       this.price = price;
       this.color = color;

   }
   info() {
       return `${this.name}: price ${this.price} and color ${this.color}`;
   }

 }



class Motor extends Vehicles { 
   year = "";

   constructor(name, price,color, year) {
       super(name, price, color); 
       this.year = year;
 

}
    MotorInfo() {
       return `${super.info()}.year: ${this.year}`;
   }
 }




class Truck extends Vehicles { 
   horsePower = "";
   year = "";

   constructor(name, price,color, horsePower, year) {
       super(name, price, color); 
       this.horsePower = horsePower;
       this.year = year;
 

}
    TruckInfo() {
       return `${super.info()}. Horse power: ${this.horsePower}`;
   }
 }

