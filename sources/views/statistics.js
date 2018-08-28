import {JetView} from "webix-jet";
import {stats} from "models/statistics";

export default class StatisticsView extends JetView{
	config(){
		return {
			type:"clean", rows:[
				{ template:"Total tasks completed", type:"header" },
				{
					localId:"stats",
					view:"chart",
					type:"scatter",
					xValue:"#week#",
					padding:{
						top:14
					},
					xAxis:{
						start:0,
						end:53,
						step:2,
						title:"Weeks"
					},
					yAxis:{
						start:0,
						step:25,
						end:100,
						title:"Tasks"
					},
					legend:{
						values:[
							{text:"2017", color:"#8664C6"},
							{text:"2018", color:"#1CA1C1"}
						],
						align:"right", layout:"x", valign:"top"
					},
					series:[
						{
							value:"#tasks17#",
							disableLines:false,
							item:{
								borderColor:"#1CA1C1", borderWidth:2,
								radius:4
							},
							line:{ color:"#1CA1C1", width:2 },
							tooltip:{
								template:"Week #week#<br>#tasks17# tasks completed"
							}
						},
						{
							value:"#tasks18#",
							item:{
								borderColor:"#8664C6", borderWidth:2,
								radius:4
							},
							line:{ color:"#8664C6", width:2 },
							tooltip:{
								template:"Week #week#<br>#tasks18# tasks completed"
							}
						}
					]
				}
			]
		};
	}
	init(){
		this.$$("stats").parse(stats);
	}
}
