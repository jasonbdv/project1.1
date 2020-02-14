// prototype 

function Student(name, section){
    this.name = name;
    this.section = section;
}

Student.prototype.fullname = function(){
    return (this.name + " is enrolled in section " + this.section +"<br>");
}

Student.prototype.school = "UST";

let stud1 = new Student("Juan Dela Cruz", "1ITE");
let stud2 = new Student("Roger Raker", "4ITC");

document.write(stud2.fullname());
document.write(`${stud2.name} is studying in ${stud2.school}`);