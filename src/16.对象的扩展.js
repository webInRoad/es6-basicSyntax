/*
对象
	1.属性的简洁表示法:在对象之中，直接写变量
		这时属性名为变量名, 属性值为变量的值
		let obj = {
			a
		}
 */
{
	let a = "zhangsan";
	let obj = {
		a
	}
	console.info(obj.a);//zhangsan
}
/*
	2.属性名表达式
		使用字面量方式定义对象（使用大括号），
		在 ES5 中只能使用（标识符）定义属性
		如 var obj = {
			foo:true,
			abc:123
		}
 */
{
	let foo = "max-vlan"
	let obj = {
		[foo]:22,//允许在字面量中用变量作key，即用[key]
		abc:123
	}
	console.info(obj["max-vlan"]);//22
	console.info(obj[foo]);//22
}
/*
	3.获取方法的name属性

 */
{
	let obj = {
		run(){
			return "我是run"
		}
	}
	console.log(obj.run.name);//run
}

/*
	4.Object.is():比较(与严格比较运算符（===）的行为基本一致)
	不同之处只有两个：一是+0不等于-0，二是NaN等于自身
 */
{
	console.info(34=="34")//true
	console.info(34==="34")//false
	console.info(Object.is(34,"34"))//false
	console.info(+0===-0)//true
	console.info(Object.is(+0,-0))//false
	console.info(NaN===NaN)//false
	console.info(Object.is(NaN,NaN))//true
}

/*
	5.assign
		Object.assign方法用于对象的合并，
		将源对象（source）的所有可枚举属性，复制到目标对象（target）
		有点类似于$.extend
 */
{
	const target = { a: 1,b:1 };
	const source1 = { b: 2 };
	const source2 = { c: 3 };
	console.info(Object.assign(target, source1, source2));//{a: 1, b: 2, c: 3}
	console.log(target);//{a: 1, b: 2, c: 3}
}