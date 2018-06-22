/*
	Module 模块
		引入文件:import './common/index'
 */
//import './common/index.js'
//import './common/index'
//import './common' //默认就是该文件夹下的index.js文件

/*import {a,fn} from './common/index.js'
console.info(a);//10
console.info(fn());//我是函数*/
import obj from './common'
console.log(obj);//{a: 10, fn: ƒ}