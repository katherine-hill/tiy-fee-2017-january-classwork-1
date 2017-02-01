// window.onload = (function() {
//     let http = new XMLHttpRequest();
//
//     http.onreadystatechange = function() {
//         if (http.readyState === 4 && http.status === 200) {
//             console.log(JSON.parse(http.response));
//         }
//     }
//
//     http.open('GET', 'data/music.json', true)
//     http.send();
//     console.log('Testing');
// })();
//

// 0: Request Not Initialized
// 1: Request Has Been Set Up
// 2: Request Has Been Sent
// 3: Request is in Process
// 4: Request is Complete

// 200: Okay
// 3xx: Redirects
// 4xx: Client Errors
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 5xx: Server Errors
// 500: Internal Server Error

/* JAVASCRIPT XMLHttpRequest() */
// var http = new XMLHttpRequest();
// http.onreadystatechange = function() {
//     if (http.readyState === 4 && http.status === 200) {
//         console.log(JSON.parse(http.response));
//
//     } else if (http.readyState === 4 && http.status >= 300) {
//         console.log(http.statusText);
//     }
// };
// http.open('GET', 'data/dogs.json', true);
// http.send();

/* jQuery $.get Method */
// var dogs;
// $.get('data/dogs.json', function(data) {
//   dogs = data;
//   console.log(dogs);
// });
// console.log('Testing Async');

/* jQuery $.ajax() Method */
// function handleError(errorObject, textStatus, error) {
//   console.log(errorObject, textStatus, error);
// }
//
// function dogsCallback(dogs) {
//   console.log(dogs);
//
//   $.ajax({
//       type: 'GET',
//       url: 'https://raw.githubusercontent.com/yuschick/31-nights-of-horror-2016/master/movies.json',
//       header: 'application/json',
//       success: moviesCallback,
//       error: handleError
//   });
// }
//
// function moviesCallback(movies) {
//   console.log(JSON.parse(movies));
//
//   $.ajax({
//       type: 'GET',
//       url: 'data/fruits.json',
//       header: 'application/json',
//       success: function(fruits) {
//           console.log(fruits);
//       },
//       error: handleError
//   });
// }
//
// $.ajax({
//     type: 'GET',
//     url: 'data/dogs.json',
//     headers: 'application/json',
//     success: dogsCallback,
//     error: handleError,
//     complete: function() {
//         // console.log('Completed Request');
//     }
// });

// function get(url) {
//     return new Promise(function(resolve, reject) {
//         var http = new XMLHttpRequest();
//         http.open('GET', url, true);
//         http.onload = function() {
//             if (http.status === 200) {
//                 resolve(JSON.parse(http.response));
//             } else {
//                 reject(http.statusText);
//             }
//         };
//         http.onerror = function() {
//             reject(http.statusText);
//         };
//         http.send();
//     });
// }
// var longUrl = 'https://raw.githubusercontent.com/yuschick/31-nights-of-horror-2016/master/movies.json';
// // var promise = get('data/dogs.json');
// // console.log(promise);
//
// get('data/dogs.json').then(function(dogs) {
//     console.log(dogs);
//     return get(longUrl);
// }).then(function(movies) {
//     console.log(movies);
//     return get('data/fruits.json');
// }).then(function(fruits) {
//     console.log(fruits);
//     console.log("All done :)");
// }).catch(function(error) {
//     console.log(error);
// });
