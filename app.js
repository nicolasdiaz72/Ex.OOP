function getElement(selection){
    const element = document.querySelector(selection)
    if (element){
        return element
    } 
    throw new Error(
        `Please verify the ${selection} selection, no such element exists.`)
    }

function Counter (element, value){
    this.counter = element
    this.value = value
    this.increaseBtn = element.querySelector('.increase')
    this.resetBtn = element.querySelector('.reset')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')
    this.valueDOM.textContent = this.value
    //Bind
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.reset(this)
    this.increaseBtn.addEventListener('click', this.increase)
    this.decreaseBtn.addEventListener('click', this.decrease)
    this.resetBtn.addEventListener('click', this.reset)
}


const firstOne = new Counter(getElement('.first-counter'), 200)
const secondOne = new Counter(getElement('.second-counter'), 100)


Counter.prototype.increase = function(){
    this.value++
    this.valueDOM.textContent = this.value
}

Counter.prototype.decrease = function(){
    this.value--
    this.valueDOM.textContent = this.value
}

Counter.prototype.reset = function(){
    this.value = 0;
    this.valueDOM.textContent = this.value
}