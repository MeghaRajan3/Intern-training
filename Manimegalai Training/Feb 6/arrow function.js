const obj = {
  value: 10,
  increment(){ // why wez
    this.value++;
    console.log(this.value);
  }
};
obj.increment();