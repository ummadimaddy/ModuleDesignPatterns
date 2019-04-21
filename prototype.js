function Car(carmodel,caryear,carmiles){
    this.model=carmodel;
    this.year=caryear;
    this.miles=carmiles;
}
Car.prototype.toString=function(){
    return this.model+" has done "+this.miles+" miles"+"during this year "+this.year ;
};
Car.prototype.fueltype="desiel";
hyundai._prototype_.fueltype="petrol"

var honda=new Car("Honda Amaze",2018,10);
var hyundai=new Car("Hyundai Elantro",2019,12);
console.log(honda.toString());
console.log(hyundai.toString());
console.log(honda);
console.log(hyundai);
console.log(honda.fueltype);
console.log(hyundai.fueltype);

// it used to const properties for all the objects instances
// for to change honda._prototype_.toString