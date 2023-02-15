var counties = ["Nyeri","Nairobi","Machakos","Kakamega"]
x = counties[0]
counties[2] = "Nanyuki"
counties[4] = "Turkana"
counties[counties.length] = "Wajir"
counties.push("Pokot")
counties.pop()
delete counties[2]
z=counties.splice(2,1)
console.log(z)
console.log(counties)
