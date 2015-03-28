function FizzBuzz() { 
}

FizzBuzz.prototype.convert = function(number) {  
  	var word = '';
    if(number==5){
        word = 'Buzz';
    }
    else{
        word = 'Fizz';
    }
    return word;
};