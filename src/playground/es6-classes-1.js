class Person{
    constructor(name,address){
        // console.log('test ' +name);
        this.name = name;
        this.address = address || 'Kansas';
    }
    
    
    locationInfo(){
        return `Hi This is `+this.name;
    }

}

class Student extends Person{
    constructor( major){
        super();
        this.major = major;
    }
    hasMajor(){
        return `${this.name}  ${this.address} ${this.major}`;
        console.log("{}")
    }
    

}

class loc extends Person{
    constructor(name, address, location){
        super(name,address);
        this.location= location;
    }
    hasLocation(){
        return !!this.location
    }
    locationInfo(){
        let description = super.locationInfo();
        if(this.hasLocation){
            description+=`  My city Location is ${this.location}`;
        }
        return description;
    }
}


const me = new Person("Gurumallikharjuna", "Fresno");
const student = new Student("Chinta","Kansa","CSE");

const lc = new loc("Guru Malli",'Kansas','Somewhere in USA');
// console.log(me.name);
// console.log(student.hasMajor());

console.log(lc.locationInfo());