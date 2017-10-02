/*function oseba(oIme, oBarva, oStatus){
	console.log("Zdravo, moje ime je "+oIme+". Moja najljubša barva je "+oBarva+". Trenutno sem "+oStatus+".");
}

var tadej = {//objekt v javascript
	ime: "Horvat Tadej",// ime je noun
	barva: "blue",
	status: "ziv"

	greet: function(){ // verbe je akcija oz obnašanje ali behaviour (metoda)
		console.log("Zdravo, moje ime je "+oIme+". Moja najljubša barva je "+oBarva+". Trenutno sem "+oStatus+".");
	}
}

tadej.greet();//klicanje metode je enako kot klicanje vrednosti v objektu
*/


//oseba(tadej.ime,tadej.barva,tadej.status);//uporaba parametrov objekta v funkciji

/*Reusable blueprin ali konstruktor - najlepši oz. strukturiran način*/

//var Oseba = require("./modules/Oseba");//ni potrebno dodati .js

/*import Oseba from "./modules/Oseba"; // nova sintaksa za vstavljanje modula ES6

class Adult extends Oseba{//dedujemo vse iz osebe 
	payTaxes(){
		console.log(this.oIme + " now owes 0€ in taxes");
	}
}


var john = new Oseba("Tadej", "Modra", "Ziv");

john.greet(); // kličemo metodo objekta


var jane = new Adult("Nastja", "Red", "Ziva");//naredimo now objekt z instanciranjem razreda Adult

jane.greet();
jane.payTaxes();

*/

/** Koda za spletno stran **/
import StickyHeader from "./modules/StickyHeader";
import MobileMenu from "./modules/MobileMenu";///MobileMen je dejansko poljubno ime tukaj smo organizirani 
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
//var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"),"85%");//features
new RevealOnScroll($(".testimonial"),"60%");//testimonials npr. podamo argumente katere razrede bomo razkrili in kaksen offset bomo uporabili
