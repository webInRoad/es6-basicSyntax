import 'babel-polyfill';
let arr = ['a','b','c','d'];
/*谷歌下都不支持数组的values函数，但引入babel-polyfill后就行了*/
for(let val of arr.values()){

  console.log(val);

}