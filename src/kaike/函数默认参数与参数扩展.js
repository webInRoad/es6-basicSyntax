/*函数的参数
1.参数扩展/数组展开
2.默认参数
------------------------------------------------------------------------------
参数扩展：
1.收集参数
  function show(a, b, ...args){}
  *Rest Parameter必须是最后一个
2.展开数组
  ...arr    =>    1,2,3
  *展开后的效果，跟直接把数组的内容写在这儿一样
------------------------------------------------------------------------------
默认参数
$('#div1').animate({width: '200px'});
$('#div1').animate({width: '200px'}, 1000);*/
//收集参数
/*{
	function show(a,b,c,...d){//Rest Parameter必须是最后一个
		console.info(d);
	}
	show(1,3,4,5,7,76,5,5,3,4)
}*/
//展开数组
/*{
	let arr = [1,2,3];
	
	let show = (a,b,c)=>{
		console.info(a)
		console.info(b)
		console.info(c)
	}
	show(...arr);
}*/
//展开多个数组
/*{
	let arr1 = [1,2,3];
	let arr2 = [4,5,6];
	let arr = [...arr1,...arr2];
	console.info(arr)
}*/
//不能用变量接收...
/*{
	let a;
	let arr = [1,2,3];
	a = ...arr;
	console.info(a)//报错
}*/

{
	function show(...args){
      fn(...args);
    }

    function fn(a, b){
      alert(a+b);
    }

    show(12, 5);
}