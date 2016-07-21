// Constructor
function Complex(re, im) {
  this.x = re;
  this.y = im;
}

// Add
Complex.Add = function(a, b) {
  return new Complex(a.x + b.x, a.y + b.y);
}

// Subtract
Complex.Subtract = function(a, b) {
  return new Complex(a.x - b.x, a.y - b.y);
}

// Multiply
Complex.Multiply = function(a, b) {
  return new Complex(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

// Divide
Complex.Divide = function(a, b) {
  return new Complex(  (a.x * b.x + a.y * b.y)/(b.x * b.x + b.y * b.y)  , (b.x * a.y - a.x * b.y)/(b.x * b.x + b.y * b.y)  );
}

// Series
Complex.Series = function(a, b) {
  return new Complex(a.x + b.x, a.y + b.y);
}

// Parallel
Complex.Parallel = function(a, b) {
  var numerator = new Complex.Multiply(a, b);
  var denominator = new Complex.Add(a, b);
return new Complex.Divide(numerator, denominator); 
}  
  
// Get the real part
Complex.prototype.getRe = function() {
  return this.x;
}

// Set the real part
Complex.prototype.setRe = function(x) {
  this.x = x;
}

// Get the imaginary part
Complex.prototype.getIm = function() {
  return this.y;
}

// set the imaginary part
Complex.prototype.setIm = function(y) {
  this.y = y;
}

// Get the magnitude part
Complex.prototype.magnitude = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

// Get the angle part
Complex.prototype.angle = function() {
  return Math.atan(this.y/this.x);
}

/*
var s21 = new Complex.Divide( Z3 , new Complex.Add( Z3, R2) );

var s21dB = 20 * Math.log(s21.magnitude())/Math.log(10);

document.write(s21dB);

document.write(RL.getRe()+"         i"+RL.getIm() );
*/







