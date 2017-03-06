angular.module('rosters').service('teamRosters', TeamRosterService);

function TeamRosterService($http) {
    function fetchTeams() {
        return $http({
            method: 'GET',
            url: './src/js/data/teams.json'
        });
    }

    return {
        get: fetchTeams
    };
}
