{
	/*$.ajax就是返回promise对象*/
	Promise.all([
		$.ajax({url:'/kaike/promise/data/arr.txt',dataType:'json'}),
		$.ajax({url:'/kaike/promise/data/json.txt',dataType:'json'}),
		$.ajax({url:'/kaike/promise/data/num.txt',dataType:'json'})])
	.then(function(result){
		let [arr,json,num] = result;
		console.info("成功了",arr,json,num)
	},function(err){
		console.info("失败了")
	})
}