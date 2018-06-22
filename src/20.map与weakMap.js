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
console.log(obj);//{a: 123}
let map1 = new Map();
map1.set('a',123);
let a = ['a','b'];
map1.set(a,12);
map1.set(0,'你好');
console.info(map1);//Map(3) {"a" => 123, Array(2) => 12, 0 => "你好"}
console.info(map1.size);//3
console.info(map1.get(a));//12
console.info(map1.delete(0));//true
console.info(map1.clear());//undefined
console.info(map1.size);//0
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
	4.key要求是个对象
 */
{
	let weakMap = new WeakMap();
 	weakMap.set({},"哈哈哈哈");
 	console.log(weakMap);//WeakMap {{…} => "哈哈哈哈"}
}
