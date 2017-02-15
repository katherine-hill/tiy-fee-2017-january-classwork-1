'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    "use strict";

    var creepyUsersModule = function creepyUsersModule() {
        var $deleteBtn = $('.delete-button');
        var $peopleContainer = $('.people-container');
        var activeRequest = false;
        var settings = {
            nationality: null,
            gender: null,
            count: 1,
            stagger: false
        };

        var Loading = function () {
            function Loading() {
                _classCallCheck(this, Loading);
            }

            _createClass(Loading, [{
                key: 'show',
                value: function show() {
                    var source = $('#loading').html();
                    $peopleContainer.prepend(source);
                }
            }, {
                key: 'hide',
                value: function hide() {
                    $('.loader').last().remove();
                }
            }]);

            return Loading;
        }();

        var Person = function () {
            function Person(data) {
                _classCallCheck(this, Person);

                this.image = data.picture.large;
                this.fullName = data.name.first + ' ' + data.name.last;
                this.details = {
                    nat: data.nat,
                    cell: data.cell,
                    password: data.login.password,
                    email: data.email
                };
                this.build();
            }

            _createClass(Person, [{
                key: 'build',
                value: function build() {
                    var source = $('#person').html();
                    var template = Handlebars.compile(source);
                    var context = {
                        image: this.image,
                        fullName: this.fullName,
                        details: this.details
                    };
                    var html = template(context);

                    $peopleContainer.prepend(html);
                }
            }]);

            return Person;
        }();

        function bindEvents() {
            $('.person-button').on('click', function () {
                getPersonData();
            });

            $peopleContainer.on('click', '.person-container', function () {
                $(this).toggleClass('active');
                toggleDeleteButton();
            });

            $deleteBtn.on('click', function () {
                deletePerson();
                toggleDeleteButton();
                updatePeopleCount();
            });
        }

        function updatePeopleCount() {
            var count = $('.person-container').length;
            $('.people-count').html(count + ' People Created');
        }

        function deletePerson() {
            $('.person-container.active').remove();
        }

        function toggleDeleteButton() {
            if ($('.person-container.active').length) {
                $deleteBtn.show();
            } else {
                $deleteBtn.hide();
            }
        }

        function getPersonData() {
            if (!activeRequest && !settings.stagger || settings.stagger) {
                var icon = new Loading();
                icon.show();
                activeRequest = true;
                $.ajax({
                    url: 'https://randomuser.me/api/?nat=' + settings.nationality + '&gender=' + settings.gender + '&results=' + settings.count,
                    dataType: 'json'
                }).then(function (data) {
                    for (var i = 0; i < data.results.length; i++) {
                        new Person(data.results[i]);
                        updatePeopleCount();
                        icon.hide();
                    }
                    activeRequest = false;
                }).catch(function (error) {
                    console.log('Damnit!!!!!!');
                    console.log(error);
                    activeRequest = false;
                });
            } else {
                console.log('Patience is a virtue');
            }
        }

        function init() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : settings;

            settings = options;
            bindEvents();
        }

        return {
            init: init
        };
    };

    var userApp = creepyUsersModule();
    userApp.init({
        nationality: 'gb,dk,fr',
        gender: 'male',
        stagger: true
    });
})();