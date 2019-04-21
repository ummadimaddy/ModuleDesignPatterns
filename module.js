function Person(first, last, age, eyecolor) {

    this.firstName = first;
   
    this.lastName = last;
   
    this.age = age;
   
    this.eyeColor = eyecolor;
   
   }
    
   
   Person.prototype.nationality = "English";
    
   
   let person = new Person('ummadi', 'reddy', 22, 'black');

   console.log(person);
   
   console.log(Object.getPrototypeOf(person))
   
   console.log(person.nationality)