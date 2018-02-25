class Sorter {
  
  constructor() {
    // your implementation
   this.kot = new Array();
  }

  add(element) {
    // your implementation
    var mas = new Array();
    mas = this.kot.push(element);
    return mas;
  }

  at(index) {
    // your implementation
    return  this.kot[index]; 
  }

  get length() {
    // your implementation
    var ak = this.kot.length;
    return ak; 
  }

  toArray() {
    // your implementation
    var b =[];
    b = this.kot;
    return b;
  }

  sort(indices) {
    // your implementation
    
    this.kot.sort();
    
  }

  setComparator(compareFunction) {
    // your implementation
    this.kot.sort(compareFunction);
  }
}

module.exports = Sorter;
