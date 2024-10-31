//There are problems in Js in type conversion of datatype in JS becuase its not very Strict
//ex-->

let score=33
console.log(typeof(score))


let score2="33abc"
console.log(Number((score2)))         //op   -> NaN
console.log(typeof(Number(score2)))   //type -> Number 

let isMarried=1;
console.log(typeof(Boolean(isMarried)))
