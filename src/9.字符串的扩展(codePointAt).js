/*
字符串的扩展
1.Unicode
 注意:
 	1.超出FFFF范围：吉
 	2.解决超出不能正确识别的字符:{}
2.新增方法
	codePointAt() == >可以识别32位的UTF-16字符
	应用场景:判断当前字符是否大于==》0xFFFF
	at() ==>修正了chartAt()不能解析大于0xFFFF
 */
{
	let str = '\u00ff';
	console.info(str);//ÿ
}
{
	let str = '\uD842\uDFB7';
	console.info(str)//𠮷
}
{

  let str = "\u20BB7";  //₻7
  //\u20BB+"7" 超出FFFF范围 无法正确识别字符
  console.log(str);//₻7

}
{
	let str = "\u{20BB7}";
	console.log(str);//𠮷
}
/*  codePointAt
	正确处理 4 个字节储存的字符，返回一个字符的码点
*/
{
	var s = "𠮷";//2个字符 4个字节 此时用chartAt与charCodeAt都无法获取正确值
	console.info(s.length);//2
	console.info(s.charAt(0));//�
	console.info(s.charAt(1));//�
	console.info(s.charCodeAt(0).toString(16));//d842
	console.info(s.charCodeAt(1).toString(16));//dfb7
	console.log( s.codePointAt(0).toString(16));//20bb7
	console.log( s.codePointAt(1).toString(16));//dfb7
}

{

  let str = '𠮷a';
  console.log(str.codePointAt(0).toString(16));//返回𠮷的十六进制码点 20bb7
  console.log(str.codePointAt(1).toString(16));//与charCodeAt的第二值一样 dfb7
  console.log(str.codePointAt(2).toString(16));//61
  for(let s of str){// 20bb7 // 61
    console.log(s.codePointAt(0).toString(16));//20bb7 61
  }
}
{
  //测试一个字符由两个字节还是由四个字节组成
  function demo(str){
      return str.codePointAt(0) > 0xFFFF;
  }
  console.log(demo("你"));//false
  console.log(demo("𠮷"));//true
}
/*at可以识别 Unicode 编号大于0xFFFF的字符，返回正确的字符*/
{
   console.log('abc'.at(0));//a
   console.log('𠮷'.at(0) );//𠮷
}

