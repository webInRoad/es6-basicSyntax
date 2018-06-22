/*
数组:
map 		映射 	一个对一个
reduce 		汇总 	一堆出来一个
filter 		过滤器
forEach		循环(迭代)
 */
/*
map:
[12, 58, 99, 86, 45, 91] ==>[不及格, 不及格, 及格, 及格, 不及格, 及格]

  [45, 57, 135, 28] ==>
  [
    {name: 'blue', level: 0, role: 0},
    {name: 'zhangsan', level: 99, role: 3},
    {name: 'aaa', level: 0, role: 0},
    {name: 'blue', level: 0, role: 0},
  ]
 */
/*{
	let arr = [12,4,8];
	let result = arr.map(function(item){
		return item*2;
	})
	console.info(result);
}*/
/*{
	let arr = [12,4,8];
	let result = arr.map(item=>item*2)
	console.info(result);
}*/
/*{
	let arr = [45,99,90,60,23];
	let result = arr.map(function(item){
		return item>=60?"及格":"不及格";
	})
	let result = arr.map(item=>item>=60?"及格":"不及格")
	console.info(result);
}*/
/*
 *	==================================================================================================================
 */
/**
 * reduce:
 * 算个总数:[12, 8000000, 599999] =>  80060011
 * 算个平均数:[12, 59, 99]=>  56.67
 */
//算个总数
/*{
	let arr = [1,4,5,2];
	let result = arr.reduce(function(temp,item,index){
		return temp+item;
	})
	console.info(result);
}*/
//算个平均数
/*{
	let arr = [1,3,5,6,7];
	let result = arr.reduce(function(temp,item,index){
		if(arr.length-1!=index){
			return temp+item;
		}else{
			return (temp+item)/arr.length;
		}
	})
	console.info(result);
}*/
/*
 *	==================================================================================================================
 */
 /*
 filter 过滤器
  */
 /*{
 	let arr = [1,4,5,5,9,5,1,8,27,68,39];
 	let result = arr.filter(function(item){
 		if(item%3==0){
 			return true;
 		}else{
 			return false;
 		}
 	})
 	let result = arr.filter(item=>item%3==0)
 	console.log(result)
 }*/

 /*{
 	let arr = [
 		{title:'男士衬衫',price:50},
 		{title:'女士衬衫',price:500},
 		{title:'男士裤子',price:20},
 		{title:'女士裤子',price:5000},
 	];
 	let result = arr.filter(function(item){
 		return item.price>=500
 	})
 	let result = arr.filter(item=>item.price>=500)
 	console.info(result)
 }*/

/**
 * 迭代 forEach
 */
{
	let arr = [1,34,45,452];
	let result = arr.forEach(function(item,index){
		console.info(index+":"+item)
		console.info(`${index}:${item}`)
		//return index+":"+item; 没有return 函数
	})
	console.log(arr)
}


