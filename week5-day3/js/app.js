/*
CRUD: Create, Read, Update, and Delete
HTTP Methods: POST (typically body data),
GET,
PUT (updates full object)/PATCH(updates object property),
DELETE
*/

(function() {
    "use strict";

    const movieModule = function() {
        const apiKey = '84d2690223f00a8cc05141e0c91c56b8';
        const searchForm = document.querySelector('.search-form');
        let token, sessionId;

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

            $('.content').on('click', '.close', function() {
                $(this).parents('.movie-container').slideUp('fast', function() {
                    $(this).remove();
                });
            });

            $('.content').on('change', '.movie-rating', function() {
                if ($(this).val()) {
                    const rating = $(this).val(); // event.target[0].value
                    const movieId = $(this).attr('data-id');

                    if (rating === 'delete') {
                        deleteRating(movieId);
                    } else {
                        rateMovie(rating, movieId);
                    }
                }
            });
        }

        function clearContent() {
            $('.content').html('');
        }

        function createSession() {
            // Request access token
            $.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`).then((data) => {
                token = data.request_token;

                // Log in to verify token
                return $.get(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}&username=yuschick&password=TheIronYard&request_token=${token}`);
            }).then(() => {
                // Create session
                return $.get(`https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${token}`);
            }).then((data) => {
                sessionId = data.session_id;

                // console.log(apiKey, token, sessionId);
            });
        }

        function deleteRating(movieId) {
            $.ajax({
                method: 'DELETE',
                url: `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&session_id=${sessionId}`,
                header: {
                    "content-type": "application/json;charset=utf-8"
                }
            }).then((response) => {
                $('<p>').text('Movie rating deleted successfully').css({
                    position: 'absolute',
                    background: 'rgba(200,0,0,.75)',
                    width: '100%',
                    padding: '1rem',
                    color: '#fff',
                    top: 0,
                    left: 0,
                    textAlign: 'center'
                }).appendTo('body').fadeOut(3000, function() {
                    $(this).remove();
                });
            }).catch((error) => {
                console.log(error);
            });
        }


        function getRelatedMovies(id) {
            $.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`)
                .then((response) => {
                    let topRelated = response.results.splice(0, 5);
                    clearContent();
                    for (let i = 0; i < topRelated.length; i++) {
                        new MovieDetails(topRelated[i]);
                        getUserRating(topRelated[i].id);
                    }
                });
        }

        function getSearchResults(query) {
            query = encodeURIComponent(query);
            $.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`).then((response) => {
                clearContent();
                // console.log(response.results[0]);
                new MovieDetails(response.results[0]);
                getUserRating(response.results[0].id);
            }).catch((error) => {
                console.log(error);
            });
        }

        function getUserRating(movieId) {
            $.get(`https://api.themoviedb.org/3/movie/${movieId}/account_states?api_key=${apiKey}&session_id=${sessionId}`).then((response) => {
                console.log(response);
                $(`.movie-rating[data-id=${movieId}]`).val(response.rated.value);
            }).catch((error) => {
                console.log(error);
            });
        }

        function rateMovie(rating, movieId) {
            const settings = {
                method: 'POST',
                url: `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&session_id=${sessionId}`,
                headers: {
                    "content-type": "application/json;charset=utf-8"
                },
                data: JSON.stringify({
                    "value": rating
                })
            };

            $.ajax(settings).then((response) => {
                $('<p>').text('Movie rated successfully').css({
                    position: 'absolute',
                    background: 'rgba(0,200,0,.75)',
                    width: '100%',
                    padding: '1rem',
                    color: '#fff',
                    top: 0,
                    left: 0,
                    textAlign: 'center'
                }).appendTo('body').fadeOut(3000, function() {
                    $(this).remove();
                });
            }).catch((error) => {
                console.log(error);
            });
        }

        function init() {
            bindEvents();
            createSession();
        }

        return {
            init: init
        };
    };

    const movieApp = movieModule();
    movieApp.init();
})();
