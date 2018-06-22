/*
set:
	是什么:
		1.新的数据结构，类似于数组
		2.值都是唯一的
	作用：可以数组去重
	使用方法:
		new Set()
		add=>增
		size=>length
		clear=>全删
		delete=>删除某一个
		has=>查
 */
/*let set1 = new Set();
console.info(set1)

let set2 = new Set([1,2,3,4,5,4,3]);//去重
console.info(set2);//Set(5) {1, 2, 3, 4, 5}

let set3 = new Set([1,2,3,'1','2']);//采用全等比较，1与'1'不同
console.info(set3)*/
//去除实例
/*function dedupe(array) {
  return Array.from(new Set(array));
}
console.info(dedupe([1, 1, 2, 3]));*/ // [1, 2, 3]
//方法
/*let set4 = new Set();
set4.add(1);
set4.add("你好es6");
set4.add("3")
console.info(set4)
set4.delete('3');
console.info(set4);
console.info(set4.size);
console.info(set4.has(1));
set4.clear();
console.info(set4)*/

//遍历方法
/*
keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员
 */
let arr5 = new Set(['a','b','c'])
for(let key of arr5.keys()){
	console.info(key);// a b c
}
for(let value of arr5.values()){
	console.info(value);//与上面一样
}

/*
	weakSet与Set的不同：
	1.weakSet的值必须是对象
	2.方法不同
		add
		delete
		has
 */
let weakset1 = new WeakSet();
weakset1.add({});
console.log(weakset1);