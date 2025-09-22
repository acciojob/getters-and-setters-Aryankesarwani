//complete this code
class Person {
	name: string;
	age: number;
	constructor(name: string, age: number){
		this.name =  name;
		this.age=age;
	}
	get name():string {
		return this.name;
	}
	set name(name:string) void{
		this.name=name;
	}
	get age():number{
		return this.age;
	}
	set  age(age:number)void{
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
