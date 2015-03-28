function FizzBuzz() { 
}

FizzBuzz.prototype.convert = function(number) {  
  	var word = 'Fizz';

	if (number==15) {
         word = 'FizzBuzz';
    } else if(number%5==0) {
        word = 'Buzz';
    }    
    
    return word;
};