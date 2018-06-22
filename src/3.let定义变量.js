/* 
let
1.定义的变量只在代码块中有效
2.在for循环外是访问不到的
3.不存在变量提升
4.只要一进入当前作用域，
所要使用的变量就已经存在了，但是不可获取，
只有等到声明变量的那一行代码出现，才可以获取和使用该变量
5.不能在函数内部重新声明参数
*/
/*{

  var a =20;

}
console.log(a);*/
/*let定义的变量只在代码块中有效*/
/*{
  let a = 20;
}
console.log(a);*/
/*{
  let a =30;
  {
    console.log(a);
  }
}*/
/*let在for循环外是访问不到的*/
for(var i=0;i<3;i++){

}
console.log(i)
/*for(let j=0;j<3;j++){

}
console.info(j);*/
var li = document.getElementsByTagName("li");
/*for(var i=0;i<li.length;i++){
  li[i]["index"] = i;
  li[i].onclick = function(){
    alert(this.index);
    console.info(this.index)
  }
}*/
for(var i=0;i<li.length;i++){
  (function(i){
    li[i].onclick = function(){
      console.info(i)
    }
  })(i)
  
}
/*for(let i=0;i<li.length;i++){
  li[i].onclick = function(){
    alert(i);
  }
}*/
/*let定义的变量不存在变量提升,要去掉babel直接转成es5的配置来验证*/
/*console.log(foo);// 输出undefined
var foo = 2;
console.log(bar);// 报错ReferenceError
let bar = 2;*/
/*暂时性死区 只要块级作用域内存在let命令，
它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响*/
/*
暂时性死区的本质就是，只要一进入当前作用域，
所要使用的变量就已经存在了，但是不可获取，
只有等到声明变量的那一行代码出现，才可以获取和使用该变量
*/
/*var tmp = 23;
if(true){
  tmp = 'abc';// ReferenceError
  let tmp;
}*/

/*不能在函数内部重新声明参数*/
/*{
  let a = 10;
  let a = 20;
  console.log(a);
}*/

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();

var a = [];
for (var i = 0; i < 10; i++) {
  (function(i){
    a[i] = function () {
      console.log(i);
    };
  }(i))
}
a[6]();


