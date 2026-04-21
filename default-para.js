//number er khetre 0 diye dibo

function add(num1, num2){
      const total = num1 + num2;
      console.log(num1, num2, total) ;
 }


//NaN--> Not a number
    add(20);

    function add2(num1, num2 = 0){
          const total = num1 + num2;
          console.log(num1, num2, total);
    }

    add2(20, 60);


    function multiply(num1, num2 = 1){
       const result = num1 * num2;
       console.log(result);
}

multiply(5);

//string er khetre by defalut jodi ektaaa parameter er man deya thake and r ektar na thake tahole empty string diye dibo ''
    function fullName(first, last = ''){
            const name = first + ' ' + last;
            console.log(name);
    }

    fullName('bodoruddin');



  /**
   * string--> ''
  *  number --> 0 [for add]
  * number --> 1[for multiply]
  * array--> []
  * object --> {}
  * boolean --> false
  
  

  */