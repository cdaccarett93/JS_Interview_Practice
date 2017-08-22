module.exports = function firstDuplicate(a) {
  var temp = new Map();
  for (var i = 0; i < a.length; i++) {
    if(temp.has(a[i])) {
      return a[i];
    } else {
      temp.set(a[i], i);
    }
  }
  return -1;
}
