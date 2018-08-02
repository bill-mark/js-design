 class jQuery  {
	  constructor(seletor){
       let slice = Array.prototype.slice
       let dom = slice.call(document.querySelectorAll(seletor))
       let len = dom ? dom.length:0
       for(let i=0;i<len;i++){
       	 this[i] = dom[i]
       }
       this.length = len
       this.seletor = seletor || ''
	  }
	  append(node){

	  }
	  addClass(name){

	  }
	  html(data){

	  }
 }

 window.$ = function (selector) {  //实例化JQ
 	//工厂模式
 	return new jQuery(selector)
 }

 var $p = $('p')
 console.log($p)
 console.log($p.addClass)


















// class People{
// 	constructor(name){
// 		this.name = name
// 	}
// }
// class A extends People{
// 	constructor(name){
// 		super(name)
// 	}
// 	saySomething(){
// 		alert('i an a')
// 	}
// }
// class B extends People{
// 	constructor(name){
// 		super(name)
// 	}
// 	saySomething(){
// 		alert('i am b')
// 	}
// }
// let a = new A('a')
// a.saySomething()
// let b = new B('b')
// b.saySomething()



// class People{
// 	constructor(name,age){
// 		this.name = name
// 		this.age = age
// 	}
// 	eat(){
// 		alert(this.name +' eat something')
// 	}
// 	speak(){
// 		alert('my name is ' +this.name +' , age ' + this.age)
// 	}
// }
 
// class Student extends People{
// 	constructor(name,age,number){
// 		super(name,age)
// 		this.number = number
// 	}
//     study(){
//         alert(this.name + ' study')	
//     }
// }

// let xiaoming = new Student('xiaoming',21,'A1')
// xiaoming.study()
// alert(xiaoming.number)


// let zhang = new People('zhang',20)
// console.log(zhang)
// zhang.eat()
// zhang.speak()

// let wang = new People('wang',21)
// wang.eat()
// wang.speak()



// class People {
// 	constructor(name){
// 		this.name = name
// 	}
// 	getName(){
// 		return this.name
// 	}
// }

// let p = new People('牛sX老师')
// alert(p.getName())