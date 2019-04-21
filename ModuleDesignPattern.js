var Exposer = (function() {
  
    var privateMethod = function() {
      console.log('Inside a private method!');
    }
  
    methodToExpose = function() {
      console.log('This is a method I want to expose!');
    }
  
    var otherMethodIWantToExpose = function() {
      privateMethod();
    }
    return {
      frst:methodToExpose,
      second: otherMethodIWantToExpose,
      third:privateMethod
    };
    
  })();
  
  // a = Exposer();
  // console.log(a);
  Exposer.frst();        
  Exposer.second();     
Exposer.third();  
  // Exposer.otherMethodIWantToExpose(); 
  

  // function myfoo(){
  //   function myfoo2(){
  //     console.log("hii");
  //   }
  //   myfoo2();
  // }
  // myfoo();
  // myfoo2();
  
