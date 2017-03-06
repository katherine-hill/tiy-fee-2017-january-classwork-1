(function() {
    angular.module('MoviesApp').controller('DetailsController', function($stateParams, $q, GetDataService) {
        const movieId = $stateParams.id;
        $q.when(GetDataService.get('./src/data/movies.json')).then((response) => {
            const allMovies = response.data;
            allMovies.forEach((movie) => {
                if (movie.imdb === movieId) {
                    this.movie = movie;
                }
            });
            console.log(this.selectedMovie);
        }).catch((error) => {
            console.log(error);
        });
    });
})();
