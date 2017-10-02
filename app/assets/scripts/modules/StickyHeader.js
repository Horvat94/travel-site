import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";


class StickyHeader{
	constructor(){
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");//označimo naslov
		this.createHeaderWaypoint();//ko se ustvari konstruktor se izvede ta funkcija in ustvari waypoint
	}

	createHeaderWaypoint(){
		var that = this;//shranimo pot do glavnega razreda
		new Waypoint({
			element: this.headerTriggerElement[0],//pričakuje javascript DOM element..prvi element v objektu kot polje je kazalec
			handler: function(direction){//
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark");
				}else{
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}
}

export default StickyHeader;