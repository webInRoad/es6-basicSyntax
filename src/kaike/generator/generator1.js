/*
generator=>生成器
generat=>生成
普通函数=>一路到底执行
generator函数=>踹一脚走一步
 */
{
	function * show(){
		console.info('a')
		yield
		console.info('b')
	}
	let genObj=show();
	genObj.next();
	genObj.next();
}