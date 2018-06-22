/*
	数值方法:
	1.parseInt() parseFloat() 都是定义在全局对象下(window)
	  es6下改成在 Number下  Number.parseInt() Number.parseFloat()
	2.Number对象新增方法
	  Number.isFinite():检测一个数值是否有限
	  Number.isNaN():检测一个数值是否是NaN
	  Number.isInteger():判断一个数值是否为整数
	3.Math对象新增方法
	  Math.trunc():去除小数部分，返回整数部分
	  Math.sign():判断一个数值是:整数、负数、0
	  整数:1
	  负数:-1
	  0:0
	  -0:-0
	  其他:NaN
 */
{
	let num = "3px";
	console.info(Number.parseInt(num));//3
}
{
  console.log( Number.isFinite(3) );//true
  console.log( Number.isFinite(NaN) );//false
  console.log( Number.isFinite('你好中国'));//false
  console.log( Number.isFinite(true));//false
  console.log( Number.isFinite(10/0));//false
}
{
  console.log( Number.isNaN(3));//false
  console.log( Number.isNaN(true));//false
  console.log( Number.isNaN(10/0));//false
  console.log( Number.isNaN(NaN));//true
}
{
  console.log( Number.isInteger(3));//true
  console.log( Number.isInteger(3.1415));//false
  console.log( Number.isInteger(true));//false
  console.log( Number.isInteger(3.0));//true
}
{
  console.log( Math.trunc(3.99999));//3
}
{
  console.log( Math.sign(3)); //1
  console.log( Math.sign(-3)); //-1
  console.log( Math.sign(0));//0
  console.log( Math.sign(-0));//-0
  console.log( Math.sign('你好中国'));//NaN
}