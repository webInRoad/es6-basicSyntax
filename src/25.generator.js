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
//与 iterator 结合使用
{
	let obj = {};
	obj[Symbol.iterator] = function* () {
	    yield 1;
	    yield 2;
	    yield 3;
	};
	for (let value of obj){
	    console.log('value',value);// value 1,value 2,value 3
	}
}
//状态机
{
	let status = function* () {
	    while (1){
	        yield 'A';
	        yield 'B';
	        yield 'C';
	    }
	};
	let state = status();
	console.log(state.next());//{value: "A", done: false}
	console.log(state.next());//{value: "B", done: false}
	console.log(state.next());//{value: "C", done: false}
	console.log(state.next());//{value: "A", done: false}
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
{
	let  draw = function (count) {
	    console.log(`剩余抽奖次数 -> ${count}`);
	};

	let residue = function *(count) {
	    while (count > 0){
	        count--;
	        yield draw(count);
	    }
	    console.log("没有多余的抽奖机会了")
	};
	let start = residue(5);
	start.next();//剩余抽奖次数 -> 4
	start.next();//剩余抽奖次数 -> 3
	start.next();//剩余抽奖次数 -> 2
	start.next();//剩余抽奖次数 -> 1
	start.next();//剩余抽奖次数 -> 0
	start.next();//没有多余的抽奖机会了
}