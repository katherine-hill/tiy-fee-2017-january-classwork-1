(function() {
    "use strict";

    const musicAppModule = function() {
        const bandList = document.querySelector('.list-bands');
        const albumList = document.querySelector('.list-albums');
        const photoContainer = document.querySelector('.photo-container');
        const delay = 1500;
        let bandHeadline = document.querySelector('.band-headline');
        let bandPhoto = document.querySelector('.band-photo');
        let bandOrigin = document.querySelector('.origin');

        const loadingIcon = {
            show(targetContainer) {
                const icon = document.createElement('img');
                icon.src = './images/loading.png';
                icon.className = 'loading';
                document.querySelector(`.${targetContainer}.loading-container`).appendChild(icon);
            },
            hide() {
                document.querySelector('.loading').className = 'is-hidden';
            }
        };

        function buildBandDetails(bandData) {
            bandHeadline.textContent = bandData.name;
            bandHeadline.classList.remove('is-hidden');
            photoContainer.classList.remove('is-hidden');
            bandPhoto.src = `./images/${bandData.image}`;
            bandOrigin.textContent = bandData.location;
        }

        function buildAlbumsList(albumsData) {
            albumList.innerHTML = '';
            loadingIcon.show('albums');
            setTimeout(() => {
                loadingIcon.hide();
                albumsData = albumsData.reverse();
                for (let i = 0; i < albumsData.length; i++) {
                    let item = document.createElement('li');
                    item.innerHTML = albumsData[i];
                    albumList.appendChild(item);
                }
            }, delay);

        }

        function buildBandList(bandListData) {
            loadingIcon.show('bands');
            setTimeout(() => {
                loadingIcon.hide();
                for (let i = 0; i < bandListData.length; i++) {
                    let item = document.createElement('li');
                    item.innerHTML = bandListData[i].name;
                    bandList.appendChild(item);

                    item.addEventListener('click', () => {
                        buildBandDetails(bandListData[i]);
                        getData('albums', bandListData[i].name);
                    });
                }
            }, delay);
        }

        function getData(type, bandName = null) {
            const file = type === 'bands' ? 'music.json' : 'albums.json';
            let http = new XMLHttpRequest();

            http.onreadystatechange = function() {
                if (http.readyState === 4 && http.status === 200) {
                    if (type === 'bands') {
                        console.log(JSON.parse(http.response));
                        const bandData = JSON.parse(http.response);
                        buildBandList(bandData);
                    } else {
                        console.log(JSON.parse(http.response));
                        const albumsData = JSON.parse(http.response)[0];
                        for (let band in albumsData) {
                            if (band === bandName) {
                                buildAlbumsList(albumsData[bandName].albums);
                            }
                        }
                    }
                }
            };

            http.open('GET', `./data/${file}`, true);
            http.send();
        }

        return {
            getData: getData
        };
    };

    const bandApp = musicAppModule();
    bandApp.getData('bands');
})();
