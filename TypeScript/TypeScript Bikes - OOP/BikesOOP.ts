class Bike{
    price: number;
    max_speed: number;
    miles: number;

    constructor(valueA: number, valueB: number) {
        this.price = valueA;
        this.max_speed = valueB;
        this.miles = 0;
    }
    displayInfo() {
        console.log("This bike's price is: " + this.price + ". Max speed for this bike is: " + this.max_speed + ". Total miles on this bike is: " + this.miles + ".")
    }
    ride() {
        this.miles += 10;
        console.log("Riding");
        return this;
    }
    reverse() {
        if (this.miles <= 0) {
            console.log("Cannot reverse at the moment.")
        }
        else {
            this.miles -= 5;
            console.log("Reversing")    
        }
        return this;
    }
}

let bike1 = new Bike(250, 30);
bike1.ride().ride().ride().reverse().displayInfo();

let bike2 = new Bike(175, 20);
bike2.ride().ride().reverse().reverse().displayInfo();

let bike3 = new Bike(90, 50);
bike3.reverse().reverse().reverse().displayInfo();
