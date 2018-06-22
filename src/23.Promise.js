/*
理解：解决异步编程的一种方案
	让异步编程写法感觉像是同步
用法：
	new Promise(function(resolve,reject){
		resolve()
	}).then(function(){//成功.
	
	},function(){//失败
	
	}).then(function(){//成功
	
	},function(){//失败
	
	})
 */
//es6之前的回调函数
/*{
	let fn = function(callback){
		console.info('111')
		setTimeout(function(){
			callback()
		},1000)
	}
	fn(function(){
		console.info("2323")
	})
}*/
//Promise方式
/*{
	let fn = function(){
		return new Promise((resolve,reject)=>{
			console.info("aaa")
			setTimeout(()=>{
				resolve()
			},1000)
		})
	}
	fn().then(()=>{
		console.info("bbb")
	})
}*/
/*{
	let fn = ()=>{
		console.info("zjh")
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve("zjhcyz");
			},1000)
		})
	}
	fn().then(function(data){
			console.info("cyz")
			console.info(data)
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					reject();
				},1000)
			})
		}
	).then(function(){
		console.info("zqyue")
	},function(){
		console.info("zqiaoyue")
	})
}*/
{
	let loadImg = function(srcURL){
		return new Promise((res,rej)=>{
			let imgs = document.createElement("img");
			imgs.src = srcURL;
			imgs.onload = function(){
				res(imgs)
			}
		})
	}
	Promise.race([loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522564091129&di=c042d7ee514796ac8e875a92d487dfbd&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010a1b554c01d1000001bf72a68b37.jpg%401280w_1l_2o_100sh.png'),
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522564344979&di=9087da918e46807330109aedc85944c6&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120727%2F201995-120HG1030762.jpg'),
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522564091129&di=c042d7ee514796ac8e875a92d487dfbd&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010a1b554c01d1000001bf72a68b37.jpg%401280w_1l_2o_100sh.png'),
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522564091129&di=c042d7ee514796ac8e875a92d487dfbd&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010a1b554c01d1000001bf72a68b37.jpg%401280w_1l_2o_100sh.png')]).then(function(img){

		// img.forEach(item=>{

		// 	document.body.appendChild(item);
		
		// })
		document.body.appendChild(img);

	})
}