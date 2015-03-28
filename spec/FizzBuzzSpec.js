describe("FizzBuzz", function() {
  
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();    
  });

  it('When number is 3 it should return Fizz', function() {
  	result = fizzBuzz.convert(3);

    expect(result).toEqual('Fizz');
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

  
  it('When number is 15 it should return FizzBuzz', function() {    
    result = fizzBuzz.convert(15);

    expect(result).toEqual('FizzBuzz');
  });  
  

});