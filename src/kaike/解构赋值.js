/*
解构赋值:
1.左右两边结构必须一样
2.右边必须是个东西
3.声明和赋值不能分开(必须在一句话里完成)
let [a,b,c] = [12,5,8];
let {a,b,c} = {a:12,b:5,c:8}
 */
/*{
	let [a,b,c] = [1,2,3];
	console.info(a,b,c)
}*/
/*{
	let {a,b,c} = {a:12,b:5,c:1};
	console.info(a,b,c)
}*/
/*{
	let {a} = {a:[[{b:3}]]};
	console.info(a)
}*/
/*{
	let [{a,b},[n1,n2,n3],num,str] = [{a:12,b:5},[12,5,8],8,'cxzcv'];
	console.info(a,b,n1,n2,n3,num,str)
}*/
/*{
	//与上面不同粒度
	let [obj,array,num,str] = [{a:12,b:5},[12,5,8],8,'cxzcv'];
	console.info(obj,array,num,str)
}*/
//声明和赋值不能分开(必须在一句话里完成)
/*{
	let [a,b];//不成体统，[a,b]哪来的变量
    [a,b]=[12,5];

    console.log(a,b);
}*/