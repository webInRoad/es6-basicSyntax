{
	function ajaxSum(url){
		return new Promise(function(resolve,reject){
			$.ajax({
				url:url,
				dataType:'json',
				success(data){
					resolve(data)
				},
				error(err){
					reject(err)
				}
			})
		})
	}
	Promise.all([ajaxSum('/kaike/promise/data/arr.txt'),ajaxSum('/kaike/promise/data/json.txt')])
	.then(function(data){
		let [arr,json] = data;
		console.info("成功了",arr,json)
	},function(err){
		console.info("至少有一个失败")
	})
	
}