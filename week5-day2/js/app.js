(function() {
    "use strict";

    const movieModule = function() {
        const apiKey = '84d2690223f00a8cc05141e0c91c56b8';
        const searchForm = document.querySelector('.search-form');

        class MovieDetails {
            constructor(movieObj) {
                this.image = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movieObj.poster_path}`;
                this.movieId = movieObj.id;
                this.overview = movieObj.overview;
                this.title = movieObj.title;
                this.build();
            }

            build() {
                // Grab a string of HTML from element
                const source = $('#movie-template').html();
                // Turns that string into a Handlebars function
                const template = Handlebars.compile(source);
                const context = {
                    image: this.image,
                    title: this.title,
                    overview: this.overview,
                    movieId: this.movieId
                };
                const html = template(context);

                $('.content').prepend(html);

            }
        }

        function bindEvents() {
            searchForm.addEventListener('submit', () => {
                event.preventDefault();
                const searchValue = event.target[0].value;
                getSearchResults(searchValue);

                searchForm.reset();
            });

            $('.content').on('click', '.related-search-link', function() {
                const id = $(this).attr('data-id');
                getRelatedMovies(id);
            });

        }

        function getRelatedMovies(id) {
            $.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`)
                .then((response) => {
                    let topRelated = response.results.splice(0, 5);
                    for (let i = 0; i < topRelated.length; i++) {
                        new MovieDetails(topRelated[i]);
                    }
                });
        }

        function getSearchResults(query) {
            query = encodeURIComponent(query);
            $.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`).then((response) => {
                new MovieDetails(response.results[0]);
            });
        }

        function init() {
            bindEvents();
        }

        return {
            init: init
        };
    };

    const movieApp = movieModule();
    movieApp.init();
})();
