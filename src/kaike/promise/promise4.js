{
	Promise.all([
		$.ajax({url:'/kaike/promise/data/arr.txt',dataType:'json'}),
		$.ajax({url:'/kaike/promise/data/json.txt',dataType:'json'})])
	.then(function(result){
		let [arr,json] = result;
		console.info("成功",arr,json)
	},function(err){
		console.info("失败了")
	})
}