/*函数解构赋值*/
{
	function fn([a,b]){
		return a+b;
	}
	console.log(fn([3,1]));//4
}
{
	function fn(){
		return [1,2]
	}
	let a,b;
	[a,b] = fn();
	console.info(a,b);//1 2 
}
{
	function fn(){
		return [1,2,3,4,5,6,7]
	}
	//let a,b,c;
	let [a,,,b,...c] = fn();
	console.info(a,b,c);//1 4 (3) [5, 6, 7]
}