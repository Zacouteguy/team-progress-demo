import {JetView} from "webix-jet";

export default class TimeView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			type:"clean",
			rows:[
				{ template:_("Hours spent, %"), type:"header" },
				{
					localId:"hours",
					view:"chart",
					type:"donut",
					value:"#hours#",
					color:"#color#",
					innerRadius:65,
					shadow:0,
					legend:{
						width:100,
						align:"right",
						valign:"middle",
						template:obj => _(obj.activity),
						marker:{
							type:"round", width:8, height:9
						}
					},
					padding:{
						top:10, bottom:20
					}
				}
			]
		};
	}
	init(){
		this.on(this.app,"person:select",person => {
			this.$$("hours").parse(webix.copy(person.hours));
		});
	}
}
