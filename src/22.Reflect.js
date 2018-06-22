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
let obj = {
	names : "zjh",
	str:"加油"
}
console.info(obj.names)
console.info(Reflect.get(obj,'names'));

obj.names = 'cyz'
console.info(obj.names)
Reflect.set(obj,"names","zqiaoyue")
console.info(Reflect.get(obj,"names"))
delete obj.str
console.info(obj)
Reflect.deleteProperty(obj,"names")
console.info(obj)