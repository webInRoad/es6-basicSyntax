/*
函数——箭头函数
function 名字(){

}
转成
()=>{

}
1.如果只有一个参数，()可以省
2.如果只有一个return，{}可以省
 */
/*window.onload = function(){
	alert('abc')
}*/
//钩子函数
/*window.onload = ()=>{
	alert('abc')
}*/
/*{
	let show = function(){
		console.info('abc');
	};
	let show=()=>{
		console.info('a')
	}
	show();
}*/

/*{
	let show = (a)=>{return a*2};
	console.info(show(12))
}*/
//只有一个参数(去掉圆括号)、跟只有一条return语句(去掉{}与return)
/*{
	let show = a=>a*2;
	console.info(show(123))
}*/

//两个参数
/*{
	let show = function(a,b){
		console.info(a+b)
	}
	let show =(a,b)=>{
		console.info(a+b)
	}
	show(12,3)
}*/

/*{
	let arr = [1,3,4,6,23,43,34];
	arr.sort(function(a,b){
		return a-b;
	});
	arr.sort((a,b)=>a-b)
	console.info(arr)
}*/