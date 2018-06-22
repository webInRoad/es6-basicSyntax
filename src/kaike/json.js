/*
json:
1.JSON对象
	JSON.stringify  json=>string
	JSON.parse      json格式的string=>json
 */
/*{
	let json = {a:12,b:3};
	let str='http://it.kaikeba.com/path/user?data='+encodeURIComponent(JSON.stringify(json));
	console.info(str)
}*/
/*
json的标准写法：
1.只能用双引号
2.所有的名字都必须用双引号包起来
此时才能用JSON.parse进行转换

{a: 12, b: 5}       ×
{"a": 12, "b": 5}   √

{a: 'abc', b: 5}    ×
{"a": "abc", "b": 5}√
 */
/*{
	//let str = "{\"a\": \"abc\", \"b\": 5} ";
	let str = '{"a": "abc", "b": 5} ';
	console.info(JSON.parse(str))
}*/

/*
2.简写
  名字跟值(key和value)一样的      留一个就行
  方法                           : function一块删
    show: function (){...}
    show(){...}
 */
{
	let a = "23",b="45"
	//let json = {a:a,b:b}//正确的格式，不进行JSON.parse，不用遵行只能用双引号的规则
	//let json = {"a":a,"b":b}//正确的格式，不进行JSON.parse，不用遵行只能用双引号的规则
	//let json = {'a':a,'b':b}//正确的格式，不进行JSON.parse，不用遵行只能用双引号的规则
	//let str = "{'a':3}"//错误的格式
	/*let str = '{"a":3}'//正确的格式，只能用双引号
	console.info(JSON.parse(str))*/
	let json = {a,b};//简写
	console.info(json)
}
{
	let json = {
		a:12,
		/*show:function(){
			console.info(this.a)
		}*/
		//简写成
		show(){
			console.info(this.a)
		}
	}
	json.show()
}