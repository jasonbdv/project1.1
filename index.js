//object creation using constructor function

function Student(name, section){
    this.name = name;
    this.section = section;
    this.speak = function(language){
        document.write(`${this.name} can speak ${language}`);
    }

}

let stud1 = new Student("Juan Dela Cruz", "2ITA");
stud1.speak("chingchong");