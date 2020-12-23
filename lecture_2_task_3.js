class MyIterable {
	constructor (from, to) {
	  this.from = from;
	  this.to = to;
	}

	[Symbol.iterator]() {
		if (typeof this.from !== 'number' || typeof this.to !== 'number'){
			console.log('Object should contain >from< and >two< values with type of Number')
			return this;
		}
		
		if(this.from < this.to) {
		  this.current = this.from;
		  this.last = this.to;
		}
		else {
		  this.current = this.to;
		  this.last = this.from;
		}
		return this;
	}

	next(){
		if (this.current <= this.last) {
			return {done: false, value: this.current++};
		} else {
			return {done: true};
		}
	}
};

let myIterable = new MyIterable(1, 4);
for (let item of myIterable) {
	console.log(item);
};

let myIterable1 = new MyIterable(3);
for (let item of myIterable1) {
	console.log(item);
}


