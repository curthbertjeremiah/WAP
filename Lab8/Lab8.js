const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
    }
}

const stu1 = Object.create(student);
stu1.firstName = 'Paul'; stu1.lastName = 'Walker';
stu1.inputNewGrade(70);
stu1.inputNewGrade(80);
stu1.inputNewGrade(90);
stu1.inputNewGrade(100);
const stu2 = Object.create(student);
stu2.firstName = 'Steve';
stu2.lastName = 'Jean';
stu2.inputNewGrade(75);
stu2.inputNewGrade(85);
stu2.inputNewGrade(95);
stu2.inputNewGrade(65);
const students = [stu1, stu2];
const result = students.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(`Result 1: ${result}`);



function Student2(firstName, lastName, grades = []) {
    this.firstName = firstName; this.lastName = lastName; this.grades = grades;
}

Student2.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}

Student2.prototype.computeAverageGrade = function () {
    return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
}

const stu3 = new Student2('Lebron', 'James');
stu3.inputNewGrade(70);
stu3.inputNewGrade(80);
stu3.inputNewGrade(90);
stu3.inputNewGrade(100);
const stu4 = new Student2('Micheal', 'Jackson');
stu4.inputNewGrade(75);
stu4.inputNewGrade(85);
stu4.inputNewGrade(95);
stu4.inputNewGrade(95);
const students2 = [stu3, stu4];
const result2 = students2.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(`Result 2: ${result2}`);

Array.prototype.mysort = function () {
    let arr = this; let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log([83, 14, 27, 95, 71, 36, 41, 67, 89, 2].mysort());