/*
方法
	1.includes()：返回布尔值，表示是否找到了参数字符串。
	2.startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
	3.endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
	4.repeat():返回一个新字符串，表示将原字符串重复n次
	5.padStart()用于头部补全
	6.padEnd()用于尾部补全
 */
{
	let str = "hello world!";
	//es6之前采用indexOf确定一个字符串是否包含在另一个字符串中
	console.info(str.indexOf("o"));//4
	console.info(str.indexOf("z"));//-1
	console.info(str.includes("e"));//true
	console.info(str.includes("e",2));//false 第二个参数为起始位置
}
{
	let str = "hello world!";
	console.info(str.startsWith("he"));//true
	console.info(str.startsWith("he",1));//false
	console.info(str.startsWith("world",6));//true
}
{
	let str = "hello world!";
	console.info(str.endsWith("!"));//true
	console.info(str.endsWith("d",11));//d的后一位是11就返回 true 否则为false
	console.info(str.endsWith("hello",5));//o的后一位是5就返回 true 否则为false
	console.info(str.endsWith("hello",6));//false
}
//repeat
{
	let str = "ab";
	console.info(str.repeat(2));//abab
	console.info('na'.repeat(0));// ""
}
//padStart padEnd
//padStart和padEnd一共接受两个参数，
//第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串
{
	//如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
	console.log("xxxx".padStart(2,'ab'));//'xxxx' 
	//如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串
	console.log('abc'.padStart(10, '0123456789'));// '0123456abc' 
	console.log("10".padStart(3,"0"));//010
  	console.log("5".padEnd(2,"ab"));//5a
}
//场景
{
	'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
	'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
}

