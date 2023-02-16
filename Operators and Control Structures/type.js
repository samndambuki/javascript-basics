var thing = 12 
thing = "twelve";

x = typeof thing
console.log(x)

thing = false
y = typeof thing
console.log(y)

thing = {}
z = typeof thing
console.log(z)

thing = [];
a = typeof thing
console.log(a)

b =  typeof thing === "object" && thing.hasOwnProperty("length")
console.log(b)

thing = {}
c =  typeof thing === "object" && thing.hasOwnProperty("length")
console.log(c)

//NaN
d = typeof NaN
console.log(d)

thing = null
thing === null
