/*
字符串:
1.多了两个新方法
  startsWith
  endsWith
2.字符串模板
  字符串连接
  i.直接把东西塞到字符串里面      ${东西}
  ii.可以折行
  */
  /*{
  	let url = "git://www.baidu.com/2123123";
  	if(str.startsWith('http://')){
  		console.info('普通网址');
  	}else if(str.startsWith('https://')){
  		console.info('加密网址');
  	}else if(str.startsWith('git://')){
  		console.info('git地址');
  	}else if(str.startsWith('svn://')){
  		console.info('svn地址');
  	}else{
  		console.info('其他');
  	}
  }*/
  //endsWith
  /*{
  	let str = "1.png";
  	if(str.endsWith('.txt')){
  		console.info('文本文件');
  	}else if(str.endsWith('.jpg')){
  		console.info('JPG图片');
  	}else{
  		console.info('其他');
  	}
  }*/

  //字符串模板
  /*{
  	let a = 12;
  	let result = `ad${a}23`
  	console.info(result)
  }*/
 /* {
  	let title = "标题";
  	let content = "内容";
  	let str = "<div><h1>";
  	str+=title+"</h1><p>";
  	str+=content+"</p></div>";
  	console.info(str)
  	document.getElementById("test").innerHTML=str
  }*/
  {
  	let title = "标题";
  	let content = "内容";
  	let str = `<div><h1>${title}</h1><p>${content}</p></div>`
  	console.info(str)
  	document.getElementById("test").innerHTML=str
  }