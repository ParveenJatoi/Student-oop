#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("!Welcome");
        const answers = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (answers.select == "staff") {
            console.log("You approach the Staff Room please feel free to ask any question");
        }
        else if (answers.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the Student name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name},Nice to meet you`);
                console.log("New Student added");
                console.log("Current student list");
                console.log(persons.students);
            }
            else {
                console.log(`Hello I am ${student.name}.Nice to meet you`);
                console.log("Existing Student List:");
                console.log(persons.students);
            }
        }
        else if (answers.select == "exit") {
            console.log("Exiting The Program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
