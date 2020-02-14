//object creation using ECMAScript 6 (ES6) syntax

class Student{
    constructor(name, course, section){
        this.name = name;
        this.course = course;
        this.section = section;
    }

    speak = function(language){
        document.write(`${this.name} can speak ${language}`)
    }
}

let stud1 = new Student("Juan Dela Cruz", "IT", "2ITA");
let stud2 = new Student("Pedro Hernandez", "CS", "2CSB");

stud2.speak("Visaya");