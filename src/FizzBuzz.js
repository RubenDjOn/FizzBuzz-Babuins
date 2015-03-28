function FizzBuzz() { 
}

FizzBuzz.prototype.convert = function(number) {  
  	var word = number;

    if (this.isDivisibleBy(number, 15)) {
        word = 'FizzBuzz';
    } else if(this.isDivisibleBy(number, 5) || this.contains(number, 5)) {
        word = 'Buzz';
    } else if (this.isDivisibleBy(number, 3) || this.contains(number, 3)) {
    	word = 'Fizz';
    }   
    
    return word;
};

FizzBuzz.prototype.isDivisibleBy = function(number, divisor) {  
    return number % divisor == 0;
}

FizzBuzz.prototype.contains = function(number, needle) { 
    return (''+number).indexOf(needle)!=-1;
}