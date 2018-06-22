{
	var li = document.getElementsByTagName("li");
	for(var i=0;i<li.length;i++){
		(function(i){
		li[i].onclick=function(){
			console.info(i)
		}}(i))
	}
	//等于上面的用闭包的立即执行函数
	for(let i=0;i<li.length;i++){
		li[i].onclick=function(){
			console.info(i)
		}
	}
}