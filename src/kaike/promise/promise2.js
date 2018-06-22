{
	let p1 = new Promise(function(resolve,reject){
		$.ajax({
			url:'/kaike/promise/data/arr.txt',
			dataType:'json',
			success(data){
				resolve(data)
			},
			error(err){
				reject(err)
			}
		})
	})
	let p2 = new Promise(function(resolve,reject){
		$.ajax({
			url:'/kaike/promise/data/json.txt',
			dataType:'json',
			success(data){
				resolve(data)
			},
			error(err){
				reject(err)
			}
		})
	})
	/*Promise.all([]) 参数为数组*/
	Promise.all([p1,p2]).then(function(data){
		let [arr,json] = data;
		console.info("成功了",arr,json)
	},function(err){
		console.info("至少有一个请求失败了")
	})
}