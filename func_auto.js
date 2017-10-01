var express = reauire('express');
var app = express()



var fs = [];
fs['f1'] = new Function('name', 'return console.log("hello, " + name + "!");');
fs['f1']('erick');


var first = 'a'
var operation = 'return a* b'
var adder=new Function(first,'b',operation)

console.log(adder(2,9));

console.log("hello");






