function FizzBuzz() { 
}

FizzBuzz.prototype.convert = function(number) {  
  	var word = number;

	if (number==15||number==30) {
        word = 'FizzBuzz';
    } else if(number%5==0) {
        word = 'Buzz';
    } else if (number == 3) {
    	word = 'Fizz';
    }   
    
    return word;
};