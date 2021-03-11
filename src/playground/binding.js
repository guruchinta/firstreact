const obj={
    name:'GuruMallikharuna',
    getName(){
        return this.name;
    }
}

let objName = obj.getName.bind(obj);
let objName1 = obj.getName.bind({name:'Satish'});
console.log(objName());
console.log(objName1());
