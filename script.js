//complete this code
class Person {
	private name: string;
	private age: number;
	constructor(name: string, age: number){
		this.name =  name;
		this.age=age;
	}
	getName():string {
		return this.name;
	}
	setName(name:string) void{
		this.name=name;
	}
	getAge():number{
		return this.age;
	}
	setAge(age:number)void{
		this.age=age;
	}
}

class Student extends Person {
	
	study():void{
		console.log(this.getName()+" is studying");
	}
}

class Teacher extends Person {

	teach():void{
		console.log(this.getName+" is teaching");
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
