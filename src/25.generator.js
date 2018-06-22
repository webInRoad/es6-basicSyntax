/*
	Generator
		1.函数
		2.异步编程解决方案
			格式: let fn = function* (){
				yield
			}
			*/
{
	let fn = function* (){
			yield 'a';
			yield 'b';
			yield 'c';
	}
	let fnG = new fn();
	console.info(fnG.next());//{value: "a", done: false}
	console.info(fnG.next());//{value: "b", done: false}
	console.info(fnG.next());//{value: "c", done: false}
	console.info(fnG.next());//{value: undefined, done: true}
}
//场景:返回统计剩余次数
{
	let num = function(count){
		console.info(`剩余${count}次`)
	}
	let res = function* (count){
		while(count>0){
			count--;
			yield num(count)
		}
	}
	let sum = res(5);
	let btn = document.createElement("button");
	btn.innerHTML = "开始抽奖"
	document.body.appendChild(btn);
	btn.addEventListener("click",function(){
		sum.next();
	})
}