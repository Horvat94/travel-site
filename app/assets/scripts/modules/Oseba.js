// function Oseba(ime, barva, status){//blueprint je zato ker javascriptnima razredov lol
// 	this.oIme = ime,// ime je noun
// 	this.oBarva = barva,
// 	this.oStatus = status

// 	this.greet = function(){//this - omogoča našem blueprintu, da je flexibilen. vrednost od this se  spreminja odvisno od kako, kdaaj in kje kličemo funkcjo.
// 		console.log("Zdravo, moje ime je "+this.oIme+". Moja najljubša barva je "+this.oBarva+". Trenutno sem "+this.oStatus+".");
// 	}
// }

// module.exports = Oseba;//moramo povedati kaj naj ta datoteka exporta ali vrača, ko jo druga datoteka hoče requirat.. zato enačimo z razredom Oseba!!


class Oseba{//razred v ecma script 6
	constructor(ime, barva, status){//uporabimo lahko konstruktor funkcijo
		this.oIme = ime,// ime je noun
		this.oBarva = barva,
		this.oStatus = status
	}

	greet(){//definiranje metode v ecma script 6
		console.log("Oj, moje ime je "+this.oIme+". Moja najljubša barva je "+this.oBarva+". Trenutno sem "+this.oStatus+".");
	}
}



//module.exports = Oseba;//moramo povedati kaj naj ta datoteka exporta ali vrača, ko jo druga datoteka hoče requirat.. zato enačimo z razredom Oseba!!
export default Oseba;// izvoz ES6

