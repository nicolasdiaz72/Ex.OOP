function getElement(selection){
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(`Please verify the ${selection} selection, no such element exists.`);
}

class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value;
        this.increaseBtn = element.querySelector('.increase');
        this.resetBtn = element.querySelector('.reset');
        this.decreaseBtn = element.querySelector('.decrease');
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;

        //Bind
        this.increaseBtn.addEventListener('click', this.increase.bind(this));
        this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
        this.resetBtn.addEventListener('click', this.reset.bind(this));
    }
}

Counter.prototype.increase = function(){
    this.value++;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.decrease = function(){
    this.value--;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.reset = function(){
    this.value = 0;
    this.valueDOM.textContent = this.value;
}

const firstOne = new Counter(getElement('.first-counter'), 200);
const secondOne = new Counter(getElement('.second-counter'), 100);