/*
1.class的基本语法
	格式:
		class 名称{
			constructor(){
			
			}
			方法名称1(){
	
			}
			方法名称2(){
	
			}
		}
		new 名称()
 */
//es6之前的面向对象
/*{
	function Fn(){
		this.name = "张三";
	}
	Fn.prototype.run = function(){
		console.info("run")
	}
	var fn = new Fn();
	console.info(fn.name);
	fn.run();
}*/
//es6的面向对象
/*{
	class Fn{
		constructor(name){
			this.name = name;
		}
		run(){
			console.info(`我的名字是${this.name}`)
		}
	}
	let fn = new Fn("zjh");
	console.info(fn.name);
	fn.run()
}*/

/*
class实现继承
格式：
	class 子类 extends 父类{
		constructor(){
			super() //放在函数体第一行
		}
	}
 */
{
	class Parent{
		constructor(){
			this.name = 'cyz';
		}
	}

	class Child extends Parent{
		constructor(){
			super();
			this.age = 23
		}
	}
	let child = new Child();
	let parent = new Parent();
	console.info(child.age)
	console.info(parent.name)
	console.info(child.name)
}