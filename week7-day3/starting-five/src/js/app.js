(function() {
    'use strict';

    // angular
    //     .module('helloWorld', [])
    //     .controller('HeaderController', function() {
    //         const firstName = "Greatest";
    //         const lastName = "Ever";
    //         this.displayName = function() {
    //             return `${firstName} ${lastName}`;
    //         };
    //     });

    const app = angular.module('rosters', []);
    app.controller('RosterController', function(teamRosters, $q) {
        this.allTeams = {};
        this.activeTeam = null;
        this.activePlayer = null;
        this.teamName = null;
        this.orderByField = 'position';
        this.reverseSort = false;

        this.updateTable = function(col) {
            this.orderByField = col;
            this.reverseSort = !this.reverseSort;
        };

        $q.when(teamRosters.get('./src/js/data/teams.json')).then((response) => {
            this.allTeams = response.data;
        }).catch((error) => {
            console.log(error);
        });

        this.updateTeam = function(name) {
            this.activeTeam = this.allTeams[name];
            if (this.teamName === name) return;
            this.teamName = name;
            this.activePlayer = null;
            // console.log(this.activeTeam);
        };
        this.showPlayer = function(playerObj) {
            // console.log(playerObj);
            this.activePlayer = playerObj;
        };
    });
})();
