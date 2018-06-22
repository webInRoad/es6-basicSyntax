/*
	1.for...of
		格式: for(let k of xx)
 */
{
	let arr = ['a','b','c'];
	for(let key of arr){
		console.info(key);// a b c 
	}
}
{
	let arr = ['a','b','c'];
	for(let key in arr){
		console.info(key);//0 1 2 
	}
}
{
	let set1 = new Set(['j','k','l']);
	for(let key of set1){
		console.info(key);//j k l 
	}
}
//对象默认无法用for...of遍历
/*{
	let obj = {
		a:1,
		b:2
	}
	for(let k of obj){
		console.info(k);
		//报错 Uncaught TypeError: obj[Symbol.iterator] is not a function
	}
}*/

/*
	2.Iterator(遍历器)
		意义:Iterator接口的目的，就是为所有数据结构，提供了一种统一的访问机制
 */
{
	let arr = ['aa','bb','cc'];
	let iter = arr[Symbol.iterator]();//数组默认就有Symbol.iterator属性
	console.info(iter.next());//{value: "aa", done: false}
	console.info(iter.next());//{value: "bb", done: false}
	console.info(iter.next());//{value: "cc", done: false}
	console.info(iter.next());//{value: undefined, done: true}
}
//对象部署Symbol.iterator属性
{
	let obj = {
		a:['a','b','c','d'],
		[Symbol.iterator](){
			let index = 0;
			let len = this.a.length;
			let arr = this.a;
			return {
				next(){
					if(index<len){
						return {
							value:arr[index++],
							done:false
						}
					}else{
						return {
							value:undefined,
							done:true
						}
					}
				}
			}
		}
	}
	for(let k of obj){
		console.log(k);//a b c d 
	}
}

{
	let obj = {
		a:1,
		b:2,
		[Symbol.iterator](){
			let index = 0;
			return {
				next(){
					if(index<2){
						index++
						if(index==1){
							return {
								value:obj.a,
								done:false
							}
						}else{
							return {
								value:obj.b,
								done:false
							}
						}
					}else{
						return {
							value:undefined,
							done:true
						}
					}
				}
			}
		}
	}
	for(let k of obj){
		console.log(k);//1 2 
	}
}
{
	let obj = {
	    start:[1,3,2],
	    end:[7,9,8],
	    [Symbol.iterator](){
	        let self = this;
	        let index = 0;
	        //结合数组
	        let arr = self.start.concat(self.end);
	        console.info(arr)
	        //数组大小
	        let length = arr.length;
	        console.info(length)
	        //返回闭包
	        return {
	            next(){
	                if (index < length){
	                    return {
	                        value:arr[index++],
	                        done:false
	                    }
	                }else{
	                    return{
	                        value:arr[index++],
	                        done:true
	                    }
	                }
	            }
	        }
	    }
	};
	for(let key of obj){
	    console.log(key)
	}
}