function Animal(name) {
    this.name = name
    this.canWalk = true
	this.sayhello = function(){
		alert("Hello");
	}
}

var animal = new Animal("��������")

function Rabbit(name) {
	this.name = name
}

// ��� �������, ��������� Rabbit
// ����� ����� �������� (�����������) animal
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