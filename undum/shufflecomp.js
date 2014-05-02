undum.game.id = "BA8BAD18-5D29-44EE-AC52-97DCD3E1D8CF";

undum.game.version = "1.0";

undum.game.situations = {

    tamlanestale1: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#tamlanestale").html());
            system.write($("#tamlanestale1").html());
	}
    }),

    tamlanestale2: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#tamlanestale").html());
            system.write($("#tamlanestale2").html());
        }
    }),

    gohome1: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#gohome").html());
            system.write($("#gohome1").html());
	}
    }),

    gohome2: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#gohome").html());
            system.write($("#gohome2").html());
	}
    }),

    blackhorse: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#wronghorse").html());
	}
    }),

    brownhorse: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#wronghorse").html());
	}
    }),

};

undum.game.start = "start";

undum.game.qualities = {};

undum.game.qualityGroups = {};

undum.game.init = function(character, system) {};
