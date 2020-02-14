//object creation using factory function

function createStudent(name, section){
    let stud = {};
    stud.name = name;
    stud.section = section;
    return stud;
}

let juan = createStudent("juan dela cruz", "2ITH");

let pedro = createStudent("pedro fernandez", "2ITA")

document.write(`${juan.name} is enrolled in section ${juan.section}`);
document.write(`${pedro.name} is enrolled in section ${pedro.section}`);