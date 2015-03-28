describe("FizzBuzz", function() {
  
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();    
  });

  describe('Number is divisible by 3', function() {
	  it('When number is 3 it should return Fizz', function() {
	  	result = fizzBuzz.convert(3);

	    expect(result).toEqual('Fizz');
	  });

    it('When number is 6 it should return Fizz', function() {
      input = 6;

      result = fizzBuzz.convert(input);

      expect(result).toEqual('Fizz');
    });    	    
  });


  describe('Number is divisible by 5', function() {
    it('When number is 5 it should return Buzz', function() {
      result = fizzBuzz.convert(5);

      expect(result).toEqual('Buzz');
    });

    it('When number is 10 it should return Buzz', function() {    
      result = fizzBuzz.convert(10);

      expect(result).toEqual('Buzz');
    });

    it('When number is 20 it should return Buzz', function() {
      result = fizzBuzz.convert(20);

      expect(result).toEqual('Buzz');
    });
  });

  describe('Number is divisible by 3 and 5', function() {
    it('When number is 30 it should return FizzBuzz', function() {
      result = fizzBuzz.convert(30);

      expect(result).toEqual('FizzBuzz');
    });

     it('When number is 15 it should return FizzBuzz', function() {    
      result = fizzBuzz.convert(15);

      expect(result).toEqual('FizzBuzz');
    });
  });

  describe('Number is not divisible by 3 or 5', function() {
	  it('When number 4 it should return 4', function() {
	    result = fizzBuzz.convert(4);

	    expect(result).toEqual(4);
	  });

	  it('When number 8 it should return 8', function() {
	    result = fizzBuzz.convert(8);

	    expect(result).toEqual(8);
	  });
  });

	it('When number has the digit "3" return "Fizz"', function() {
		input = 31;

    result = fizzBuzz.convert(input);

    expect(result).toEqual('Fizz');
	});

  it('When number is 52 should return Buzz', function() {
    input = 52;

    result = fizzBuzz.convert(input);

    expect(result).toEqual('Buzz');
  });

});