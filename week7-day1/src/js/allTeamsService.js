angular.module('rosters').service('teamRosters', TeamRosterService);

function TeamRosterService($http) {
    function getTeams(url) {
        return $http({
            method: 'GET',
            url: url
        });

        // The same as jQuery ajax
        // $.ajax({
        //   // settings
        // });
    }

    return {
        get: getTeams
    };
}
