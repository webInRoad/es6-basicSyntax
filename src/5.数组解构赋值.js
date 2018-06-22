/*
1.数组结构赋值
	格式： let [a,b,c] = [1,2,3]
	注意:
		1.如果匹配不到，则变量值是undefined
		2.如果等号的右边不是数组（或者严格地说，不是可遍历的结构）
			，那么将会报错
	默认值
 */
/*{
	var arr = [1,2,3];
	var a,b,c;
	a = arr[0];
	b = arr[b];
	c = arr[c];
}
{
	let arr = [1,2,3];
	let [a,b,c] = arr;
	console.info(a,b,c)
}
{
	let [a,b,c] = [1,2];
	console.info(a,b,c)
}
{
	const [a,b,c] = [1,2];
	console.info(a,b,c)
}
{
	let [a,[[b]],c] = [1,[[2]],3];
	console.info(a,b,c)
}
{
	let [a,b] = [1,2,3];
	console.info(a,b)
}*/
//要求是可iterator的数
/*{
	let [num] = {
		num:1,
		str:"2"
	};
	console.info(num)
}*/
/*默认值*/
{
	let [a=true] = [];
	console.info(a);//true
	let [b=true] = [undefined];
	console.info(b);//true 
	let [c=true] = [null];
	console.info(c);//null
	let [d=true] = [1];
	console.info(d);//1
}

/*...相当于余下的所有值组成的数组*/
{
	let [a,b,...c] = [1,2,3,4,5,7,7]
	console.info(a,b,c);
	c.push("aaa");
	console.info(c)
}