/*
字符串解构赋值
格式: let [a,b,c] = '123' 字符串被转换成了一个类似数组的对象
注意:
	1.如果匹配不到，则变量是undefined
数值解构赋值
布尔解构赋值
 */
{
	let [a,b] = 'hello';
	console.info(a,b);// h 3 
}
{
	let [a,b,c] = 'h2';
	console.info(a,b,c);//h 2 undefined
}
/*带有的length,toString等属性*/
{
	let {length:len} = "hello";
	console.info(len);//5
}
{
	let {toString:a} = 12;
	console.info(a);//ƒ toString() { [native code] }
	console.info(a===Number.prototype.toString);//true
}