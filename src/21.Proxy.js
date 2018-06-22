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
//源对象
let obj = {
	names:"衣服",
	times:"2017年1月1日",
	str:"这衣服还行",
	_r: 123
}
//创建代理
let personZ = new Proxy(obj,{
	// 拦截对象属性的读取
	get(target,key){
		//对值进行替换
		return target[key].replace("2017", "2018");
		//或者设置是否可读取
		/*if(key=="times"){
			return false;
		}else{
			return target[key];
		}*/
	},
	// 拦截对象设置属性
	set(target,key,val){
		//设置为只允许修改 str
		if(key=='str'){
			return target[key] = val;
		}else{
			return target[key]
		}
	},
	// 拦截 key in object 操作
    has(target, key) {
    	//只能获取到names
        if (key === 'names') {
            return target[key]
        } else {
            return false;
        }
    },
    // 删除属性操作
	deleteProperty(target,key){
		// 存在下划线 也就是 _r 允许删除
		if(key.indexOf('_') > -1){
			delete target[key];
            return true;
		}else{
			return target[key];
		}
	},
	/**
     * 拦截
     * Object.keys
     * Object.getOwnPropertySymbols()
     * Object.getOwnPropertyNamess()
     *
     */
    ownKeys(target){
        return Object.keys(target).filter(
            item => item !== 'times'
        )
    }
})
// 1. get 拦截测试
console.log('get', personZ.times);//get 2018年1月1日
// 2. set 拦截测试
personZ.times = "2019";//时间无法修改
personZ.str = '修改成功';
console.log('set', personZ);
//set Proxy {names: "衣服", times: "2017年1月1日", str: "修改成功", _r: 123}
// 3. has 拦截测试
console.log('has', 'names' in personZ,'times' in personZ);//has true false
// 4. 删除操作
delete personZ.times;
console.log('delete',personZ);
//delete Proxy {names: "衣服", times: "2017年1月1日", str: "修改成功", _r: 123}
delete personZ._r;
console.log('delete',personZ);
//delete Proxy {names: "衣服", times: "2017年1月1日", str: "修改成功"}
// 5. ownKeys
console.log('own',Object.keys(personZ))
//own (2) ["names", "str"]
