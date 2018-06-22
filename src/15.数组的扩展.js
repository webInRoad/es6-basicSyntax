/*
数组的扩展：
1.运算符(...)  将一个数组转为用逗号分隔的参数序列

 */
{
	let fn = (...arg)=>{
		console.info(arg.length);//5
		console.info(arg);//(5) [1, 2, 3, 4, 5]
		console.info(arg[0]);//1
	}
	fn(1,2,3,4,5)
}
{
	console.info(...[2,3,4]);//2 3 4
}
/*
	方法:
	1.Array.from() 用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
*/
{
	let span = document.getElementsByTagName("span");//DOM获取的不是数组,只是类似数组
	console.info(span);//(2) [span, span]
	//span.push("a");//报错
	let arr = Array.from(span);
	arr.push("a");
	console.info(arr);//(3) [span, span, "a"]
}
/*
	2.Array.of() 将一组值，转换为数组
 */
{
	console.info(Array.of(3,12,443,2323));//(4) [3, 12, 443, 2323]
}

/*
	3.copyWithin():在当前数组内部，将指定位置的成员
		复制到其他位置（会覆盖原有成员），然后返回当前数组,会更改原数组
	它接受三个参数。
		target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
		start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
		end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
 */
{
	var arr = [1,323,43,2323,34]
	console.info(arr.copyWithin(1,3,4));//(5) [1, 2323, 43, 2323, 34]
	console.info(arr);//(5) [1, 2323, 43, 2323, 34]
}

/*
	4.find与findIndex
	find:用于找出第一个符合条件的数组成员。
		它的参数是一个回调函数，所有数组成员依次执行该回调函数，
		直到找出第一个返回值为true的成员，
		然后返回该成员。如果没有符合条件的成员，则返回undefined
	findIndex:返回第一个符合条件的数组成员的位置，
		如果所有成员都不符合条件，则返回-1
	方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组
 */
{
	let arr = ['a','b','c','d'];
	console.info(arr.find(function(value){
		return value=="c"
	}));//c
	console.info(arr.findIndex(value=>value=="c"));//2
}

/*
	5.fill:使用给定值，填充一个数组
		参数1=>替换成什么
		参数2=>开始位置
		参数3=>结束位置
	即fill (替换的数值，起始位置，结束位置)
 */
{
	let arr = [23,434,674];
	console.info(arr.fill("7",0,2));//(2) ["7","7",674]
}
/*
	6.entries、keys、values
		得到key、value
 */
 {
 	var arr = [23,323,434]
 	for(let key of arr.keys()){
 		console.info(key);//0 1 2 
 	}
 	for(let value of arr.values()){
 		console.info(value);//23 323 434
 	}
 	//键与值都获取
 	for(let [key,value] of arr.entries()){
 		console.info(key,value);// 0 23,1 323,2 434
 	}
 }
 /*
 	7.includes:表示某个数组是否包含给定的值
  */
 {
 	let arr = [2,'23','a']
 	console.info(arr.includes('a'));//true
 }