import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";


class StickyHeader{
	constructor(){
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");//označimo naslov
		this.createHeaderWaypoint();//ko se ustvari konstruktor se izvede ta funkcija in ustvari waypoint
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}
	refreshWaypoints(){
		this.lazyImages.on("load",function(){
			Waypoint.refreshAll();//refresha čisto vse waypointse v brskalniku
		});
	}

	addSmoothScrolling(){
		this.headerLinks.smoothScroll();//na vsak header link kličemo plugin
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

	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){//each this kaže na element čez kateregaa loopamo
			var currentPageSection = this;
			new Waypoint({//ko scrolamo dol
				element: currentPageSection,
				handler: function(direction){

					if(direction == "down"){
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "50%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction){

					if(direction == "up"){//ko scrolamo dol
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;