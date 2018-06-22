/*
对象解构赋值
格式：let {a,b,c} = {a:1,b:2,c:3} 是通过key来匹配的，而不是根据顺序
注意:
	1.如果匹配不到，则变量是undefined
默认值: let {a=true}
 */

{
	let {a,b} = {a:1,b:2};
	console.info(a,b)
}
{
	let {a,b} = {aaa:3,b:4};
	console.info(a,b)
}
{
	let {a,b} = {b:4,a:3};
	console.info(a,b)
}
/*对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量*/
{
	let {foo:a} = {foo:'aaa'};
	//console.info(foo);//foo是模式，报ReferenceError
	console.info(a)
}
/*嵌套结构的赋值*/
{
	let obj = {
		p:[
			'hello',
			{y:"world"}
		]
	}
	let {p:[x,{y}]} = obj;
	console.info(x,y)
}
/*默认值
默认值生效的条件是，对象的属性值严格等于undefined
*/
{
	let {a=true} = {a:1};
	console.log(a)
}
{
	let {a=true} = {a:undefined};
	console.log(a)
}
{
	let {a=true} = {a:null};
	console.log(a)
}
