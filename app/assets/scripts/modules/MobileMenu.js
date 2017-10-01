import $ from "jquery";

class MobileMenu{
	constructor(){
	/*	$(".site-header__menu-icon").click(function(){
			alert("click");
		});*/ // neprijeten način
		/*boljši način*/
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();// 2.zato jo moramo klicat, ko se objekt ustvari

	}

	events(){//1.če hočemo da brskalnik zazna to metodo jomoramo ročno klicati
		this.menuIcon.click(this.toggleTheMenu.bind(this));//kliče spodnjo metodo
		
		//this.menuIcon.click(this.toggleTheMenu);//NAPAKA! (zaradi this) tukaj se pa this sklicuje na MobileMenu, ker ga direktno kličemo mi v construktor-ju
		//rešimo z funkcijo bind(this) - bind() vse kar vnesemo vbind(sem) npr. "MobileMenu"
		//bo naslednji this prevzel
	}

	toggleTheMenu(){
		this.menuContent.toggleClass("site-header__menu-content--is-visible");//toglamo css razred v element označen
	//this.menuContent.toggleClass("site-header__menu-content--is-visible"); // NAPAKA! (zaradi this, ker toggleClass ne more pravilno dostopati do menuContent) this vedno kaže na el. ki ga kliče tukaj v tem primeru
	// z (.site-header__menu-icon el. ztemrazredom), ker ga kliče menuIcon.click!
	//this se spreminja odvisno kjein kdaj ga uporabljamo
	//REŠITEV ko smo uporabili bind bo this postal vrednost bind-a npr. "MobileMenu"
			this.siteHeader.toggleClass("site-header--is-expanded");
			this.menuIcon.toggleClass("site-header__menu-icon--close-x");//pojavi se x ko kliknemo na tri crtice
	}
}

export default MobileMenu;