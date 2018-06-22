/*
Proxy(代理)
	1.理解
		源对象
		代理(拦截)
		操作
		//打个比方
		易驰衣服：相当于供应商
		代理商(张先生)
		用户(买)
	2.使用(拦截)
	 get():拦截对象属性的读取
	 set():拦截对象属性的设置
	 deleteProperty():拦截删除对象key操作
 */
//源对象==》易驰衣服
let obj = {
	names:"衣服",
	times:"2018年1月1日",
	str:"这衣服还行"
}
let personZ = new Proxy(obj,{
	get(target,key){
		if(key=="times"){
			return false;
		}else{
			return target[key];
		}
	},
	set(target,key,val){
		if(key=='str'){
			return target[key] = val;
		}else{
			return target[key]
		}
	},
	deleteProperty(target,key){
		if(key=="str"){
			return target[key];
		}else{
			return delete target[key];
		}
	}
})
console.info(personZ.names);
personZ.str='修改成功';
console.info(personZ.str)
console.log(delete personZ.names)
console.log(personZ)
