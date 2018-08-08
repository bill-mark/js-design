//工厂模式
class Product {
	constructor(name){
		this.name = name
	}
	init(){
		console.log('init')
	}
	fun1(){
		console.log('fun1')
	}
	fun2(){
		console.log('fun2')
	}
}

class Creator {
	create(name){
		return new Product(name)
	}
}

//测试
let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fun1()

//停车场问题
class Car{
	constructor(num){
      this.num = num
	}
}
class Camera{
	shot(car){
		return {
			num:car.num,
			inTime:Date.now()
		}
	}
}
class Screen{ //出口显示屏
    show(car,inTime){
    	console.log('车牌号',car.num)
    	console.log('停车时间',Date.now() - inTime)
    }
}
class Park{
	constructor(floors){
		this.floors = floors || []
		this.camera = new Camera()
		this.screen = new Screen()
		this.carList = {} //存贮摄像头回传信息
	}
	in(car){
       //通过摄像头获取信息
       const info = this.camera.shot(car)
       //得到某个停车位
       const i = parseInt(Math.random() * 100 %100)
       const place = this.floors[0].places[i]
       place.in()
       info.place = place
       //记录信息
       this.carList[car.num] = info

	}
	out(car){
       //获取信息
       const info = this.carList[car.num]
       //将停车位情清空
       const place = info.place
       place.out()
       //显示时间
       this.screen.show(car,info.inTime)
       //清空记录
       delete this.carList[car.num]
	}
	emptyNum(){
		return this.floors.map( floor =>{
			return floor.index + '层还有'+floor.emptyPlaceNum()+'个空闲车位'
		}).join('\n')
	}
}
class Floor{
	constructor(index,places){
		this.index = index
		this.places = places
	}
	emptyPlaceNum(){
        let  num = 0
        this.places.forEach(p  => {
        	if(p.empty){
        		num = num +1
        	}
        })
        return num
	}
}
class Place{  //车位
	constructor(){
		this.empty = true
	}
	in(){
		this.empty = false
	}
	out(){
		this.empty = true
	}
}
//测试
const floors = []
for(let i =0;i<3;i++){
	const places = []
	for (let j =0;j<100;j++){
		places[j] = new Place()
	}
	floors[i] = new Floor(i+1,places)    
}
const park = new Park(floors)

const  car1  = new Car(100)
const  car2 = new Car(200)
const  car3 = new Car(300)

console.log('first in')
console.log(park.emptyNum)
park.in(car1)
console.log('second in')
console.log(park.emptyNum)
park.in(car2)

console.log('first out')
park.out(car1)
console.log('second out')
park.out(car2)







//快车慢车问题
class Car{
	constructor(number,name){
		this.number = number
		this.name = name
	}
}
class Kuaiche extends Car{
    constructor(number,name){ 
    	super(number,name)
    	this.price = 1
    }
}
class Zhuanche extends Car{
	constructor(number,name){
		super(number,name)
		this.price = 2
	}
}
class Trip{
	constructor(car){
		this.car = car
	}
	start(){
		console.log('start  car name is '+this.car.name+' car number is'+this.car.number)
	}
	end(){
		console.log('end price is '+this.car.price*5)
	}
}
let car = new Zhuanche(1002233,'bmw')
let trip = new Trip(car)
trip.start()
trip.end()




 function loadImg(src){
   console.log('loadImg')
   let promise = new Promise(function(resolve,reject){
   	  let img = document.createElement('img')
   	  console.log('next img')
   	  console.log(img)
   	  console.log('next img2')
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
	//alert('width'+img.width)  //单一职责原则,只干一件事
	return img
}).then(function (img){
	console.log('then2')
	//alert('height'+img.height) //单一职责原则,只干一件事
}).catch(function(ex){
	alert(ex)
})





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




class House{
	constructor(house){
		this.house = house  
	}
}
class People{
	constructor(name,house){
		this.name = name
		this.house = house
	}
	saySomething(){


	}
}
class A extends People{
	constructor(name,house){
		super(name,house)
	}
	saySomething(){
		alert('i am a')
	}
}
class B extends People{
	constructor(name,house){
		super(name,house)
	}
	saySomething(){
		alert('i am b')
	}
}

let aHouse = new House('beijing')
let a = new A('a',aHouse)
a.saySomething()
let b = new B('b')
b.saySomething()







class People{
	constructor(name,age){
		this.name = name
		this.age = age
	}
	eat(){
		alert(this.name +' eat something')
	}
	speak(){
		alert('my name is ' +this.name +' , age ' + this.age)
	}
}
 
class Student extends People{
	constructor(name,age,number){
		super(name,age)
		this.number = number
	}
    study(){
        alert(this.name + ' study')	
    }
}

let xiaoming = new Student('xiaoming',21,'A1')
xiaoming.study()
alert(xiaoming.number)


let zhang = new People('zhang',20)
console.log(zhang)
zhang.eat()
zhang.speak()

let wang = new People('wang',21)
wang.eat()
wang.speak()



class People {
	constructor(name){
		this.name = name
	}
	getName(){
		return this.name
	}
}

let p = new People('牛sX老师')
alert(p.getName())