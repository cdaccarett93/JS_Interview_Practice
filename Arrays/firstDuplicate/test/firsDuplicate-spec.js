const assert = require('chai').assert;
const firstDuplicate = require('../firstDuplicate');

describe('firstDuplicate', function() {
  it('should return 3 as firstDuplicate', function(){
    var arrayTest = [2, 3, 3, 1, 5, 2];
    assert.equal(firstDuplicate(arrayTest), 3);
  });

  it('should return -1 no duplicate in array', function(){
    var arrayTest = [2, 4, 3, 5, 1];
    assert.equal(firstDuplicate(arrayTest), -1);
  });

  it('should return -1 no duplicate in array with 1 element', function(){
    var arrayTest = [1];
    assert.equal(firstDuplicate(arrayTest), -1);
  });

  it('should return 2 as firstDuplicate', function(){
    var arrayTest = [2, 2];
    assert.equal(firstDuplicate(arrayTest), 2);
  });

  it('should return -1 no duplicate in array', function(){
    var arrayTest = [2, 1];
    assert.equal(firstDuplicate(arrayTest), -1);
  });

  it('should return -1 no duplicate in array', function(){
    var arrayTest = [2, 1, 3];
    assert.equal(firstDuplicate(arrayTest), -1);
  });

  it('should return 3 as firstDuplicate in array', function(){
    var arrayTest = [2, 3, 3];
    assert.equal(firstDuplicate(arrayTest), 3);
  });

  it('should return 3 as firstDuplicate in array', function(){
    var arrayTest = [3, 3, 3];
    assert.equal(firstDuplicate(arrayTest), 3);
  });

  it('should return 6 as firstDuplicate in array', function(){
    var arrayTest = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8];
    assert.equal(firstDuplicate(arrayTest), 6);
  });

  it('should return -1 no duplicate in array', function(){
    var arrayTest = [10, 6, 8, 4, 9, 1, 7, 2, 5, 3];
    assert.equal(firstDuplicate(arrayTest), -1);
  });

  it('should return 1 as firstDuplicate in array', function(){
    var arrayTest = [1, 1, 2, 2, 1];
    assert.equal(firstDuplicate(arrayTest), 1);
  });

});
