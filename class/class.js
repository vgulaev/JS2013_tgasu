function Animal(name) {
    this.name = name
    this.canWalk = true
	this.sayhello = function(){
		alert("Hello");
	}
}

var animal = new Animal("скотинка")

function Rabbit(name) {
	this.name = name
}

// все объекты, созданные Rabbit
// будут иметь прототип (наследовать) animal
Rabbit.prototype = animal

function myanimal() {
	this.sayhello = function(){
		alert("Hello");
	}
}

function cow(){
	this.name = "cow";
	//this.prototype = animal;
}


function createanimal(){
	a = new myanimal();
	cow.prototype = a;
	b = new cow();
	b.sayhello();
}