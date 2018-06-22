/*
const
1.常量的值就不能改变
2.声明必须赋值
3.对象(引用类型)，可以修改赋值
 */
/*
const声明一个只读的常量。一旦声明，常量的值就不能改变
 */
/*{
	const a = 10;
	a = 20;
	console.log(a)
}*/


{
  const a;
  console.log(a);
}

{
	const obj = {
		user:"张三"
	}
	obj.user = '李四';
	obj.pwd = '123455';
	console.info(obj.user,obj)
}

