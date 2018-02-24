class Sorter {
  
  constructor() {
    // your implementation
    this.name = 'Sorter';
  }

  add(element) {
    // your implementation
    var add = [5,6];
    return add;
  }

  at(index) {
    // your implementation
    for (var i = 0; i < this.add().length; ++i)
        {
          index = this.add()[i];
              return index;
       }
  }

  get length() {
    // your implementation
    var a = this.add().length;
    return a; 
  }

  toArray() {
    // your implementation
   var b = [];
   b = this.add();
  return b;
  }

  sort(indices) {
    // your implementation
  
  }

  setComparator(compareFunction) {
    // your implementation
    
  }
}

module.exports = Sorter;
