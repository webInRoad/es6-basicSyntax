/*
Reflect
	设计目的:
		1.以后方法只部署在Reflect对象身上
		2.修改某些Object方法的返回结果
		3.统一标准
			之前有啥 delete obj[key]
					 key in obj等
			统一改成 Reflect.has()
					 Reflect.deleteProperty(obj,name)
		4.方便
 */
//读取
let obj = {
	names : "张三",
	str:"加油"
}
console.info(obj.names);//张三
console.info(Reflect.get(obj,'names'));//张三

//设置
obj.names = '李四'
console.info(obj.names);//李四
Reflect.set(obj,"names","王五");
console.info(Reflect.get(obj,"names"));//王五

//删除
delete obj.str
console.info(obj);//{names: "王五"}
Reflect.deleteProperty(obj,"names")
console.info(obj);//{}