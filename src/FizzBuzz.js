function FizzBuzz() { 
}

FizzBuzz.prototype.convert = function(number) {  
  	var word = number;

	if (number%3==0 && number%5==0) {
        word = 'FizzBuzz';
    } else if(number%5==0) {
        word = 'Buzz';
    } else if (number%3==0) {
    	word = 'Fizz';
    }   
    
    return word;
};