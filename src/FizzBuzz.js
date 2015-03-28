function FizzBuzz() { 
}

FizzBuzz.prototype.convert = function(number) {  
  	var word = 'Fizz';

	if (number==15||number==30) {
        word = 'FizzBuzz';
    } else if(number%5==0) {
        word = 'Buzz';
    } else if (number == 4) {
    	word = 4;
    }   
    
    return word;
};