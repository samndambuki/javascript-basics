var animal = {
	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky',
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false
};
// console.log(animal)

var animal2 = animal;
animal2.genus = "ursus"
var animal2 = {

	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky',
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false

}
animal2 = JSON.parse(JSON.stringify(animal));
animal2.genus = "human"
console.log(animal2)