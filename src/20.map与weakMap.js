/*
map:
	1.map的作用:
		key可以是任意的内容
	2.使用
		长度:size
		删除:delete clear
		增:set 
		查:get
 */
let obj = {
	"a":123
	//[1,2,3]:123//会报错,只能是字符串作为键名
}
console.log(obj)
let map1 = new Map();
map1.set('a',123);
let a = ['a','b'];
map1.set(a,12);
map1.set(0,'你好');
console.info(map1);
console.info(map1.size);
console.info(map1.get(a));//12
console.info(map1.delete(0));
console.info(map1.clear())
console.info(map1.size)
const map = new Map([
  ['name', '张三'],//数组第一项是键，第二项是值
  ['title', 'Author']
]);

console.info(map.size )// 2
console.info(map.has('name'))// true
console.info(map.get('name'))// "张三"
console.info(map.has('title'))// true
console.info(map.get('title'))// "Author"
/*
	weakMap
	map和weakMap区别
	1.weakMap没有遍历操作
	2.也没有size、clear属性
	3.垃圾回收机制
 */