/*
	Object.getOwnPropertyDescriptor=>获取该属性的描述对象
 */
{
	let obj = {
		a:1,
		b:23
	}
	console.info(Object.getOwnPropertyDescriptor(obj,'a'));
	//{value: 1, writable: true, enumerable: true, configurable: true}
	obj.enumerable = false;//反而会使得obj多个属性，所以通过这种方式设置不可枚举无效
	for(let k in obj){
		console.info(k);//a b enumerable
	}
}

//让对象的某个属性不可枚举
{
	function Tabs(){

	}
	Tabs.prototype = {
		constructor:Tabs,
		a:1,
		run(){

		}
	}
	let tab = new Tabs();
	console.info(tab.constructor);//用prototype导致constructor变成可枚举 ƒ Tabs() {}
	for( let k in tab){
		console.log(k);//constructor a run 
	}
	Object.defineProperty(tab,"constructor",{
		enumerable:false
	})

	for( let k in tab){
		console.log(k);//a run 
	}
}

{
	// let arr = [1,2,3];
	// arr.__proto__.aabb = 23;
	// console.info(arr.aabb)//不推荐该方式
	
	//正式推荐的设置原型对象的方法
	let proto = {};
	let obj2 = {a:2,b:4};
	Object.setPrototypeOf(obj2,proto);
	proto.x = 43;
	proto.y =23;
	console.info(proto);//{x: 43, y: 23}
	console.info(obj2);//{a: 2, b: 4} x与y存储在__proto__中
	console.info(obj2.x,obj2.y);//{x: 43, y: 23}
}

/*
	对象的遍历:
		Object.keys()
		Object.values()
		Object.entries()
 */
{
	let obj = {
		a:1,
		b:2,
		c:"23"
	}
	for(let key of Object.values(obj)){
		console.info(key);//1 2 23
	}
	//for in循环遍历对象的属性
	//当"对象"为数组时，属性指的是数组的"索引"；
	//当"对象"为对象是，属性指的是对象的"属性"。
	console.info(Object.keys(obj));//(3) ["a", "b", "c"]
	for(let value in Object.keys(obj)){
		console.info(value)//数组索引=>0,1,2
	}
	for(let value of Object.keys(obj)){
		console.info(value);//a b c 
	}
	for(let [key,val] of Object.entries(obj)){
		console.info(key,val);//a 1,b 2,c 23
	}
}