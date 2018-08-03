 function loadImg(src){
   let promise = new promise(function(resolve,reject){
   	  let img = document.creeateElement('img')
   	  img.onload = function(){
   	  	resolve(img)
   	  }
   	  img.onerror = function(){
   	  	reject('lose')
   	  }
   })
   return promise
 }

 let  src = 'http://img.zcool.cn/community/01b34f58eee017a8012049efcfaf50.jpg@1280w_1l_2o_100sh.jpg'
 let  result = loadImg(src)

result.then(function (img){
	alert('width'+img.width)
	return img
}).then(function (img){
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