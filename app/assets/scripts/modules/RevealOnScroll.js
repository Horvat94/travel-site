import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
class RevealOnScroll{
	constructor(elementi, offset){
		this.itemsToReveal = $(elementi);//vrstni red je pomemben
		this.offsetPercentage = offset;//si izmislimo incoming offset parameter
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}
	createWaypoints(){
		var that = this;//this kaže na objekt k ga hočemo
		this.itemsToReveal.each(function(){//vse kaj dodamo v each se bo za vsak element zagnalo
			var currentItem = this;//this kaže na objekt, ki ga hočemo razkrit, ker bo spodaj prevzel new Waypoint na katerega bo kazal this, shranimo tukaj v spremenljivko
			new Waypoint({//do waypoint razreda imamo dostop ker smo dodali waypoint datoteko, potrebuje dve spremenljivki
				element: currentItem,//dom el. ki ga opazujemo dokler skrolamo dol (el. ki se bo recimo odkril)
				handler: function(){//kaj se zgodi ko priskolamo do opazovanega elementa
					$(currentItem).addClass("reveal-item--is-visible"); // ko priskolamo do elementa, mu dodamo razred da bo spet viden
				},//ko skrolamo do sem
				offset: that.offsetPercentage //0 je vrh našega vidnega zaslona 100% pa spodnji del
			});
		});
	}
}

export default RevealOnScroll;