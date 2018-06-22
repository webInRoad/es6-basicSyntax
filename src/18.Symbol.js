/*
Symbol
作用：解决命名冲突
概述：
	1.一种新的原始数据类型Symbol
	2.表示独一无二的值
使用:
	1.symbol
	2.symbol.for()
取值:
	Object.getOwnPropertySymbols
	Reflect.ownKeys
	以上两个方法都是返回数组
 */
/*{
	let obj = {
		abc:12,
		abc:23
	}
	console.info(obj.abc)//命名冲突时，会覆盖前一个
}*/
//Symbol定义的变量是独一无二的，就算描述相同，也不相同
//Symbol定义方式
/*{
	let sy1 = Symbol("abc");
	let sy2 = Symbol("abc");
	console.info(sy1===sy2);//false
	console.info(sy1)
}*/

//Symbol.for()与Symbol()的区别
//Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，
//而是会先检查给定的key是否已经存在，如果不存在才会新建一个值
/*{
	let sy3 = Symbol.for('abc');
	let sy4 = Symbol.for('abc');
	console.info(sy3==sy4);//true
}*/

//解决命名冲突
/*{
	let o = Symbol('abc');
	let obj = {
		abc:"111",
		[o]:"23"
	}
	console.info(obj)
	console.info(obj.abc);//111
	console.info(obj[o]);//23
}*/

//获取Symbol属性
{
	let o = Symbol('abc');
	let obj = {
		abc:"111",
		[o]:"23"
	}
	for(let [key,value] of Object.entries(obj)){
		console.info(key,value)
	}
	//以上遍历无法获取symbol的内容
	
	Object.getOwnPropertySymbols(obj).forEach(item=>{
		console.info(item,obj[item])
	})
	//以上遍历只能获取Symbol定义的属性
	Reflect.ownKeys(obj).forEach(item=>{
		console.info(item,obj[item])
	})
	//以上遍历可以获取所有属性
}