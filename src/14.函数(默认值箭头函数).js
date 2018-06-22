/*
1.函数参数的默认值
	function fn(obj=xx)
2.函数作用域
3.rest (...)
4.箭头函数
	1)arguments对象 不存在
	2)不能new
	3)this指向
 */

//默认参数的默认值
{
	function fn(obj){
		var obj = obj || {};
		obj.username = '张三';
		return obj.username;
	}
	console.info(fn());//张三
}
//等价于
{
	function fn(obj={"username":'张三'}){
		return obj;
	}
	//等价于
	function fn(obj={}){
		obj["username"] = "张三";
		return obj;
	}
	console.info(fn());//{username: "张三"}
}

{
	let x = '你好';
	function fn(x,y=x){
		console.info(x,y);//undefined  undefined
	}
	fn();
}

//rest
{
	function fn(a,b,...c){
		console.info(a,b,c,c.length);//1 2 (7) [3, 4, 6, 7, 8, 9, 10] 7
	}
	fn(1,2,3,4,6,7,8,9,10)
}

//箭头函数
{
	let fn = function(v){
		return v;
	}
	console.info(fn())//undefined
	//只有一个参数跟函数体只有一条return语句,可以写成如下
	let fnEs6 = v=>v
	console.info(fnEs6(5));//5
}
{
	let fn = function(){
		return 123;
	}
	console.info(fn());//123
	let fnEs6 = ()=>123
	console.info(fnEs6());//123
}

{
	let fn = function(obj){
		var obj = obj || {};
		obj.username = "张三";
		return obj.username;
	}
	console.info(fn());//张三
	let fnEs6 = (obj={})=>{
		obj.username = '张三';
		return obj.username;
	}
	console.info(fnEs6());//张三
}
//箭头函数没有arguments以及不能用new方式
/*{
	let fn = function(){
		console.log(arguments);
	}
	fn(1,2,4)
	let fn1 = ()=>{
		console.info(arguments);
	}
	fn1(12,3,4)
}*/

  let fn = function(){
  }
  let fnEs6 = ()=>{}
  let obj = new fnEs6();

{
	let obj = {
		username:'张三',
		run:function(){
			setTimeout(function(){
				console.log(this);
				//Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
				return this.username;
			},1000)
		}
	}
	console.info(obj.run(),1);//undefined
	let objEs6 = {
		username:'张三',
		run:function(){
			setTimeout(()=>{
				console.log(this);//{username: "张三", run: ƒ}
				console.info(this.username)
				return this.username;
			},1000)
		}
	}
	console.info(objEs6.run(),33);//undefined
}
let x = 'test'
function test(x,y=x) {
    console.log(`x=${x}, y=${y}`)
}
test()
// 输出结果
//x=undefined, y=undefined