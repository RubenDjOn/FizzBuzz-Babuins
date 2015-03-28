function FizzBuzz() { 
}

FizzBuzz.prototype.convert = function(number) {  
  	var word = 'Fizz';

    if(number==5 || number == 10) {
        word = 'Buzz';
    }
    else if(number==15) {
        word = 'FizzBuzz';
    }    
    
    return word;
};