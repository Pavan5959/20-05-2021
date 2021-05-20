let ename:string ='owen';
console.log('hi friends' + ename);

//String Data Type
let s1:string='song';
let s3:string='song1';

//multilines
let s4='line\nline2'; //here line will be in one line and line2 will be in next line
let s5=`address1 address2`; //here same like line and line2
console.log(s4);
console.log(s5);

//$()
let s6='ram';
let s7='this is $(s6)';
console.log(s7);

//length to find the length of the string
let s8='Avengers'
console.log(s8.length);

//charAt
console.log(s8.charAt(3));

//indexOf
console.log(s8.indexOf('s'));

//lastIndexOf
console.log(s8.lastIndexOf('s'));

//concat is used to add two strings
let s9='abc';
let s10='def';
let s11=s9+s10;
let s12=s9.concat(s10);

//split is used to notedown spaces
let s13='split the splits';
console.log(s13.split(' '));

//substring is used to a particular characters
let s14='live a life';
       //012345678910
console.log(s13.substring(0,3)); //live

//toLowerCase
console.log(s14.toLowerCase());

//toUpperCase
console.log(s14.toUpperCase());
