(function() {
    "use strict";
    const container = document.querySelector('.container');

    // const Ghost = function(name, color, animation = 'float') {
    //     this.animation = animation;
    //     this.background = color;
    //     this.name = name;
    //     this.regions = {
    //         container: null,
    //         ghost: null,
    //         info: null
    //     };
    //     this.init();
    // };
    //
    // Ghost.prototype = {
    //     addListeners() {
    //         this.regions.ghost.addEventListener('click', () => {
    //             this.regions.ghost.classList.add(this.animation);
    //         });
    //         this.regions.ghost.addEventListener('animationend', () => {
    //             this.regions.ghost.classList.remove(this.animation);
    //         });
    //     },
    //     build() {
    //         const ghostContainer = document.createElement('div');
    //         const ghost = document.createElement('div');
    //         const info = document.createElement('p');
    //
    //         ghostContainer.className = `ghost-container ${this.name.toLowerCase()}`;
    //         ghost.className = 'ghost';
    //         ghost.style.backgroundColor = this.background;
    //         info.textContent = this.name;
    //
    //         ghostContainer.appendChild(ghost);
    //         ghostContainer.appendChild(info);
    //         container.appendChild(ghostContainer);
    //
    //         this.regions.ghost = ghost;
    //         this.regions.container = ghostContainer;
    //         this.regions.info = info;
    //     },
    //     init() {
    //         this.build();
    //         this.addListeners();
    //     }
    // };

    // Ghost.prototype.addListeners = function() {
    //     this.regions.ghost.addEventListener('click', () => {
    //         this.regions.ghost.classList.add(this.animation);
    //     });
    //     this.regions.ghost.addEventListener('animationend', () => {
    //         this.regions.ghost.classList.remove(this.animation);
    //     });
    // };
    //
    // Ghost.prototype.build = function() {
    //     const ghostContainer = document.createElement('div');
    //     const ghost = document.createElement('div');
    //     const info = document.createElement('p');
    //
    //     ghostContainer.className = `ghost-container ${this.name.toLowerCase()}`;
    //     ghost.className = 'ghost';
    //     ghost.style.backgroundColor = this.background;
    //     info.textContent = this.name;
    //
    //     ghostContainer.appendChild(ghost);
    //     ghostContainer.appendChild(info);
    //     container.appendChild(ghostContainer);
    //
    //     this.regions.ghost = ghost;
    //     this.regions.container = ghostContainer;
    //     this.regions.info = info;
    // }
    //
    // Ghost.prototype.init = function() {
    //     this.build();
    //     this.addListeners();
    // }


    class Ghost {
        constructor(name, color, animation = 'float') {
            this.name = name;
            this.background = color;
            this.animation = animation;
            this.init();
        }

        addListeners() {
            this.regions.ghost.addEventListener('click', () => {
                this.regions.ghost.classList.add(this.animation);
            });
            this.regions.ghost.addEventListener('animationend', () => {
                this.regions.ghost.classList.remove(this.animation);
            });
        }
        build() {
            const ghostContainer = document.createElement('div');
            const ghost = document.createElement('div');
            const info = document.createElement('p');

            ghostContainer.className = `ghost-container ${this.name.toLowerCase()}`;
            ghost.className = 'ghost';
            ghost.style.backgroundColor = this.background;
            info.textContent = this.name;

            ghostContainer.appendChild(ghost);
            ghostContainer.appendChild(info);
            container.appendChild(ghostContainer);

            return {
                container: ghostContainer,
                ghost: ghost,
                info: info
            };
        }

        init() {
            this.regions = this.build();
            this.addListeners();
        }
    }

    const blinky = new Ghost('Blinky', '#FE2601', 'lookout');
    const pinky = new Ghost('Pinky', '#FDB1B1', 'chase');
    const inky = new Ghost('Inky', '#00DEE1', 'poof');
    const clyde = new Ghost('Clyde', '#FFA101', 'blink');
    const Billybob = new Ghost('Billybob', '#ed6705');
    console.dir(blinky);

    // console.log(blinky);
    // blinky.build();
    // blinky.addListeners();
    // blinky.init();

    // pinky.build();
    // pinky.addListeners();
    //
    // inky.build();
    // inky.addListeners();
    //
    // clyde.build();
    // clyde.addListeners();

})();


// const obj = {};
// const obj2 = new Object();
// const arr = [];
// const arr2 = new Array();
//
// console.log(obj instanceof Object);
// console.log(arr instanceof Array);
//
// console.log(arr2);


// const Person = function() {
//     this.name = null;
//     // this.sayHello = function() {
//     //     console.log(`Hey. My name is ${this.name}`);
//     // };
//     this.age = null;
//     this.icecream = 'Rocky Road';
// };
//
// Person.prototype.sayHello = function() {
//     console.log(`Hello, there. My name is ${this.name}`);
// };
// Person.prototype.favoriteIceCream = function() {
//     console.log(`I love ${this.icecream}!`);
// }
//
// const musician = new Person();
// // console.log(musician instanceof Person);
// musician.name = 'Alice Cooper';
// musician.instrument = 'Vocals / Magic';
// console.log(musician);
//
// const chef = new Person();
// chef.name = 'Swedish Chef';
// chef.icecream = 'Vanilla';
// console.log(chef);
