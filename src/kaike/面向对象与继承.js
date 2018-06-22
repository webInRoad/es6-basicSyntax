/*
es6面向对象:
1.class关键字、构造器和类分开了
2.class里面直接加方法

 */
//es6之前
/*{
	function User(name,pass){
		this.name = name;
		this.pass = pass;
	}
	User.prototype.showName = function(){
		console.info(this.name);
	}
	//User.prototype.showPass (){
	User.prototype.showPass = function(){
		console.info(this.pass)
	}
	var user = new User("zhangsan","123456");
	user.showName();
	user.showPass();
}*/

//es6之后
/*{
	class User{
		constructor(name,pass){
			this.name = name;
			this.pass = pass;
		}
		showName(){
			console.info(this.name)
		}
		showPass(){
			console.info(this.pass)
		}
	}
	let user = new User("zhangsan","123");
	user.showName();
	user.showPass();
}*/

/*
继承：
	super
 */
/*{
	function User(name,pass){
		this.name = name;
		this.pass = pass;
	}
	User.prototype.showName = function(){
		console.info(this.name);
	}
	User.prototype.showPass = function(){
		console.info(this.pass);
	}
	function VipUser(name,pass,level){
		User.call(this,name,pass);
		this.level = level;
	}
	VipUser.prototype = new User();
	VipUser.prototype.constructor = VipUser;
	VipUser.prototype.showLevel = function(level){
		console.info(this.level);
	}
	var vipUser = new VipUser("BLUE","123",12);
	vipUser.showName();
	vipUser.showPass();
	vipUser.showLevel();
}*/

{
	class User{
		constructor(name,pass){
			this.name = name;
			this.pass = pass;
		}
		showName(){
			console.info(this.name);
		}
		showPass(){
			console.info(this.pass);
		}
	}
	class VipUser extends User{
		constructor(name,pass,level){
			super(name,pass);
			this.level = level;
		}
		showLevel(){
			console.info(this.level);
		}
	}
	var vipUser = new VipUser("BLUE","123",12);
	vipUser.showName();
	vipUser.showPass();
	vipUser.showLevel();
}