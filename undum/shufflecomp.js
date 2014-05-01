undum.game.id = "BA8BAD18-5D29-44EE-AC52-97DCD3E1D8CF";

undum.game.version = "1.0";

undum.game.situations = {

    start: new undum.SimpleSituation(
        "<p>You are standing at the edge of the Carterhaugh Wood. You have <a class='once' href='./remember-tales'>bee\
n warned</a> not to venture here, but your father is the earl, and this land belongs to you.</p>\
<p class='transient'>You can <a href='turnback'>turn back</a> now or <a href='enterwoods'>continue into the woods</a>.</p>",
	{
            actions: {
		'remember-tales': "<p>The legend has it that a fae by the name of Tamlyn lives in the Wood, and he will demand a toll from anyone who wishes to visit. For a maiden as young and beautiful as you, the fee would likely be sexual in nature.</p>"
            }
	}
    ),			      

/*
         
    pickherb: new undum.Situation({
	enter: function(character, system, from) {
            system.write($("#pickherb").html());
        },
	exit: function(character, system, to) {
	    system.setQuality("herb", 1);
	}
    }),

*/

    takeherb: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#takeherb").html());
        },
        tags: ["responses"],
        optionText: "stay home and take the herb",
        displayOrder: 2,
        canView: function(character, system, host) {
            return character.qualities.herb == 1;
        }
    }),
    
    savetamlin: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#savetamlin").html());
        },
	tags: ["responses"],
	optionText: "go save tamlin",
	displayOrder: 1
    }),

};

undum.game.start = "start";

undum.game.qualities = {}

undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

undum.game.init = function(character, system) {
    character.qualities.herb = 1;
};
