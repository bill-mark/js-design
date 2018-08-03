 function loadImg(src){
   console.log('loadImg')
   let promise = new Promise(function(resolve,reject){
   	  let img = document.createElement('img')
   	  console.log('next img')
   	  console.log(img)  
   	  img.onload = function(){
   	  	console.log('resolve')
   	  	resolve(img)
   	  }
   	  img.onerror = function(){
   	  	console.log('onerror')
   	  	reject('lose')
   	  }
   	  img.src = src
   })
   console.log('return promise')
   console.log(promise)
   return promise
 }

 let src = 'https://img2.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'
 console.log('next result')
 let  result = loadImg(src)

result.then(function (img){
	console.log('then1') 
	alert('width'+img.width)
	return img
}).then(function (img){
	console.log('then2')
	alert('height'+img.height)
}).catch(function(ex){
	alert(ex)
})




 // class jQuery  {
	//   constructor(seletor){
 //       let slice = Array.prototype.slice
 //       let dom = slice.call(document.querySelectorAll(seletor))
 //       let len = dom ? dom.length:0
 //       for(let i=0;i<len;i++){
 //       	 this[i] = dom[i]
 //       }
 //       this.length = len
 //       this.seletor = seletor || ''
	//   }
	//   append(node){

	//   }
	//   addClass(name){

	//   }
	//   html(data){

	//   }
 // }

 // window.$ = function (selector) {  //实例化JQ
 // 	//工厂模式
 // 	return new jQuery(selector)
 // }

 // var $p = $('p')
 // console.log($p)
 // console.log($p.addClass)




// class House{
// 	constructor(house){
// 		this.house = house  
// 	}
// }
// class People{
// 	constructor(name,house){
// 		this.name = name
// 		this.house = house
// 	}
// 	saySomething(){


// 	}
// }
// class A extends People{
// 	constructor(name,house){
// 		super(name,house)
// 	}
// 	saySomething(){
// 		alert('i am a')
// 	}
// }
// class B extends People{
// 	constructor(name,house){
// 		super(name,house)
// 	}
// 	saySomething(){
// 		alert('i am b')
// 	}
// }

// let aHouse = new House('beijing')
// let a = new A('a',aHouse)
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