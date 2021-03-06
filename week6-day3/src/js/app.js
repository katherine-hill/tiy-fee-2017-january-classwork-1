(function() {
    "use strict";

    const creepyUsersModule = function() {
        const $deleteBtn = $('.delete-button');
        const $peopleContainer = $('.people-container');
        let activeRequest = false;
        let settings = {
            nationality: null,
            gender: null,
            count: 1,
            stagger: false
        };

        class Loading {
            show() {
                const source = $('#loading').html();
                $peopleContainer.prepend(source);
            }
            hide() {
                $('.loader').last().remove();
            }
        }

        class Person {
            constructor(data) {
                this.image = data.picture.large;
                this.fullName = `${data.name.first} ${data.name.last}`;
                this.details = {
                    nat: data.nat,
                    cell: data.cell,
                    password: data.login.password,
                    email: data.email
                };
                this.build();
            }

            build() {
                const source = $('#person').html();
                const template = Handlebars.compile(source);
                const context = {
                    image: this.image,
                    fullName: this.fullName,
                    details: this.details
                };
                const html = template(context);

                $peopleContainer.prepend(html);
            }
        }

        function bindEvents() {
            $('.person-button').on('click', function() {
                getPersonData();
            });

            $peopleContainer.on('click', '.person-container', function() {
                $(this).toggleClass('active');
                toggleDeleteButton();
            });

            $deleteBtn.on('click', function() {
                deletePerson();
                toggleDeleteButton();
                updatePeopleCount();
            });
        }

        function updatePeopleCount() {
            const count = $('.person-container').length;
            $('.people-count').html(`${count} People Created`);
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
            if ((!activeRequest && !settings.stagger) || (settings.stagger)) {
                const icon = new Loading();
                icon.show();
                activeRequest = true;
                $.ajax({
                    url: `https://randomuser.me/api/?nat=${settings.nationality}&gender=${settings.gender}&results=${settings.count}`,
                    dataType: 'json'
                }).then((data) => {
                    for (let i = 0; i < data.results.length; i++) {
                        new Person(data.results[i]);
                        updatePeopleCount();
                        icon.hide();
                    }
                    activeRequest = false;
                }).catch((error) => {
                    console.log('Damnit!!!!!!');
                    console.log(error);
                    activeRequest = false;
                });
            } else {
                console.log('Patience is a virtue');
            }


        }

        function init(options = settings) {
            settings = options;
            bindEvents();
        }

        return {
            init: init
        };
    };

    let userApp = creepyUsersModule();
    userApp.init({
        nationality: 'gb,dk,fr',
        gender: 'male',
        stagger: true
    });
})();
