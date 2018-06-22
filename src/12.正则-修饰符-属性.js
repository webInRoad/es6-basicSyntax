/*
正则:
1.构造函数
	new RegExp(/xxx/ig,'i');
	参数2(修饰符)会覆盖前面的修饰符
2.属性
	flags =>返回正则表达式的修饰符
	sticky =>判断有没有开启y模式
3.修饰符
	y:y和g特别像(全文匹配)
		区别：
			g:后面有就可以了
			y:从匹配后面第一个开始算
	u:正确处理大于\uffff的Unicode字符
	*/
//获取正则的修饰符，用flags属性
{
	let reg1 = new RegExp('xxx','i');
	console.info(reg1.flags);//i
	let reg2 = /xxx/igm;
	console.info(reg2.flags);//gim
}
//参数2(修饰符)会覆盖前面的修饰符
{
	let reg1 = new RegExp(/xxx/ig,'i');
	console.info(reg1.flags);//i
}

//修饰符 y 要求后续紧接着就能匹配上 
//如adad就能匹配到ad两次，但ad_ad就只能匹配到ad一次
//sticky =>判断有没有开启y模式
{
	let str = "ad_ad_add";
	let reg1 = /ad/g;
	let reg2 = /ad/y;
	console.info(reg1.exec(str),reg2.exec(str));
	//["ad", index: 0, input: "ad_ad_add"] ["ad", index: 0, input: "ad_ad_add"]
	console.info(reg1.exec(str),reg2.exec(str));
	//["ad", index: 3, input: "ad_ad_add"] null
	console.info(reg1.sticky,reg2.sticky);
	// false true
}
{
	console.log( /^\uD83D/u.test('\uD83D\uDC2A') );//false
	var s = '𠮷';
	console.log(  /^.$/u.test(s)  );//true
}