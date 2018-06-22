/*
模板字符串
	格式：``
	加入内容:`${变量名称...}`
标签模板
	alert() ===> alert``
	注意:
	 1,加入变量，会先把字符串放入到一个数组中
 */
/*{
	var ul = document.getElementById("#uls");
	var str = '';
	var a = '这是一个a';
	var p = '这是一个p';
	str+='<li style="background:red">';
	str+='<a href="#">'+a+'</a>';
	str+='<p>'+p+'</p>';
	str+='</li>';
	uls.innerHTML +=str;
}*/
{
	let ul = document.getElementById("#uls");
	var a = '这是一个aaa';
	var p = '这是一个ppp';
	let str = `<li style="background:red"><a href="#">${a}
	<p>${p}</p></li>`;
	uls.innerHTML +=str;
}
{
	let username = "张三";
	let usePwd="123";
	console.info(`${username}===>${usePwd}`);//张三===>123
}
//可以进行运算
{
	let a = 1;
	let b = 2;
	console.info(`${a+b}`);//3
}
//标签模板
//紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串
/*{
	//alert(123);
	alert`1234`
}*/
{
	let obj = {
		name:"张建辉",
		age:"男"
	}
	function fn(a,b,c){
		console.log(a);//第一个参数是一个数组，
		//该数组的成员是模板字符串中那些没有变量替换的部分
		// (3) ["login ", "admin", "", raw: Array(3)]
		return `${a}===>${b}===>${c}`;
	}
	console.info(fn`login ${obj.name}admin${obj.age}`);//login ,admin,===>张建辉===>男
}