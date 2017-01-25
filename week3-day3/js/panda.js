const hungryPanda = {
    diceTextContainer: document.querySelector('.dice-1-container'),
    rollBtn: document.querySelector('.roll-btn'),
    foodAmount: 0,
    mealSize: 0,
    totalFed: 0,
    date: Date.now(),
    feedPanda() {
        debugger;
        if (this.foodAmount >= this.mealSize) {
            this.foodAmount -= this.mealSize;
            this.totalFed += this.mealSize;
        } else {
            // not enough fooooood!
        }
        this.date = Date.now();
        this.diceTextContainer.innerHTML = 6;
    },
    getValues() {
        console.log(this.foodAmount, this.mealSize, this.totalFed);
    },
    rollDice() {
        // Stuff to roll dice
    },
    init(totalFood, eachMeal) {
        this.foodAmount = totalFood;
        this.mealSize = eachMeal;

        this.rollBtn.addEventListener('click', this.rollDice);

    }
}


diceGame.init();
