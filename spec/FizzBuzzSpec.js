describe("FizzBuzz", function() {
  
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();    
  });

  it('When number is 3 it should return Fizz', function() {
    expect(fizzBuzz.convert(3)).toEqual('Fizz');
  });


  it('When number is 5 it should return Buzz', function() {
    expect(fizzBuzz.convert(5)).toEqual('Buzz');
  });

  it('When number is 10 it should return Buzz', function() {
    
    result = fizzBuzz.convert(10);

    expect(result).toEqual('Buzz');
  });

});