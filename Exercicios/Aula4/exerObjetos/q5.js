function mesclarObjetos(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
console.log(mesclarObjetos(obj1, obj2)); 