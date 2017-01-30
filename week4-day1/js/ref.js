console.clear();
/** The color, Duke. The colors!
 * Clyde #FFA101, Blinky #FE2601, Pinky #FDB1B1, Inky #00DEE1, Active #2800FF
 */

(function() {
    const targetContainer = document.querySelector('.container');

    //   Ghost.prototype.build = function() {
    //     const ghostContainer = document.createElement('div');
    //     const ghost = document.createElement('div');
    //     const info = document.createElement('p');

    //     ghostContainer.className = 'ghost-container';
    //     ghost.className = 'ghost';
    //     ghost.style.backgroundColor = this.info.color;
    //     info.textContent = this.info.name;

    //     ghostContainer.appendChild(ghost);
    //     ghostContainer.appendChild(info);
    //     targetContainer.appendChild(ghostContainer);

    //     // Extract to UpdateRegions prototype method
    //     this.regions.container = ghostContainer;
    //     this.regions.ghost = ghost;
    //     this.regions.name = info;
    //   }

    //   Ghost.prototype.addListeners = function() {
    //     this.regions.ghost.addEventListener('click', () => {
    //       this.regions.ghost.classList.add(this.info.class);
    //     });
    //     this.regions.ghost.addEventListener('animationend', () => {
    //       this.regions.ghost.classList.remove(this.info.class);
    //     });
    //   }

    //   function Ghost(name, color, animation = 'float') {
    //     this.info = {
    //         name: name,
    //         color: color,
    //         class: animation
    //       },
    //       this.regions = {
    //       container: null,
    //       ghost: null,
    //       name: null
    //     },
    //       this.init = function() {
    //         this.build();
    //         this.addListeners();
    //       }
    //   }

    class Ghost {
        constructor(name, color, animation = 'float') {
            this.info = {
                name: name,
                color: color,
                class: animation
            };
            this.regions = {
                container: null,
                ghost: null,
                name: null
            };
            this.init = function() {
                this.build();
                this.addListeners();
            }
        }

        build() {
            const ghostContainer = document.createElement('div');
            const ghost = document.createElement('div');
            const info = document.createElement('p');

            ghostContainer.className = 'ghost-container';
            ghost.className = 'ghost';
            ghost.style.backgroundColor = this.info.color;
            info.textContent = this.info.name;

            ghostContainer.appendChild(ghost);
            ghostContainer.appendChild(info);
            targetContainer.appendChild(ghostContainer);

            // Extract to UpdateRegions prototype method
            this.regions.container = ghostContainer;
            this.regions.ghost = ghost;
            this.regions.name = info;
        }

        addListeners() {
            this.regions.ghost.addEventListener('click', () => {
                this.regions.ghost.classList.add(this.info.class);
            });
            this.regions.ghost.addEventListener('animationend', () => {
                this.regions.ghost.classList.remove(this.info.class);
            });
        }
    }

    const test = new Ghost('James', '#900', 'chase');
    test.init();
    test.info.class = 'poof';

    const test2 = new Ghost('Jane', '#090');
    test2.init();
})();
