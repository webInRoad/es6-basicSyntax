/*
传参
返回值
 */
/*{
	function * show(num1){
		console.info(num1)
		console.info('a');
		let yieldVar = yield;
		console.info('b');
		console.info(yieldVar)
	}
	let yieldObj = show(23);
	yieldObj.next(12);//第一个next方法的参数没用，没法给yield传参
	yieldObj.next(5);//
}*/

{
	function * show(num1){
		console.info(num1)
		console.info('a');
		let yieldVar = yield 12;//yield既可传参(yieldVar)也可有返回值
		console.info('b');
		console.info(yieldVar)
		return 55;//用于最后一个next的返回值
	}
	let yieldObj = show(23);
	let res1 = yieldObj.next(12);//第一个next方法的参数没用，没法给yield传参
	let res2 = yieldObj.next(5);//
	console.info(res1);//{value:12,done:false}
	console.info(res2);//{value:55,done:true}
}